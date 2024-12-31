<script setup lang="ts">
import { computed, onBeforeMount, onMounted, onUnmounted, ref, type Ref } from 'vue';
import ProduceCard from '@/components/ProduceCard.vue';
import { useProductStore } from '@/stores/productStore';
import { storeToRefs } from 'pinia';

// stores
const productStore = useProductStore();
const {
  getProductDetailApi
} = productStore;
const {
  productDetailList,
} = storeToRefs(productStore);

// Hero banner
const images = ref([
  'https://dummyjson.com/image/1200x400/008080/ffffff?text=Hello+World+NO+1',
  'https://dummyjson.com/image/1200x400/ff9b9b/ffffff?text=Hello+Athem+NO+2',
  'https://dummyjson.com/image/1200x400/ffe1b2/ffffff?text=Hello+World+NO+3',
  'https://dummyjson.com/image/1200x400/95e5da/ffffff?text=Hello+Athem+NO+4',
  'https://dummyjson.com/image/1200x400/bfc2ff/ffffff?text=Hello+World+NO+5',
]);

const currentIndex: Ref<number> = ref(0);
const wrapper: Ref<HTMLDivElement | null> = ref(null);
const wpWidth: Ref<number> = ref(0);

let intervalId: NodeJS.Timeout | null = null;

const carouselStyle = computed(() => {
  return {
    transform: `translateX(-${currentIndex.value * 100}%)`,
    transition: 'transform 1s ease'
  };
});

const startCarousel = () => {
  intervalId = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % images.value.length;
  }, 5000);
};

const stopCarousel = () => {
  if (intervalId) {
    clearInterval(intervalId);
  }
};

const setWpWidth = () => {
  if(wrapper.value) {
    wpWidth.value = wrapper.value.clientWidth;
  }
}

onBeforeMount(() =>{
  startCarousel();
})

onMounted(async() => {
  await getProductDetailApi('1')
  setWpWidth()
  window.addEventListener('resize', setWpWidth);
})

onUnmounted(() => {
  stopCarousel(); 
  window.removeEventListener('resize', setWpWidth);
})
</script>

<template>
  <div class="home">
    <div class="home__header">
      <div class="home__header__content">
        <div class="carousel">
          <div class="carousel__pic" :style="carouselStyle" ref="wrapper">
            <div class="img" v-for="(image, index) in images" :key="index">
              <img :src="image" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="home__content container">
      <div class="home__content__block">
        <div class="title">Category</div>
        <div class="products">
          <div class="products__card">
            <ProduceCard :product="productDetailList" />
          </div>
          <div class="products__card">
            <ProduceCard :product="productDetailList" />
          </div>
          <div class="products__card">
            <ProduceCard :product="productDetailList" />
          </div>
          <div class="products__card">
            <ProduceCard :product="productDetailList" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.home {
  &__header {
    background-color: $white;
  }
  &__content {
    &__block {
      > .title {
        margin-top: 1rem;
        @include title-l;
        text-align: center;
        line-height: 2em;
      }

      > .products {
        display: flex;
        justify-content: space-between;
        padding: .3rem;

        @include RWD(tablet) {
          flex-wrap: wrap;    
          justify-content: space-between;
          margin-top: -1.5rem;
        }

        > .products__card {
          width: calc(25% - 1rem);
          
          &:not(:first-child) {
            margin-left: 1rem;
          }
          
          @include RWD(tablet) {
            width: calc(50% - 1rem);
            margin-top: 1.5rem;
            &:not(:first-child) {
              margin-left: 0;
            }
          }

          @include RWD(mobile) {
            width: calc(50% - .75rem);
          }
        }

      }
    }
  }
}
.carousel {
  position: relative;
  overflow: hidden;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;

  &__pic {
    display: flex;
    width: 100%;

    > .img {
      width: 100vw;
      height: 100%;
      flex: 0 0 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      position: relative;

      @include RWD(tablet) {
        height: 15rem;
      }

      > img {
        width: 100wh;
        max-height: 100%;
        object-fit: cover;
        object-position: center;
      }
    }
  }
}

</style>
