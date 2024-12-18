<script lang="ts" setup>
import type { ProductModel } from '@/models/dataModel'
import { useRoute, useRouter } from 'vue-router';
type Props = {
    product: ProductModel;
}
const props = withDefaults(defineProps<Props>(), {
    product: () => ({} as ProductModel)
})

const router = useRouter();

const gotoProductDetail = () => {
    router.push(`/${props.product.category}/${props.product.id}`)
}

</script>
<template>
    <div class="prodCard">
        <p>{{ product.brand }}</p>
        <h3 class="title" @click="gotoProductDetail">{{ product.title }}</h3>
        <p>{{ product.description }}</p>
        <p>$ {{ product.price }}</p>
        <p>{{ product.discountPercentage }} %</p>
        <p>{{ product.rating }}/5</p>
        <p>{{ product.stock }}</p>
        <img :src="product.thumbnail" alt="">
    </div>
</template>

<style>
.prodCard {
    width: 300px;
}
.title {
    cursor: pointer;
}
</style>
