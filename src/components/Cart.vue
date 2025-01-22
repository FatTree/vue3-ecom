<script lang="ts" setup>
import type { CartProductViewModel } from '@/models/viewModel';
import { useShoppingCartStore } from '@/stores/useShoppingCartStore';
import { onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import deleteIcon from '@/assets/icons/trash-can-solid.svg';

type Props = {
  cartList?: CartProductViewModel[] | null;
}
const props = withDefaults(defineProps<Props>(), {
  cartList: () => [],
});

const router = useRouter();
const route = useRoute();

const emit = defineEmits(['clickPurchase']);

const gotoPurchase = () => {
  router.push(`/purchase`)
  emit('clickPurchase');
}

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
    <div class="shoppingCart__title">
      <span class="title-m">{{ $t('cart.title') }}</span>
    </div>
    <div v-if="cartList?.length===0">
      <p>{{ $t('cart.noItem') }}</p>
    </div>
    <div v-else class="shoppingCart__list">
      <div class="item" v-for="item in cartList">
        <div class="item__el">
          <img class="img" :src="item.thumbnail" alt="">
        </div>
        <div class="item__el">
          <h3 class="title ellipsis">{{ item.title }}</h3>
          <div class="item__el__box">
            <span class="el">$ {{ item.price }}</span>
            <span class="el">X {{ item.quantity }}</span>
          </div>
        </div>
        <div class="item__el">
          <div class="btnDelete" @click="removeFromCart(item.id.toString())">
            <deleteIcon class="svg" />
          </div>
        </div>
      </div>
    </div>
    <div class="btnYellow" @click="gotoPurchase">{{ $t('cart.pay') }}</div>
  </div>
</template>

<style lang="scss" scoped>
.shoppingCart {
  background-color: $white;
  padding: 1rem;
  border-radius: .5rem;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
  position: absolute;

  &::before {
    content: '';
    display: block;
    width: 20px;
    height: 20px;
    background-color: $white;
    position: relative;
    rotate: 45deg;
    top: -1.5rem;
    right: -16rem;
  }

  &__title {
    @include label-l;
    color: $white-dark;
    text-align: center;
    height: 2rem;
  }

  &__list {
    max-height: 50vh;
    overflow-y: scroll;
    margin-bottom: 1rem;
  }
}

.item {
  width: 350px;
  display: flex;
  justify-content: space-between;
  padding: .5rem 0;
  &:not(:last-child) {
    border-bottom: 1px dashed $white-hover-active;
  }

  &__el {
    > .img {
      width: 5rem;
    }
    > .title {
      @include title-s;
      color: $white-dark;
      width: 13rem;
      line-height: 2rem;
    }
    > .btnDelete {
      width: 2rem;
      height: 2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      &:hover {
        background-color: $white-light;
      }
      > .svg {
        width: 1rem;
        fill: $white-hover-active;
      }
    }
    &__box {
      display: flex;
      justify-content: space-between;
      > .el {
        @include label-m;
        color: $white-hover-active;
      }
    }
  }
}
</style>
