<script lang="ts" setup>
import { firebaseApp } from '@/plugins/firebase';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { onMounted, ref } from 'vue';
import { getCurrentUser } from 'vuefire';

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

onMounted(async() => {
  await getUserInfo();
})
</script>
<template>
  <div class="about">
    <h1>Member page</h1>
    <div v-if="userInfo">
      <p>name: {{ userInfo.name }}</p>
      <p>email: {{ userInfo.email }}</p>
      <p>phone: {{ userInfo.phone }}</p>
      <p>address: {{ userInfo.address }}</p>
    </div>
  </div>
</template>

<style>

</style>
