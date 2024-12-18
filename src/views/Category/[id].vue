<script lang="ts" setup>
import type { ProductModel } from '@/models/dataModel';
import { useProductStore } from '@/stores/productStore';
import { storeToRefs } from 'pinia';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import addToCartBtn from '@/components/addToCartBtn.vue'
import { convertToCartProductModel } from '@/assets/modelFormatter'

const route = useRoute();

const productStore = useProductStore();
const {
    getProductDetailApi
} = productStore;
const {
    productDetailList,
    isProductDetailLoading
} = storeToRefs(productStore);

const productDetail = ref<ProductModel>({} as ProductModel)

const addToCart = () => {
    console.log(productDetail.value)
}

onMounted(async() => {
    await getProductDetailApi(route.params.id as string);
    productDetail.value = productDetailList.value;
})

</script>
<template>
    <div class="about">
        <h1>Product page</h1>
        <div>
            <img class="img" v-for="img in productDetail.images" :src="img" alt="">
        </div>
        <div>
            <h3>detail</h3>
            <p>{{ productDetail.brand }}</p>
            <h4>{{ productDetail.title }}</h4>
            <p>5/{{ productDetail.rating }}</p>
            <p>{{ productDetail.description }}</p>
            <p>$ {{ productDetail.price }}</p>
            <p>% {{ productDetail.discountPercentage }}</p>
            <p>{{ productDetail.stock }} left</p>
            <addToCartBtn :cart-product="convertToCartProductModel(productDetail, 1)" />
        </div>
        <div>
            <h3>review</h3>
            <div v-for="review in productDetail.reviews">
                <p>{{ review.reviewerName }}</p>
                <p>{{ review.date }}</p>
                <p>{{ review.rating }}</p>
                <p>{{ review.comment }}</p>
            </div>
        </div>
    </div>
</template>

<style>
.img {
    width: 300px;
}
</style>