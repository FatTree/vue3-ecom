<script lang="ts" setup>
import addIcon from '@/assets/icons/plus-solid.svg';2
import decreaseIcon from '@/assets/icons/minus-solid.svg';
import { computed, nextTick, onMounted, ref, watch } from 'vue';
import { useShoppingCartStore } from '@/stores/useShoppingCartStore';
import type { CartProductViewModel } from '@/models/viewModel';

type Props = {
  max: number;
  isDisabled?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  max: 1,
  isDisabled: false,
});

const amount= ref(1);

const emits = defineEmits(['updateAmount']);

const emitUpdateAmount = () => {
  emits('updateAmount', amount.value)
}

const isAdd = computed(() => (amount.value === props.max))
const isMinus = computed(() => (amount.value === 1));

watch(amount, () => {
    if(amount.value > props.max) {
        amount.value = props.max;
    } else if (amount.value < 1 || typeof amount.value !== 'number') {
        amount.value = 1;
    }
    emitUpdateAmount();
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
    <div class="amount-title">數量</div>
    <div class="remains">
      庫存 {{ props.max }}
      <span class="remains__limit" v-show="amount === props.max">已到達購買上限 !!!這邊無法更新??</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
</style>
