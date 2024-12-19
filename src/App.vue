<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { computed, onMounted, ref } from 'vue';
import { useAuthUser } from './composable/useAuthUser';
import { getCurrentUser, useCollection, useCurrentUser } from 'vuefire'
import { collection, getFirestore } from 'firebase/firestore';
import { firebaseApp } from './plugins/firebase';
import { getAuth, onAuthStateChanged } from 'firebase/auth';



const authUser = useAuthUser()
// const db = useFirestore()
const db = getFirestore(firebaseApp);

const collec = collection(db, 'authors')

const itemsRef = useCollection(collec)

const {
  signUp,
  signIn,
  checkUser,
  userSignOut,
  isLogin,
} = authUser;

onMounted( () => {
  checkUser();
})
</script>

<template>
  <div class="container">
  {{ isLogin }}
    <Nav :isLogin="isLogin" />
    <div>
      <RouterView />
    </div>
    <!-- <Footer /> -->
  </div>
</template>

<style lang="scss">
@import "./assets/styles/main.scss";
</style>
