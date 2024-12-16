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
        <p>{{ product.price }}</p>
        <p>{{ product.discountPercentage }}</p>
        <p>{{ product.rating }}</p>
        <p>{{ product.stock }}</p>
        <p>{{ product.brand }}</p>
        <img :src="product.images[0]" alt="">
    </div>
</template>

<style>

</style>
