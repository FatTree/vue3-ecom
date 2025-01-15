import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import useApi from '@/composable/useApi';
import type { CategoryModel } from '@/models/dataModel';

export const useCategoryStore = defineStore('category', () => {
  const categoryNameListApi = useApi();
  const categoryListApi = useApi();

  const {
    callApi: callNameApi,
    fetchData: categoryNameList,
    isLoading: isCategoryNameLoading
  } = categoryNameListApi;

  const getCategoryNameList = () => {
    if(!categoryNameList.value) {
      callNameApi('/products/category-list')
    }
  }

  const {
    callApi,
    fetchData: categoryList,
    isLoading: isCategoryLoading
  } = categoryListApi;

  const getCategoryList = async () => {
    if(!categoryList.value) {
      await callApi<CategoryModel[]>('/products/categories')
    }
  }

  return { 
    getCategoryNameList,
    categoryNameList,
    isCategoryNameLoading,
    getCategoryList,
    categoryList,
    isCategoryLoading
  }
})
