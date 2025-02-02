import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import useApi from '@/composable/useApi'
import type { ProductDetailViewModel } from '@/models/viewModel';
import type { ProductModel } from '@/models/dataModel';

export const useProductStore = defineStore('product', () => {
  const productCategoryApi = useApi();
  const productFilterApi = useApi();
  const productSortApi = useApi();
  const productDetailApi = useApi();

  const {
    callApi: callProductCategoryApi,
    fetchData: productCategoryList,
    isLoading: isProductCategoryLoading
  } = productCategoryApi;

  const {
    callApi: callProductFilterApi,
    fetchData: productFilterList,
    isLoading: isProductFilterLoading
  } = productFilterApi;

  const {
    callApi: callProductSortApi,
    fetchData: productSortList,
    isLoading: isProductSortLoading
  } = productSortApi;

  const {
    callApi: callProductDetailApi,
    fetchData: productDetailList,
    isLoading: isProductDetailLoading
  } = productDetailApi;

  const getProductCategoryApi = async (category: string, limit=0, skip=0) => {
    if(limit!==0) {
      await callProductCategoryApi<ProductModel[]>(`/products/category/${category}?limit=${limit}&skip=${skip}`);
    } else {
      callProductCategoryApi(`/products/category/${category}`);
    }
  }

  const getProductFilterApi = (query: string, limit=4, skip=0) => {
    callProductFilterApi(`/products/search?q=${query}&limit=${limit}&skip=${skip}`);
  }

  const getProductSortApi = async (category: string, limit=4, skip=0, order: string) => {
    await callProductSortApi(`/products/category/${category}?limit=${limit}&skip=${skip}&sortBy=price&order=${order}`);
  }

  const getProductDetailApi = async (id: string) => {
    await callProductDetailApi(`/products/${id}`);
  }

  return { 
    getProductCategoryApi,
    productCategoryList,
    isProductCategoryLoading,
    getProductFilterApi,
    productFilterList,
    isProductFilterLoading,
    getProductSortApi,
    productSortList,
    isProductSortLoading,
    getProductDetailApi,
    productDetailList,
    isProductDetailLoading
  }
})
