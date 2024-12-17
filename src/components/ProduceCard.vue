<script lang="ts" setup>
import type { ProductModel } from '@/models/dataModel'
type Props = {
    product: ProductModel;
}
const props = withDefaults(defineProps<Props>(), {
    product: () => ({} as ProductModel)
})
</script>
<template>
    <div class="prodCard">
        <p>{{ product.title }}</p>
        <p>{{ product.description }}</p>
        <p>$ {{ product.price }}</p>
        <p>{{ product.discountPercentage }} %</p>
        <p>{{ product.rating }}/5</p>
        <p>{{ product.stock }}</p>
        <p>{{ product.brand }}</p>
        <img :src="product.thumbnail" alt="">
    </div>
</template>

<style>
.prodCard {
    width: 300px;
}
</style>
