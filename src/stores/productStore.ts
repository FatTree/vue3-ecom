import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { OrderByEnum, type MoreProductViewModel, type ProductCardListViewModel, type ProductCardViewModel, type ProductDetailViewModel } from '@/models/viewModel';
import type { ProductModel, ProductObjModel } from '@/models/dataModel';
import { formateBrandListToViewModel, formatProductCardListToViewModel, formatProductCardToHomePageGroup, formatProductCardToViewModel, formatProductDetailToViewModel } from '@/utils/modelFormatter';
import useData from '@/composable/useData';

export const useProductStore = defineStore('product', () => {
  const productObj = useData<ProductObjModel>();
  const {
    isReady: productIsReady,
  } = productObj;

  const productDetailComp = useData<ProductModel>();
  const {
    isReady: productDetailIsReady,
  } = productDetailComp;
  
  const homePageLoadMoreProductCard = useData<ProductObjModel>();
  const {
    isReady: loadIsReady,
  } = homePageLoadMoreProductCard;

  const _productData = ref<ProductObjModel>();
  const _productCardList = ref<ProductCardListViewModel>();

  const productCardList = ref<ProductCardListViewModel>();
  const productDetail = ref<ProductDetailViewModel>();
  const homePageProductList = ref<MoreProductViewModel[]>([]);

  const brandList = computed<string[]>(() => {
    if(_productData.value) {
      return formateBrandListToViewModel(_productData.value);
    }
    return [];
  });
  
  // Product Card List
  const _initProduct = (): ProductCardListViewModel => (JSON.parse(JSON.stringify(_productCardList.value)))
  
  const getProductCardPageObj = async (category: string, limit=0, skip=0) => {
    productIsReady.value = false;
    const _dataModel: ProductObjModel = await productObj.fetchedData(`/products/category/${category}?limit=${limit}&skip=${skip}`);
    _productData.value = _dataModel;
    if(!productObj.isError.value) {
      _productCardList.value = formatProductCardListToViewModel(_dataModel);
      productCardList.value = _initProduct();
    }
    productIsReady.value = true;
  }


  const sortProduct = (order: OrderByEnum) => {
    try {
      productIsReady.value = false;
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
      }
    } catch (error) {
      productObj.isError.value = true;
      console.error(error);
    } finally {
      productIsReady.value = true;
    }
  }

  const filterProduct = (query: string[]) => {
    try {
      productIsReady.value = false;
      const _list = _initProduct();
      if(query.length > 0 && _productCardList.value && productCardList.value) {
        productCardList.value = {
          ...productCardList.value,
          products: _list.products.filter((product: ProductCardViewModel) => query.includes(product.brand))
        }
      } else {
        productCardList.value = _list;
      }
    } catch (error) {
      productObj.isError.value = true;
      console.error(error);
    } finally {
      productIsReady.value = true;
    }
  }

  const selectedBrands = ref<string[]>([]);

  const clearSelectedBrands = () => {
      if (selectedBrands.value.length) {
          selectedBrands.value = [];
          productCardList.value = _initProduct();
      }
  }


  // Product Detail
  const getProductDetail = async (id: string) => {
    productDetailIsReady.value = false;
    const _dataModel: ProductModel = await productDetailComp.fetchedData(`/products/${id}`);
    productDetail.value = formatProductDetailToViewModel(_dataModel);
    productDetailIsReady.value = true;
  }


  // homePage Load More Product Card
  const loadMoreProducts = async (category: string) => { 
    loadIsReady.value = false;
    const _dataModel: ProductObjModel = await homePageLoadMoreProductCard.fetchedData(`/products/category/${category}?limit=4`);
    const _isExist = homePageProductList.value.find( (item: MoreProductViewModel) => item.category === category)
    if(!productObj.isError.value && !_isExist) {
      const _productCards: ProductCardViewModel[] = _dataModel.products.map( (item: ProductModel) => formatProductCardToViewModel(item));
      homePageProductList.value.push(formatProductCardToHomePageGroup(_productCards));
    }
    loadIsReady.value = true;
  }

  return { 
    getProductCardPageObj,
    getProductDetail,
    filterProduct,
    sortProduct,
    clearSelectedBrands,
    loadMoreProducts,
    productObj,
    productDetail,
    loadIsReady,
    selectedBrands,
    homePageProductList,
    brandList,
    productCardList,
    productIsReady,
    productDetailIsReady}
})