<script lang="ts" setup>
import type { CartProductViewModel } from '@/models/viewModel';
import { useShoppingCartStore } from '@/stores/useShoppingCartStore';
import { ref } from 'vue';

type Props = {
    cartProduct: CartProductViewModel;
    isDisabled?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
    cartProduct: () => ({}) as CartProductViewModel,
    isDisabled: false,
});

const shoppingCartStore = useShoppingCartStore();

const { 
    addToCart
} = shoppingCartStore;

const isAdding = ref<boolean>(false);

const addCartAction = (cartProduct: CartProductViewModel) => {
    addToCart(cartProduct);
    isAdding.value = true;
    setTimeout(() => {
        isAdding.value = false;
    }, 1000);
}
</script>
<template>
  <div class="addToCart">
    <label v-if="isDisabled">已達到購買上限</label>
    <button @click="addCartAction(cartProduct)">add to cart</button>
  </div>
</template>

<style>

</style>
