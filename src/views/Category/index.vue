<script lang="ts" setup>
import type { ProductListModel, ProductModel } from '@/models/dataModel';
import { useProductStore } from '@/stores/productStore';
import { storeToRefs } from 'pinia';
import { computed, onMounted, ref, watch, type ComputedRef, type Ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import ProductCard from  '@/components/ProduceCard.vue'
import arrowIcon from '@/assets/icons/chevron-right-solid.svg';
import useRwd from '@/composable/useRwd';

const route = useRoute();
const router = useRouter();
const productStore = useProductStore();

const {
    getProductCategoryApi,
    getProductSortApi
} = productStore;

const {
    productCategoryList,
    isProductCategoryLoading,
    productSortList,
    isProductSortLoading,
} = storeToRefs(productStore);

const cate = computed(() => {
    const category = route.params.category as string;
    return category.replace(/^./, category[0].toUpperCase());
});

const productList= ref<ProductModel[]>([]);

// rwd
const { isMobile } = useRwd();

// filter
const brandList = computed(() => {
    const brands = productCategoryList.value.products.map( (item: ProductModel) => item.brand)
    const list = new Set(brands)
    return list;
})

const selectedBrands = ref<string[]>([]);
const clearSelectedBrands = () => {
    selectedBrands.value = [];
}

watch(selectedBrands, (n) => {
    if (selectedBrands.value.length === 0) {
        productList.value = productCategoryList.value.products;
        return;
    }
    const targetNamesSet = new Set(selectedBrands.value);
    const filteredData = productCategoryList.value.products.filter((item: ProductModel) => targetNamesSet.has(item.brand));
    console.log(filteredData);
    productList.value = filteredData;
})

const range = 8;

watch(cate, async(n) => {
    console.log('cate change:' + n);
    await getProductCategoryApi(n, range, 0);
    console.log('assign value');
    productList.value = productCategoryList.value.products;
}, {immediate: true});

// Pagination
const currentPage: Ref<number> = ref(parseInt(route.query.page as string) || 1);
watch(
    () => route.query.page,
    (newPage) => {
        currentPage.value = parseInt(newPage as string) || 1;
    }
)

const totalPages = computed(() => {
    if (productCategoryList.value.total !== undefined) {
        return Math.ceil(productCategoryList.value.total / range )
    }
});

const getPageList = async (page: number) => {
    let skip = page===1 ? 0 : range*(page-1)
    await getProductCategoryApi(cate.value, range, skip);
    currentPage.value = page;
    productList.value = productCategoryList.value.products;
    router.push({query: {...route.query, currentPage: page}})
}

// sort
const sortVal: Ref<string> = ref('');
watch(sortVal,  async (n) => {
    await getProductSortApi(cate.value, range, 0, n);
    productList.value = productSortList.value.products;
});

// ui
const isFilterOpen = ref<boolean>(false);
const clickFilter = () => {
    isFilterOpen.value = !isFilterOpen.value;
}
const brandHeight = computed(() => (2 * brandList.value.size +4.5)+'rem')

onMounted( async () => {
    await getProductCategoryApi(cate.value, range, 0);
})

</script>
<template>
    <div class="category container">
        <PageNav :layer1="cate" />
        <div class="category__content">
            <!-- <div class="filter width-desktop-35 width-mobile-100"> -->
            <div class="filter" v-if="!isMobile">
                <div class="filter__content">
                    <span class="title-s">品牌</span>
                    <div v-for="brand in brandList">
                        <label class="checkbox">
                            <span class="checkbox__span">{{ brand }}</span>
                            <input type="checkbox" :value="brand" v-model="selectedBrands" :id="brand" />
                            <div class="checkbox__style"></div>
                        </label>
                    </div>
                    <div class="btnYellow mt-1" @click="clearSelectedBrands">clear conditions</div>
                </div>
            </div>
            <div class="product">
                <div class="product__title d-flex space-between align-item-center">
                    <h1>{{ cate }} page</h1>
                    <div class="sort">
                        <select class="sort__select" v-model="sortVal">
                            <option disabled default>價格排序</option>
                            <option value="asc">價格由低到高</option>
                            <option value="desc">價格由高到低</option>
                        </select>
                    </div>
                </div>
                <div class="filter" v-if="isMobile">
                    <div class="filter__content">
                        <div class="filter__content__top"
                            @click="clickFilter">
                            <span class="title-s">品牌</span>
                            <arrowIcon class="icon" />
                        </div>
                        <!-- :style="`height: ${brandHeight}em; transition: height .5s;`" -->
                        <div class="filter__content__list" 
                            :class="isFilterOpen ? '' : 'collapse'">
                            <div v-for="brand in brandList">
                                <label class="checkbox">
                                    <span class="checkbox__span">{{ brand }}</span>
                                    <input type="checkbox" :value="brand" v-model="selectedBrands" :id="brand" />
                                    <div class="checkbox__style"></div>
                                </label>
                            </div>
                            <div class="btnYellow mt-1" @click="clearSelectedBrands">clear conditions</div>
                        </div>
                    </div>
                </div>
                <div class="productList" v-if="!isProductCategoryLoading">
                    <div class="productList__card" v-for="product in productList">
                        <ProductCard :product="product" />
                    </div>
                </div>
                <div v-else>
                    loading
                </div>
                <div class="pagination">
                    <button class="pagination__btn" v-for="i in totalPages" @click="getPageList(i)">
                        <span>{{ i }}</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.category {
    &__content {
        display: flex;
        flex-direction: row;
        @include RWD(mobile) {
            flex-direction: column;
        }
    }
}

.product {
    margin-left: 2rem;
    @include RWD(mobile) {
        margin-left: 0;
        margin-top: 1rem;
    }
}

.sort {
    &__select {
        background-color: $white-light;
        padding: .5rem;
        border-radius: .5rem;
        border: 1px solid $white-hover-active;
    }
}

.productList {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-left: -1rem;

    &__card {
        max-width: 25%;
        padding-left: 1rem;
        padding-top: 1rem;

        @include RWD(desktop) {
            max-width: 50%;
        }
    }
}

.filter {
    min-width: 25%;
    color: $white-dark;

    @include RWD(tablet) {
        min-width: 35%;
    }
    @include RWD(mobile) {
        min-width: 100%;
    }

    &__content {
        background-color: $white;
        padding: 1rem;

        &__top {
            display: flex;
            justify-content: space-between;

            > .icon {
                width: 1rem;
            }
        }
        &__list {
            overflow: hidden;
            height: v-bind(brandHeight);
            transition: height .5s;
            margin-top: 1rem;

            &.collapse {
                height: 0;
                transition: height .5s;
                margin-top: 0;
            }
        }
    }
}

.pagination {
    display: flex;
    justify-content: center;
    margin-top: 1rem;

    &__btn {
        border: none;
        border-radius: .5rem;
        background-color: $yellow-normal;
        cursor: pointer;

        &:hover {
            background-color: $yellow-normal-hover;
            transition: background-color .3s;
        }
        > span {
            padding: 1rem;
            display: inline-block;
        }
    }
}

</style>