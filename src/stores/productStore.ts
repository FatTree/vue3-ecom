import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { OrderByEnum, type ProductCardListViewModel, type ProductCardViewModel, type ProductDetailViewModel } from '@/models/viewModel';
import type { ProductModel, ProductObjModel } from '@/models/dataModel';
import { formateBrandListToViewModel, formatProductCardListToViewModel, formatProductCardToViewModel, formatProductDetailToViewModel } from '@/utils/modelFormatter';
import useData from '@/composable/useData';

export const useProductStore = defineStore('product', () => {
  const productObj = useData<ProductObjModel>();
  const productDetailComp = useData<ProductModel>();

  const _productData = ref<ProductObjModel>();
  const _productCardList = ref<ProductCardListViewModel>();
  const productCardList = ref<ProductCardListViewModel>();
  const productDetail = ref<ProductDetailViewModel>();

  const brandList = computed<string[]>(() => {
    if(_productData.value) {
      return formateBrandListToViewModel(_productData.value);
    }
    return [];
  });

  const isDone = ref<boolean>(true);
  const isError = ref<boolean>(false);

  const initProduct = () => {
    if(_productData.value) {
      productCardList.value = JSON.parse(JSON.stringify(_productCardList.value));
    }
  }

  const getProductObg = async (category: string, limit=0, skip=0) => {
    isDone.value = false;
    const _dataModel: ProductObjModel = await productObj.fetchedData(`/products/category/${category}?limit=${limit}&skip=${skip}`);
    _productData.value = _dataModel;
    if(!productObj.isError.value) {
      _productCardList.value = formatProductCardListToViewModel(_dataModel);
      productCardList.value = JSON.parse(JSON.stringify(_productCardList.value));
    }
    isDone.value = true;
  }

  const getProductDetail = async (id: string) => {
    const _dataModel: ProductModel = await productDetailComp.fetchedData(`/products/${id}`);
    productDetail.value = formatProductDetailToViewModel(_dataModel);
  }

  const filterProduct = (query: string[]) => {
    try {
      isDone.value = false;
      const _list = JSON.parse(JSON.stringify(_productCardList.value));
      if(query.length > 0 && _productCardList.value && productCardList.value) {
        productCardList.value = {
          ...productCardList.value,
          products: _list.products.filter((product: ProductCardViewModel) => query.includes(product.brand))
        }
      } else {
        productCardList.value = _list;
      }
    } catch (error) {
      isError.value = true;
      console.error(error);
    } finally {
      isDone.value = true;
    }
  }

  const selectedBrands = ref<string[]>([]);

  const clearSelectedBrands = () => {
      if (selectedBrands.value.length) {
          selectedBrands.value = [];
          initProduct();
      }
  }

  const sortProduct = (order: OrderByEnum) => {
    try {
      isDone.value = false;
      if(productCardList.value) {
        let result = JSON.parse(JSON.stringify(_productCardList.value));
        if(order === OrderByEnum.ASC) {
          result.products = productCardList.value.products.sort((a: ProductCardViewModel, b: ProductCardViewModel) => a.price - b.price);
          return result;
        } else if(order === OrderByEnum.DESC) {
          result.products = productCardList.value.products.sort((a: ProductCardViewModel, b: ProductCardViewModel) => b.price - a.price);
          return result;
        } else {
          return productCardList.value.products;
        }
        productCardList.value = result;
      }
    } catch (error) {
      isError.value = true;
      console.error(error);
    } finally {
      isDone.value = true;
    }
  }

  return { 
    getProductObg,
    getProductDetail,
    filterProduct,
    sortProduct,
    initProduct,
    clearSelectedBrands,
    productObj,
    productDetail,
    selectedBrands,
    brandList,
    productCardList,
    isDone,
    isError
  }
})