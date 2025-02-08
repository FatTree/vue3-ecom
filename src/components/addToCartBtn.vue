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
    if(props.isDisabled) return;
    addToCart(cartProduct);
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
        <div :class="btnClass" @click="addCartAction(cartProduct)">{{ $t('uikit.addToCart') }}</div>
    </div>
</template>
