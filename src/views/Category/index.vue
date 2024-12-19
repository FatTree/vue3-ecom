<script lang="ts" setup>
import type { ProductListModel, ProductModel } from '@/models/dataModel';
import { useProductStore } from '@/stores/productStore';
import { storeToRefs } from 'pinia';
import { computed, onMounted, ref, watch, type ComputedRef, type Ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import ProductCard from  '@/components/ProduceCard.vue'

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

const cate = computed(() => (route.params.category as string));

const productList= ref<ProductModel[]>([]);

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

const range = 4;

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

</script>
<template>
    <div class="category">
        <h1>{{ cate }} page</h1>
        <label>sort:</label>
        <select v-model="sortVal">
            <option value="asc">價格由低到高</option>
            <option value="desc">價格由高到低</option>
        </select>
        <div>
            <h3>filter</h3>
            <div v-for="brand in brandList">
                <input type="checkbox" :value="brand" v-model="selectedBrands" :id="brand" />
                <label :for="brand">{{ brand }}</label>
            </div>
            {{ selectedBrands }}
            <button @click="clearSelectedBrands">clear conditions</button>
        </div>
        <div class="productList" v-if="!isProductCategoryLoading">
            <ProductCard v-for="product in productList":product="product" />
        </div>
        <div v-else>
            loading
        </div>
        <div>
            <button v-for="i in totalPages" @click="getPageList(i)">{{ i }}</button>
        </div>
    </div>
</template>

<style>
.productList {
    display: flex;
    flex-wrap: wrap;
}
</style>