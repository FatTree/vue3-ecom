<script lang="ts" setup>
import type { ShippingInfoViewModel } from '@/models/viewModel';
import { useShoppingCartStore } from '@/stores/useShoppingCartStore';
import { storeToRefs } from 'pinia';
import { computed, onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getDoc, getFirestore, doc } from 'firebase/firestore';
import { firebaseApp } from '@/plugins/firebase';
import { getCurrentUser } from 'vuefire';
import useRwd from '@/composable/useRwd';
import shoppingIcon from '@/assets/icons/cart-shopping-solid.svg';
import fileIcon from '@/assets/icons/file-lines-solid.svg';
import paymentIcon from '@/assets/icons/cash-register-solid copy.svg';
import deleteIcon from '@/assets/icons/trash-can-solid.svg';
import arrowIcon from '@/assets/icons/chevron-right-solid.svg';

const router = useRouter();
const route = useRoute();

const db = getFirestore(firebaseApp);
const userInfo = ref();

const getUserInfo = async() => {
  const user = await getCurrentUser();
    if(user) {
      try {
        const userDoc = doc(db, 'UserInfo', user.uid); // 指定集合和 Document ID
        const userSnapshot = await getDoc(userDoc);

        if (userSnapshot.exists()) {
          userInfo.value = userSnapshot.data(); // 將數據存入 userInfo
        } else {
          console.error('No such document!');
        }
      } catch(err) {
        console.log(err);
      }
    }
}

const shoppingCartStore = useShoppingCartStore();
const {
    loadCart,
    removeFromCart
} = shoppingCartStore;

const {
  cart,
  totalAmount,
  totalQuantity
} = storeToRefs(shoppingCartStore);

const shippingFee = ref<number>(100);
const totalPay = computed(() => shippingFee.value + totalAmount.value);

const shoppingInfo = ref<ShippingInfoViewModel>({
  name: '',
  phone: '',
  address: '',
});


// UI
const isInfoOk = computed(() => shoppingInfo.value.address.trim() !== '' && shoppingInfo.value.name.trim() !== '' && shoppingInfo.value.phone.trim() !== '')
const isShow = ref(false)

const step = ref<number>(1);
const gotoStepPage = (s: number, isReturn: boolean) => {
  if (isReturn) {
    console.log('return')
    return;
  }
  step.value = s;
  router.push({query: {...route.query, step: s.toString()}})
}

const { isMobile } = useRwd();

const getAmount = (v: number) => {
  console.log(v)
}

onMounted(async() => {
  loadCart();
  await getUserInfo();
  shoppingInfo.value = userInfo.value;
})

