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
        <img :src="prop.cartItem.thumbnail" alt="">
        <h3>{{ prop.cartItem.title }}</h3>
        <p>$ {{ prop.cartItem.price }}</p>
        <p>x {{ prop.cartItem.quantity }}</p>
        <p>小計: {{ totalPrice}}</p>
        <button @click="removeFromCart(prop.cartItem.id.toString())">X</button>
    </div>
</template>

<style>

</style>
