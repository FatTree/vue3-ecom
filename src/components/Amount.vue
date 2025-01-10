<script lang="ts" setup>
import addIcon from '@/assets/icons/plus-solid.svg';
import decreaseIcon from '@/assets/icons/minus-solid.svg';
import { computed, onMounted, ref, watch } from 'vue';

type Props = {
    max?: number;
    defaultAmount?: number;
    isDisabled?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
    max: 5,
    defaultAmount: 1,
    isDisabled: false,
});

const emit = defineEmits(['updateAmountValue']);

const amount= ref(1);
const isAdd = computed(() => (amount.value === props.max))
const isMinus = computed(() => (amount.value === 1));

watch(amount, () => {
    if(amount.value > props.max) {
        amount.value = props.max;
    } else if (amount.value < 1 || typeof amount.value !== 'number') {
        amount.value = 1;
    } else {
        return;
    }
});

const emitValue = () => {
    emit('updateAmountValue', Number(amount.value));
}

const increaseAmount = () => {
    if (isAdd.value) {
        return;
    } else {
        amount.value += 1;
        emitValue();
    }
}

const decreaseAmount = () => {
    if (isMinus.value) {
        return;
    } else {
        amount.value -= 1;
        emitValue();
    }
}

onMounted(() => {
    amount.value = props.defaultAmount;
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
    <div class="amount-title">數量</div>
  </div>
</template>

<style scoped lang="scss">
.amountGroup {
  margin-top: .5rem;
  .amount {
    display: flex;
    justify-content: space-between;
    padding: 1em;
    border-radius: 0.5em;
    border: 1px solid #7B1FC7;
    width: 6em;
    user-select: none;  /* 禁用選取 */
    -webkit-user-select: none;  /* 對於 Safari 和 Chrome */
    -moz-user-select: none;  /* 對於 Firefox */
    -ms-user-select: none;  /* 對於 Internet Explorer/Edge */
    position: relative;
    @include text-m;
    color: $black;
    @include RWD(tablet) {
      padding: .5rem;
      width: 5em;
    }
  
    &__symbol {
      cursor: pointer;
      width: 1rem;
      > svg {
        fill: $violet-normal;
      }
  
      &.disabled {
        color: $white-hover-active;
      }
    }
  
    &__add {
  
    }
    &__input {
      padding: 0;
      border-radius: 0;
      border: none;
      all: unset;
      width: 1em;
    }
    &__decrease {
  
    }
  }
  .amount-title {
    position: relative;
    top: -65px;
    left: 7px;
    display: inline-block;
    background-color: white;
    color: #999999;
    font-size: 12px;
    line-height: 18px;
    padding: 0 .3em;

    @include RWD(tablet) {
      top: -53px;
    }
  }
}
</style>