</script>
<template>
  <div class="purchase container">
    <div class="purchase__step">
      <div class="purchase__step__content">
        <div class="step" :class="step>=1 ? 'done' : ''">
          <div class="step__icon">
            <shoppingIcon class="icon" />
          </div>
          <span>購買清單</span>
        </div>
        <div class="arrow">
        </div>
        <div class="step" :class="step>=2 ? 'done' : ''">
          <div class="step__icon">
            <fileIcon class="icon" />
          </div>
          <span>運送資訊</span>
        </div>
        <div class="arrow">
        </div>
        <div class="step" :class="isInfoOk && step===3 ? 'done' : ''">
          <div class="step__icon">
            <paymentIcon class="icon" />
          </div>
          <span>確認付款</span>
        </div>
      </div>
    </div>
    <div class="purchase__content" v-if="cart.length">
      <div class="purchase__content__step">
        <div v-show="step===1" class="purchaseStep">
          <p class="title-m pb-1 pt-1 text-center ">檢視購物清單</p>
          <div class="purchaseItem" v-for="cartItem in cart">
            <div class="purchaseItem__img">
              <img :src="cartItem.thumbnail" alt="">
            </div>
            <div class="purchaseItem__content">
              <div class="purchaseItem__content__detail">
                <h3 class="detailTitle">{{ cartItem.title }}</h3>
                <div class="detailGroup">
                  <div class="detailGroup__item">
                    <div class="title">單價</div>
                    <div class="value"> ${{ cartItem.price.toLocaleString()  }}</div>
                  </div>
                  <div class="detailGroup__item">
                    <div class="quantity">
                      <Amount :max="cartItem.stock" :defaultAmount="cartItem.quantity" @updateAmountValue="getAmount" />
                    </div>
                    <div class="total ml-1">
                      <div class="title">小計</div>
                      <div class="totalValue">$ {{ (cartItem.price * cartItem.quantity).toLocaleString() }}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="purchaseItem__content__btn">
                <div class="btn-yellow" @click="removeFromCart(cartItem.id.toString())">
                  <deleteIcon class="icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-show="step===2" class="purchaseStep">
          <div class="purchaseStep__container">
            <p class="title-m pb-1 text-center ">填寫運送資訊</p>
            <input type="text" class="input" placeholder="姓名" v-model="shoppingInfo.name"><br>
            <input type="text" class="input mt-1" placeholder="地址" v-model="shoppingInfo.address"><br>
            <input type="text" class="input mt-1" placeholder="電話" v-model="shoppingInfo.phone">
          </div>
        </div>
        <div v-show="step===3" class="purchaseStep">
          <div class="purchaseStep__container">
            <p class="title-m pb-1 text-center ">確認付款</p>
            <p>訂單金額： {{ totalAmount }} </p>
            <p>商品總和({{ totalQuantity }}件)</p>
            <p>運費：{{ shippingFee }}</p>
            <h3>結帳金額 ${{ totalPay }}</h3>
            <div class="btn-yellow">
              付款
            </div>
          </div>
        </div>
      </div>
      <div class="purchase__content__summary" v-if="!isMobile">
        <div class="summary__content">
          <p class="title-s text-center mb-1">價格詳情</p>
          <div class="row space-between lh-2">
            <span>訂單金額</span>
            <span>TWD {{ totalAmount.toLocaleString() }}</span>
          </div>
          <div class="row space-between lh-2">
            <span>商品總和</span>
            <span>{{ totalQuantity }} 件</span>
          </div>
          <div class="row space-between lh-2 mb-1">
            <span>運費</span>
            <span>TWD {{ shippingFee.toLocaleString() }}</span>
          </div>
          <div class="row space-between lh-3 summary__content__total">
            <span>結帳金額</span>
            <span class="total fw-blod">TWD {{ totalPay.toLocaleString() }}</span>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <h2>購物車沒有項目</h2>
    </div>
    <div class="summary--mobile" v-if="isMobile">
      <transition>
        <div class="summary__content" v-show="isShow">
          <p>訂單金額： {{ totalAmount }} </p>
          <p>商品總和({{ totalQuantity }}件)</p>
          <p>運費：{{ shippingFee }}</p>
        </div>
      </transition>
      <div class="summary__title" @click="isShow = !isShow">
        <div class="arrow">
          <arrowIcon />
        </div>
        <h3>結帳金額 ${{ totalPay }}</h3>
      </div>
    </div>
    <div class="purchase__controller d-flex mt-1">
      <div class="btn-yellow mr-1" :class="step===1 ? 'disabled' : ''" @click="gotoStepPage(1, step===1)">檢視購買清單</div>
      <div class="btn-yellow mr-1" :class="step===2 && !isInfoOk ? 'disabled' : ''" @click="gotoStepPage(2, step===2 && !isInfoOk)">填寫運送資訊</div>
      <div class="btn-yellow" :class="!isInfoOk ? 'disabled' : ''" @click="gotoStepPage(3, !isInfoOk)">結帳</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.v-enter-active, .v-leave-active {
  transition: height .5s;
}

.v-enter-from, .v-leave-to {
  height: 0;
}

.v-enter-to, .v-leave-from {
  height: 4em;
}

