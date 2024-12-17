<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { onMounted } from 'vue';
import { useAuthUser } from './composable/useAuthUser';
import { useCollection } from 'vuefire'
import { collection, getFirestore } from 'firebase/firestore';
import { firebaseApp } from './plugins/firebase';



const authUser = useAuthUser()
// const db = useFirestore()
const db = getFirestore(firebaseApp);

const collec = collection(db, 'authors')

const itemsRef = useCollection(collec)

const {
  signUp,
  signIn,
  checkUser,
  userSignOut
} = authUser;

onMounted( () => {
})
</script>

<template>
  <div class="container">
    <Nav :isLogin="true" />
    <div >
      <RouterView />
    </div>
    <!-- <Footer /> -->
  </div>
</template>

<style lang="scss">
@import "./assets/styles/main.scss";
</style>
