<script setup lang="ts">
import { computed, onBeforeMount, onMounted, onUnmounted, ref, type Ref } from 'vue';
import ProductCard from '@/components/ProductCard.vue';
import { useProductStore } from '@/stores/productStore';
import { useCategoryStore } from '@/stores/categoryStore';
import { storeToRefs } from 'pinia';
import { throttle } from '@/utils/util';

// stores
const productStore = useProductStore();
const {
  loadMoreProducts,
  getProductObg
} = productStore;
const {
  productCardList,
  homePageProductList
} = storeToRefs(productStore);

const categoryStore = useCategoryStore();
const {
  getCategoryNameList,
} = categoryStore;
const {
  categoryNameList,
} = storeToRefs(categoryStore);

// Hero banner
const images = ref([
  `${import.meta.env.BASE_URL}/public/banner1.jpeg`,
  `${import.meta.env.BASE_URL}/public/banner2.jpeg`,
  `${import.meta.env.BASE_URL}/public/banner3.jpeg`,
  `${import.meta.env.BASE_URL}/public/banner4.jpeg`,
  `${import.meta.env.BASE_URL}/public/banner5.jpeg`,
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

// load more products
let cateIndex: number = 1;

// // ====== product ======
let throt_fun = throttle(async () => {
    if (cateIndex >= categoryNameList.value.length) return;
    await loadMoreProducts(categoryNameList.value[cateIndex]);
    cateIndex++;
}, 1000);

const handleScrollAction = async () => {
    // pageYOffset
    const scrollTop = window.scrollY;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = window.innerHeight;

    if (scrollTop + clientHeight >= scrollHeight) {
        throt_fun();
    }
};

onBeforeMount(() =>{
  startCarousel();
});

onMounted(async() => {
  await getCategoryNameList();
  await loadMoreProducts('beauty');
  setWpWidth();
  window.addEventListener('resize', setWpWidth);
  nextTick(() => {
      window.addEventListener('scroll', handleScrollAction);
  });
});

onUnmounted(() => {
  stopCarousel(); 
  window.removeEventListener('resize', setWpWidth);
  window.removeEventListener('scroll', handleScrollAction);
});
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
      <div class="home__content__block" v-if="homePageProductList">
        <div class="productGroup" v-for="(group) in homePageProductList">
          <router-link class="title" :to="`/category/${group.category}`">
            {{ group.category.replace(/^./, group.category[0].toUpperCase()) }} >
          </router-link>
          <div class="productList row">
            <div class="productList__card" v-for="prod in group.productCardList">
              <ProductCard :product="prod" />
            </div>
          </div>
        </div>
      </div>
      <div class="home__content__block" v-else>
        <div class="title">...</div>
        <div class="productList row">
          <div class="productList__card" v-for="i in 4">
            <ProductCard :product="null" />
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
    &__content {
      padding: 1rem 0;
      @include RWD(tablet) {
        padding: 0;
      }
    }
  }
  &__content {
    &__block {
      > .productGroup {
        padding: 1rem 0;

        > .title {
          @include title-m;
          margin: 1rem 0;
          line-height: 2em;
          cursor: pointer;
        }
      }
    }
  }
}
.carousel {
  position: relative;
  overflow: hidden;
  max-width: 1200px;
  height: 360px;
  width: 100%;
  margin: 0 auto;

  @include RWD(tablet) {
    height: 7.5rem;
  }

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

      // @include RWD(tablet) {
      //   height: 8rem;
      // }

      > img {
        width: 100%;
        max-height: 100%;
        object-fit: cover;
        object-position: center;
      }
    }
  }
}
</style>
