<script lang="ts" setup>
import { useProductStore } from '@/stores/productStore';
import { storeToRefs } from 'pinia';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import addToCartBtn from '@/components/addToCartBtn.vue'
import { formatCartProductToViewModel } from '@/utils/modelFormatter'
import type { ProductDetailViewModel } from '@/models/viewModel';

const route = useRoute();
const cate = ref('');

const productStore = useProductStore();
const {
    getProductDetailApi
} = productStore;
const {
    productDetailList,
    isProductDetailLoading
} = storeToRefs(productStore);

const amount = ref(1);

const getAmount = (am: number) => {
    amount.value = am;
}

// ui
const productDetail = ref<ProductDetailViewModel>({} as ProductDetailViewModel);
const productName = ref('');
const imgsrc = ref('');
const imgIdx = ref(0);
const clickImg = (idx: number) => {
    imgsrc.value = productDetailList.value.images[idx];
    imgIdx.value = idx;
}


onMounted(async() => {
    await getProductDetailApi(route.params.id as string);
    cate.value = route.params.category as string;
    productDetail.value = productDetailList.value;
    imgsrc.value = productDetailList.value.images[0];
    productName.value = productDetail.value.title ?? '';
})

</script>
<template>
    <div class="productDetail container">
        <PageNav :layer1="cate" :layer2="productName" />
        <div class="productDetail__container">
            <div class="productDetail__container__content">
                <div class="imgGroup">
                    <div class="bigImg">
                        <img :src="imgsrc" alt="">
                    </div>
                    <div class="smallImgs">
                        <div class="img" :class="i === imgIdx ? 'selected' : ''"
                            v-for="(img, i) in productDetail.images" :key="img">
                            <img :src="img" alt="" @click="clickImg(i)">
                        </div>
                    </div>
                </div>
                <div class="detail">
                    <div class="detail__content">
                        <p>{{ productDetail.brand }}</p>
                        <h3>{{ productDetail.title }}</h3>
                        <RatingStars class="detail__content__rating" :rating="productDetail.rating" />
                        <p>{{ productDetail.description }}</p>
                        <p class="detail__content__price">{{ $t('product.price') }} $ {{ productDetail.price }}</p>
                        <p>{{ productDetail.stock }} {{ $t('product.left') }}</p>
                    </div>
                    <input type="number" v-model="amount">
                    <AmountUI :max="productDetail.stock" @updateAmount="getAmount" />
                    <addToCartBtn 
                        :cart-product="formatCartProductToViewModel(productDetail, amount)"
                        color="yellow" />
                </div>
            </div>
        </div>
        <div class="review mt-1">
            <div class="review__content">
                <h3 class="title-m mt-1">{{ $t('product.review') }}</h3>
                <div class="mt-1" v-for="review in productDetail.reviews">
                    <RatingStars class="rating" :rating="review.rating" />
                    <div class="title__top d-flex">
                        <p class="title-s">{{ review.reviewerName }}</p>
                        <p class="text-m ml-1">{{ review.date }}</p>
                    </div>
                    <p>{{ review.comment }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.productDetail {
    &__container {
        @include center;
        
        &__content {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            width: 90%;
            
            @include RWD(tablet) {
                flex-direction: column;
                width: 100%;
            }

            > .imgGroup {
                width: calc(50% - 1rem);
                @include RWD(tablet) {
                    width: 100%;
                }

                > .bigImg {
                    background-color: $white;
                    border-radius: .5rem;
                    width: 100%;
                    height: auto;
                    max-width: 550px;
                    max-height: 500px;
                    display: flex;
                    justify-content: center;

                    > img {
                        max-width: 100%;
                        max-height: 100%;
                        object-fit: contain;
                    }
                }

                > .smallImgs {
                    display: flex;
                    margin-top: 1rem;
                    
                    > .img {
                        margin-right: 1rem;
                        border-radius: .5rem;
                        background-color: $white;
                        width: 3rem;
                        height: 3rem;
                        cursor: pointer;
                        @include center;

                        &.selected {
                            box-sizing: border-box;
                            border: 2px solid $violet-normal;
                        }

                        > img {
                            max-width: 100%;
                            max-height: 100%;
                            object-fit: contain;
                        }
                    }
                    
                }
            }

            > .detail {
                width: calc(50% - 1rem);
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                @include RWD(tablet) {
                    margin-top: 1rem;
                    width: 100%;
                }
            }
        }
    }

    > .review {
        display: flex;
        justify-content: center;
            
        > .review__content {
            width: 90%;
            @include RWD(tablet) {
                width: 100%;
            }
        }
    }
}

.productDetail__container > .productDetail__container__content > .detail > .detail__content {
    > h3, p {
        margin-bottom: .5rem;
    }
    > h3 {
        @include title-m;
    }
    > p {
        @include text-m;
    }

    > .detail__content__rating {
        margin-bottom: .5rem;
    }

    > .detail__content__price {
        border-top: 1px solid $white-hover-active;
        border-bottom: 1px solid $white-hover-active;;
        padding: .5rem 0;
    }
}
</style>