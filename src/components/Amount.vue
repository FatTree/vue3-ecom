<script lang="ts" setup>
import addIcon from '@/assets/icons/plus-solid.svg';2
import decreaseIcon from '@/assets/icons/minus-solid.svg';
import { computed, onMounted, ref, watch } from 'vue';
import { useShoppingCartStore } from '@/stores/useShoppingCartStore';
import type { CartProductViewModel } from '@/models/viewModel';

type Props = {
  cartItem: CartProductViewModel;
  isDisabled?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  id: '',
  isDisabled: false,
});

const shoppingCartStore = useShoppingCartStore();
const {
    updateQuantity
} = shoppingCartStore;


const amount= ref(1);
const id = ref('');
const max = ref(1);

const isAdd = computed(() => (amount.value === max.value))
const isMinus = computed(() => (amount.value === 1));

watch(amount, () => {
    if(amount.value > max.value) {
        amount.value = max.value;
    } else if (amount.value < 1 || typeof amount.value !== 'number') {
        amount.value = 1;
    } else {
        return;
    }
});

const increaseAmount = () => {
    if (isAdd.value) {
        return;
    } else {
        amount.value += 1;
    }
}

const decreaseAmount = () => {
    if (isMinus.value) {
        return;
    } else {
        amount.value -= 1;
    }
}

watch(amount, (n) => {
  updateQuantity(id.value, amount.value)
})

onMounted(() => {
    amount.value = props.cartItem.quantity;
    id.value = props.cartItem.id.toString();
    max.value = props.cartItem.stock;
})
</script>
<template>
  <div class="amountGroup">
    <div class="amount">
      <div @click="decreaseAmount" class="amount__symbol amount__add" :class="isMinus ? 'disabled' : ''">
        <decreaseIcon />
      </div>
      <input class="amount__input" v-model="amount" />
      <div @click="increaseAmount" class="amount__symbol amount__decrease":class="isAdd ? 'disabled' : ''">
        <addIcon />
      </div>
    </div>
    <div class="amount-title">{{ $t('uikit.amount') }}</div>
    <div class="remains">
      {{ $t('uikit.st') }} {{ max }} 
      <span class="remains__limit" v-show="amount === max">{{ $t('uikit.limit') }}</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
</style>
