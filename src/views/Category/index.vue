<script lang="ts" setup>
import type { ProductListModel, ProductModel } from '@/models/dataModel';
import { useProductStore } from '@/stores/productStore';
import { storeToRefs } from 'pinia';
import { computed, onMounted, onUnmounted, ref, watch, type ComputedRef, type Ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import ProductCard from  '@/components/ProductCard.vue'
import arrowIcon from '@/assets/icons/chevron-right-solid.svg';
import filterIcon from '@/assets/icons/filter-solid.svg';
import { useI18n } from 'vue-i18n';

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

// filter
const brandList = computed(():Set<string> | undefined => {
    if(productCategoryList.value) {
        console.log('這樣可以嗎?:if(productCategoryList.value.products)....為什麼會跑2次?')
        const brands = productCategoryList.value.products.map( (item: ProductModel) => item.brand)
        const list = new Set(brands)
        return list as Set<string>;
    }
})

const selectedBrands = ref<string[]>([]);
const clearSelectedBrands = () => {
    if (selectedBrands.value.length) {
        selectedBrands.value = [];
    }
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
    await getProductCategoryApi(n, range, 0);
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
const { t } = useI18n(); 
const isFilterOpen = ref<boolean>(false);
const isSortOpen = ref(false);
const sortDOM = ref<HTMLDivElement | null>(null);
const sortDisplay = ref(t('category.sorting'))

const clickFilter = () => {
    isFilterOpen.value = !isFilterOpen.value;
}
const clickSort = () => {
    isSortOpen.value = !isSortOpen.value;
}

const blurSort = () => {
    isSortOpen.value = false;
}

const selectSort = (val: string, showVal: string) => {
    sortVal.value = val;
    isSortOpen.value = false;
    sortDisplay.value = showVal;
}

const brandHeight = computed(() => {
    if (brandList.value) {
        return (2 * brandList.value.size + 3)+'rem';
    } else {
        return 0;
    }
})

onMounted( async () => {
    console.log('product,filter那邊亂七八糟')
    await getProductCategoryApi(cate.value, range, 0);
    
    if(sortDOM.value) {
        sortDOM.value.addEventListener('blur', () => {
            blurSort();
        })
    }
});

onUnmounted(() => {
    if(sortDOM.value) {
        sortDOM.value.removeEventListener('blur', () => {
            blurSort();
        });
    }
})

</script>
<template>
    <div class="category container">
        <PageNav :layer1="cate" />
        <div class="category__content">
            <div class="filter">
                沒有品牌這樣寫是不是很怪? v-if="!brandList?.size || brandList?.size===1"
                <div class="filter__content" v-if="!brandList?.size || brandList?.size===1">
                    <span class="title-s">{{ $t('category.brand') }}</span>
                    <div>
                        沒有品牌
                    </div>
                </div>
                <div class="filter__content" v-else>
                    <span class="title-s">{{ $t('category.brand') }}</span>
                    <div v-for="brand in brandList">
                        <label class="checkbox">
                            <span class="checkbox__span">{{ brand }}</span>
                            <input type="checkbox" :value="brand" v-model="selectedBrands" :key="brand" />
                            <div class="checkbox__style"></div>
                        </label>
                    </div>
                    <div class="btnYellow mt-1" @click="clearSelectedBrands">{{ $t('category.clean') }}</div>
                </div>
            </div>
            <div class="product">
                <div class="product__title title-m d-flex space-between align-item-center mb-1">
                    <h1>{{ cate }}</h1>
                    <div class="sort" ref="sortDOM" tabindex="0">
                        <div class="sort__select" @click="clickSort">
                            {{ sortDisplay }}
                            <div class="icon">
                                <filterIcon />
                            </div>
                        </div>
                        <div class="sort__option" v-show="isSortOpen">
                            <div @click="selectSort('asc', '價格由低到高')">價格由低到高</div>
                            <div @click="selectSort('desc', '價格由高到低')">價格由高到低</div>
                        </div>
                    </div>
                </div>
                <div class="filter--mobile">
                    <div class="filter__content" v-if="!brandList?.size || brandList?.size===1">
                        <span class="title-s">{{ $t('category.brand') }} 沒有品牌</span>
                    </div>
                    <div class="filter__content" v-else>
                        <div class="filter__content__top"
                            @click="clickFilter">
                            <span class="title-s">品牌</span>
                            <arrowIcon class="icon" />
                        </div>
                        <div class="filter__content__list" 
                            :class="isFilterOpen ? '' : 'collapse'">
                            <div v-for="brand in brandList">
                                <label class="checkbox">
                                    <span class="checkbox__span">{{ brand }}</span>
                                    <input type="checkbox" :value="brand" v-model="selectedBrands" :key="brand" />
                                    <div class="checkbox__style"></div>
                                </label>
                            </div>
                            <div class="btn-yellow mt-1" @click="clearSelectedBrands">clear conditions</div>
                        </div>
                    </div>
                </div>
                <div v-if="isProductCategoryLoading">
                    <div class="productList">
                        <div class="productList__card" v-for="i in 4">
                            <ProductCard :product="null" />
                        </div>
                    </div>
                </div>
                <div v-else>
                    <div class="productList">
                        <div class="productList__card" v-for="product in productList">
                            <ProductCard :product="product" />
                        </div>
                    </div>
                    <div class="pagination">
                        <button class="pagination__btn" v-for="i in totalPages" @click="getPageList(i)">
                            <span>{{ i }}</span>
                        </button>
                    </div>
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
    width: 100%;
    margin-left: 2rem;
    @include RWD(mobile) {
        margin-left: 0;
        margin-top: 1rem;
    }
}

.sort {
    @include text-m;
    height: 2.5rem;
    width: 7.5rem;
    cursor: pointer;

    &__select {
        background-color: $white-light;
        padding: .5rem 1rem;
        border-radius: .5rem;
        border: 1px solid $white-hover-active;
        position: relative;
        display: flex;
        justify-content: space-between;

        > .icon {
            width: .7rem;
            > svg {
                fill: $violet-normal;
            }
        }
    }

    &__option {
        background-color: $white;
        border-radius: .5rem;
        border: 1px solid $white-hover-active;
        position: relative;
        z-index: 80;
        overflow: hidden;
        @include shadow;

        > div {
            padding: .5rem 1rem;

            &:hover {
                background-color: $white-light;
            }
        }
    }
}

.productList {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-left: -1rem;
    margin-top: -1rem;

    &__card {
        width: 100%;
        max-width: calc(25% - 1rem);
        padding-left: 1rem;
        padding-top: 1rem;

        @include RWD(tablet) {
            max-width: calc(50% - 1rem);
        }
    }
}

.filter {
    display: block;
    @include RWD(mobile) {
        display: none;
    }
}

.filter--mobile {
    display: none;
    @include RWD(mobile) {
        display: block;
    }
}

.filter, .filter--mobile {
    min-width: 25%;
    color: $white-dark;

    @include RWD(tablet) {
        min-width: 35%;
    }
    @include RWD(mobile) {
        min-width: 100%;
        margin-bottom: 1rem;
    }

    .filter__content {
        background-color: $white;
        padding: 1rem;

        &__top {
            display: flex;
            justify-content: space-between;

            > .icon {
                height: 1rem;
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

        &:not(:first-child) {
            margin-left: 1rem;
        }

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