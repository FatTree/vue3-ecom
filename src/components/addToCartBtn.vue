<script lang="ts" setup>
import type { CartProductViewModel } from '@/models/viewModel';
import { useShoppingCartStore } from '@/stores/useShoppingCartStore';
import { useInfoStore } from '@/stores/infoStore';
import { onMounted, ref } from 'vue';
import { InfoEnum } from '@/models/viewModel';

type Props = {
    cartProduct: CartProductViewModel;
    color: string;
    isDisabled?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
    cartProduct: () => ({}) as CartProductViewModel,
    color: 'yellow',
    isDisabled: false,
});

const shoppingCartStore = useShoppingCartStore();
const infoStore = useInfoStore();
const {
    addToInfoList
} = infoStore;

const { 
    addToCart
} = shoppingCartStore;

const isAdding = ref<boolean>(false);

const addCartAction = (cartProduct: CartProductViewModel) => {
    addToCart(cartProduct);
    addToInfoList(InfoEnum.INFO, '已加入購物車');
}

const btnClass = ref('btn-yellow');

onMounted (() => {
    if (props.color === 'violet') {
        btnClass.value = 'btn-violet';
    }
})
</script>
<template>
    <div class="addToCart">
        <label v-if="isDisabled">已達到購買上限</label>
        <div :class="btnClass" @click="addCartAction(cartProduct)">add to cart</div>
    </div>
</template>