.purchase__step {
  > .purchase__step__content {
    padding: 1rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    @include RWD(tablet) {
      max-width: 100%;
    }

    > .step {
      > .step__icon {
        display: flex;
        justify-content: center;
        > .icon {
          height: 2rem;
          fill: $white-dark;
        }
      }
      > span {
        @include text-m;
        color: $white-dark;
      }

      &.done {
        > .step__icon > .icon {
          fill: $violet-normal;
        }
        > span {
          color: $violet-normal;
        }
        +.arrow {
          background-color: $violet-normal;
        }
      }
    }
    > .arrow {
      background-color: $white-hover-active;
      height: 1px;
      width: 5rem;
    }
  }
}

.purchase__content {
  padding: 1rem 0;
  display: flex;
  justify-content: space-between;
  @include RWD(tablet) {
    padding: 0;
  }

  > .purchase__content__step {
    flex: auto;
    @include RWD(tablet) {
      max-width: 100%;
    }
    
    > .purchaseStep {
      flex: auto;
      padding: 1rem;
      margin-right: 1rem;
      background-color: $white;
      @include RWD(tablet) {
        margin-right: 0;
      }

      
      > .purchaseStep__container {
        padding: 1rem;
        > .input {
          width: calc(100% - 2rem);
        }
      }
    }
  }
  > .purchase__content__summary {
    width: 15rem;
    color: $white-dark;
    @include RWD (tablet) {
      display: none;
    }
    
    > .summary__content {
      @include shadow;
      background-color: $white;
      padding: 1rem;
      
      > .summary__content__total {
        border-top: 1px dashed $white-dark;
  
        > span.total {
          color: $violet-normal;
        }
      }
    }

  }
}

.purchaseItem {
  color: $white-dark;
  display: flex;
  padding: 1rem;
  &:not(:last-child) {
    border-bottom: 1px dotted $white-dark;
  }

  @include RWD(tablet) {
    padding: 1rem 0;
  }

  > .purchaseItem__img {
    > img {
      width: 7rem;
      @include RWD(tablet) {
        width: 4rem;
      }
    }
  }
  > .purchaseItem__content {
    display: flex;
    flex: auto;
    padding-left: 1rem;
    @include RWD(tablet) {
      padding-left: .5rem;
    }

    
    > .purchaseItem__content__detail {
      flex: auto;
      display: block;
      @include RWD(tablet) {
        max-width: calc(100% - 2rem);
      }
      
      > .detailTitle {
        @include title-m;
        @include ellipsis;
        @include RWD(tablet) {
          max-width: 12em;
          @include title-s;
          
        }
      }

      > .detailGroup {
        padding-top: 1rem; 
        justify-content: space-between;
        display: flex;
        @include RWD(tablet) {
          display: block;
          padding-top: .5rem;
        }

        .title {
          color: $white-hover-active;
          @include text-s;
        }

        .value {
          @include text-m;
          padding-left: .5rem;
          @include RWD(tablet) {
            @include text-s;
          }
        }

        .totalValue {
          @include text-m;
          @include fw-blod;
        }

        > .detailGroup__item {
          width: 50%;
          display: flex;
          @include RWD(tablet) {
            width: 100%;
          }
        }

      }
    }
    > .purchaseItem__content__btn {
      display: flex;
      align-items: center;
      @include RWD(tablet) {
        align-items: start;
      }
      
      > .btn-yellow {
        display: flex;
        align-items: center;

        svg {
          width: 1rem;
          fill: $white-dark;
          @include RWD(tablet) {
            width: .8rem;
          }
        }
      }
    }

  }
}

.summary--mobile {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: $white;
  padding: 1rem;
  @include shadow;

  > .summary__title {
    display: flex;
    background-color: $white;
    cursor: pointer;

    > .arrow {
      margin-right: 1rem;

      > svg {
        height: 1rem;
        rotate: -90deg;;
        fill: $white-dark;
      }
    }
  }
  > .summary__content {
    overflow: hidden;
  }
}
</style>
