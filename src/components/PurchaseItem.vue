<script lang="ts" setup>
import type { CartProductViewModel } from '@/models/viewModel';
import { useShoppingCartStore } from '@/stores/useShoppingCartStore';
import { computed, ref } from 'vue';

type Props = {
    cartItem: CartProductViewModel;
}
const props = withDefaults(defineProps<Props>(), {
    cartItem: () => ({} as CartProductViewModel),
})

const shoppingCartStore = useShoppingCartStore();
const {
    loadCart,
    removeFromCart
} = shoppingCartStore;

const totalPrice = computed(() => props.cartItem.price * props.cartItem.quantity)



</script>
<template>
    <div class="purchaseItem">
        <img :src="cartItem.thumbnail" alt="">
        <h3>{{ cartItem.title }}</h3>
        <p>$ {{ cartItem.price }}</p>
        <p>x {{ cartItem.quantity }}</p>
        <p>小計: {{ totalPrice}}</p>
        <button @click="removeFromCart(cartItem.id.toString())">X</button>
    </div>
</template>

<style>

</style>
