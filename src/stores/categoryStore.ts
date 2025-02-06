import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import useData from '@/composable/useData';
import type { CategoryModel } from '@/models/dataModel';

export const useCategoryStore = defineStore('category', () => {
  const categoryNameListApi = useData<string[]>();
  const categoryListApi = useData<CategoryModel[]>();

  const categoryNameList = ref<string[]>([]);
  const categoryList = ref<CategoryModel[]>([]);

  const getCategoryNameList = async () => {
    if(!categoryNameList.value.length) {
      categoryNameList.value = await categoryNameListApi.fetchedData('/products/category-list')
    }
  }

  const getCategoryList = async () => {
    if(!categoryList.value.length) {
      categoryList.value = await categoryListApi.fetchedData('/products/categories')
    }
  }

  return { 
    getCategoryNameList,
    categoryNameList,
    getCategoryList,
    categoryList,
  }
})
