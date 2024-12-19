<script lang="ts" setup>
import type { CartProductViewModel } from '@/models/viewModel';
import { useShoppingCartStore } from '@/stores/useShoppingCartStore';
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

type Props = {
  cartList?: CartProductViewModel[] | null;
}
const props = withDefaults(defineProps<Props>(), {
  cartList: () => [],
});

const router = useRouter();

const gotoPurchase = () => (router.push('/purchase'))

const shoppingCartStore = useShoppingCartStore();
const {
    loadCart,
    removeFromCart
} = shoppingCartStore;

onMounted(() => {
  loadCart();
})
</script>
<template>
  <div class="shoppingCart">
    <h1>Cart Component</h1>
    <div v-if="cartList?.length===0">
      <p>no item</p>
    </div>
    <div v-else>
      <div v-for="item in cartList">
        <img :src="item.thumbnail" alt="">
        <h3>{{ item.title }}</h3>
        <p>$ {{ item.price }}</p>
        <p>X {{ item.quantity }}</p>
        <button @click="removeFromCart(item.id.toString())">delete</button>
      </div>
    </div>
    <button @click="gotoPurchase">結帳</button>
  </div>
</template>

<style>
.shoppingCart {
  border: 1px solid black;
}
</style>
