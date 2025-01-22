<script lang="ts" setup>
import type { ProductModel } from '@/models/dataModel'
import { useRoute, useRouter } from 'vue-router';
import RatingStars from './RatingStars.vue';
import { computed } from 'vue';
import ImgIcon from '@/assets/icons/image-solid.svg';
type Props = {
    product: ProductModel | null;
}
const props = withDefaults(defineProps<Props>(), {
    product: () => ({} as ProductModel)
})

const router = useRouter();
const route = useRoute();
const lang = computed(() => route.params.locale )

const gotoProductDetail = () => {
    if(props.product && props.product.stock) {
        router.push(`/${lang.value}/category/${props.product.category}/${props.product.id}`)
    }
}

</script>
<template>
    <div v-if="product" class="prodCard" :class="product.stock ? '' : 'prodCard--soldout'" @click="gotoProductDetail">
        <div class="prodCard__content">
            <p class="ellipsis">{{ product.brand }}</p>
            <h3 class="prodCard__content__title ellipsis" @click="gotoProductDetail">{{ product.title }}</h3>
            <RatingStars :rating="product.rating" />
            <p>$ {{ product.price }}</p>
            <div class="prodCard__content__img">
                <img :src="product.thumbnail" alt="">
            </div>
        </div>
    </div>
    <div v-else class="prodCard--null">
        <div class="prodCard__content">
            <p class="brand w-70pc"></p>
            <h3 class="brand w-100pc"></h3>
            <RatingStars :rating="0" />
            <p class="brand w-50pc"></p>
            <div class="prodCard__content__img">
                <ImgIcon />
            </div>
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

    > .prodCard--soldout {
        background-color: $white-light;
        cursor: not-allowed;

        > p, h3 {
            color: $white-hover-active;
        }
    }

    > .prodCard__content {

        > .prodCard__content__title {
            @include title-s;
        }
    
        > .prodCard__content__img {
            position: relative;
            width: 100%;
            padding-top: 100%;
            background-color: $white;
            overflow: hidden;

            > img {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                object-fit: cover;
                display: block;
            }
        }
    }
}

.prodCard--null {
    background-color: $white;
    border-radius: .5rem;
    padding: 1rem;
    max-width: 350px; 
    cursor: pointer;
    @include shadow;

    > .prodCard__content {
        > .brand {
            height: 1rem;
            margin-bottom: .3rem;
            @include loadingBgc;
        }
    
        > .prodCard__content__img {
            position: relative;
            width: 100%;
            border-radius: 0.5rem;
            overflow: hidden;
            @include loadingBgc;

            > svg {
                fill: $white-hover-active;
                padding: 2rem;
            }
        }
    }
}
</style>
