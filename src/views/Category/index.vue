<script lang="ts" setup>
import type { ProductListModel } from '@/models/dataModel';
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
} = storeToRefs(productStore);

const isT: Ref<boolean> = ref(false);
// const cate = ref('');
const cate = computed(() => (route.params.category as string));
const productList: ComputedRef<ProductListModel> = computed(() => {
    if (isT.value) {
        isT.value = false;
        return productSortList.value;
    } else {
        isT.value = false;
        return productCategoryList.value;
    }
});

const range = 4;

watch(cate, (n) => {
    console.log('cate change:' + n);
    getProductCategoryApi(n, range, 0);
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
    if (productList.value.total !== undefined) {
        return Math.ceil(productList.value.total / range )
    }
});

const getNextPage = (page: number) => {
    let skip = page===1 ? 1 : range*(page-1)
    getProductCategoryApi(cate.value, range, skip);
    currentPage.value = page;
    router.push({query: {...route.query, currentPage: page}})
}

// sort
const sortVal: Ref<string> = ref('');
watch(sortVal,  (n) => {
    console.log('change: ' + n, 'cate.value: '+cate.value)
    getProductSortApi(cate.value, range, 0, n);
    isT.value = true;
})

// onMounted(() => {
//     cate.value = route.params.category as string;
// })

</script>
<template>
    <div class="category">
        <h1>{{ cate }} page</h1>
        <label>sort:</label>
        <select v-model="sortVal">
            <option value="asc">價格由高到低</option>
            <option value="desc">價格由低到高</option>
        </select>
        <div class="productList" v-if="!isProductCategoryLoading">
            <ProductCard v-for="product in productList.products":product="product" />
        </div>
        <div v-else>
            loading
        </div>
        <div>
            <button v-for="i in totalPages" @click="getNextPage(i)">{{ i }}</button>
        </div>
    </div>
</template>

<style>
.productList {
    display: flex;
    flex-wrap: wrap;
}
</style>