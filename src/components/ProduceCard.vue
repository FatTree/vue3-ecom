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
        <div class="prodCard__content">
        </div>
        <p>{{ product.brand }}</p>
        <h3 class="prodCard__content__title ellipsis" @click="gotoProductDetail">{{ product.title }}</h3>
        <RatingStars :rating="product.rating" />
        <p>TWD {{ product.price }}</p>
        <div class="prodCard__content__img">
            <img :src="product.thumbnail" alt="">
        </div>
    </div>
</template>

<style lang="scss" scoped>
.prodCard {
    background-color: $white;
    border-radius: .5rem;
    padding: 1rem;
    max-width: 350px;
    cursor: pointer;
    @include shadow;

    &--soldout {
        background-color: $white-light;

        > p, h3 {
            color: $white-hover-active;
        }
    }

    &__content {

        &__title {
            @include title-s;
        }
    
        &__img {
            > img {
                width: 100%;
            }
        }
    }
}
</style>
