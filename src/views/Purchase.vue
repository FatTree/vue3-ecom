<script lang="ts" setup>
import type { ShippingInfoViewModel } from '@/models/viewModel';
import { useShoppingCartStore } from '@/stores/useShoppingCartStore';
import { storeToRefs } from 'pinia';
import { computed, onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import { getDoc, getFirestore, doc } from 'firebase/firestore';
import { firebaseApp } from '@/plugins/firebase';
import { getCurrentUser } from 'vuefire';

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

const isInfoOk = computed(() => shoppingInfo.value.address.trim() !== '' && shoppingInfo.value.name.trim() !== '' && shoppingInfo.value.phone.trim() !== '')
const step = ref<number>(1);
const gotoStepPage = (s: number) => {
  step.value = s;
  router.push({query: {...route.query, step: s.toString()}})
}

onMounted(async() => {
  loadCart();
  await getUserInfo();
  shoppingInfo.value = userInfo.value
  console.log(userInfo)
})

</script>
<template>
  <div class="about">
    <h1>Purchase page</h1>
    <div v-if="cart.length">
      <div v-show="step===1">
        <div v-for="cartItem in cart" class="purchaseItem d-flex">
          <img class="img" :src="cartItem.thumbnail" alt="">
          <div>
            <h3>{{ cartItem.title }}</h3>
            <p>$ {{ cartItem.price }}</p>
            <p>數量: {{ cartItem.quantity }}</p>
            <p>小計: {{ cartItem.price * cartItem.quantity}}</p>
          </div>
          <button @click="removeFromCart(cartItem.id.toString())">X</button>
        </div>
      </div>
      <div v-show="step===2">
        <p>{{ userInfo }}</p>
        <input type="text" placeholder="姓名" v-model="shoppingInfo.name"><br>
        <input type="text" placeholder="地址" v-model="shoppingInfo.address"><br>
        <input type="text" placeholder="電話" v-model="shoppingInfo.phone">
      </div>
      <div class="summary">
        <h3>總金額：{{ totalPay }}</h3>
        <p>商品總和({{ totalQuantity }}件)</p>
        <p>運費：{{ shippingFee }}</p>
        <p>訂單金額： {{ totalAmount }} </p>
        <button :disabled="step===1" @click="gotoStepPage(1)">檢視購買清單</button>
        <button :disabled="step===2" @click="gotoStepPage(2)">填寫運送資訊</button>
        <button :disabled="!isInfoOk">結帳</button>
      </div>
    </div>
    <div v-else>
      <h2>購物車沒有項目</h2>
    </div>
  </div>
</template>

<style>
.img {
  width: 100px;
}
</style>
