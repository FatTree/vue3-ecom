<script lang="ts" setup>
import type { ProductModel } from '@/models/dataModel'
import { useRoute, useRouter } from 'vue-router';
import RatingStars from './RatingStars.vue';
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
    <div class="prodCard" :class="product.stock ? '' : 'prodCard--soldout'" @click="gotoProductDetail">
        <p>{{ product.brand }}</p>
        <h3 class="prodCard__title ellipsis" @click="gotoProductDetail">{{ product.title }}</h3>
        <RatingStars :rating="product.rating" />
        <p>TWD {{ product.price }}</p>
        <div class="prodCard__img" :style="`background-image: url(${product.thumbnail});`"></div>
    </div>
</template>

<style lang="scss" scoped>
.prodCard {
    width: 250px;
    background-color: $white;
    border-radius: .5rem;
    padding: 1rem;
    cursor: pointer;
    @include shadow;
    @include RWD(tablet) {
        width: 160px;
    }

    &--soldout {
        background-color: $white-light;

        > p, h3 {
            color: $white-hover-active;
        }
    }

    &__title {
        @include title-s;
    }

    &__img {
        background-size: contain;
        background-position: 50% 50%;
        display: inline-block;
        width: 100%;
        height: 15rem;
        @include RWD(tablet) {
            height: 9rem;
        }
    }
}
</style>
