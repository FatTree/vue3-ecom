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

onBeforeMount(() =>{
  startCarousel();
})

onMounted(async() => {
  await getProductDetailApi('1')
  if(wrapper.value) {
    wpWidth.value = wrapper.value.clientWidth ;
  }
  console.log(productDetailList.value)

})

onUnmounted(() => {
  stopCarousel(); 
})
</script>

<template>
  <div class="home">
    <div class="home__header">
      <div class="carousel">
        <div class="carousel__pic" :style="carouselStyle" ref="wrapper">
          <div class="img" v-for="(image, index) in images" :key="index">
            <img :src="image" alt="">
          </div>
        </div>
      </div>
    </div>
    <div class="home__content">
      <ProduceCard :product="productDetailList" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.carousel {
  overflow: hidden;
  max-width: 1200px;
  margin: 0 auto;

  &__pic {
    display: flex;

    > .img {
      width: 100vw;
    }
  }
}
</style>
