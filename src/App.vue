<script setup lang="ts">
import { RouterView } from 'vue-router'
import { onMounted } from 'vue';
import { useAuthUser } from './composable/useAuthUser';



const authUser = useAuthUser()

const {
  checkUser,
  isLogin,
} = authUser;

onMounted( () => {
  checkUser();
})
</script>

<template>
  <div class="app">
    <Nav :isLogin="isLogin" />
    <div>
      <RouterView />
    </div>
    <Footer />
  </div>
</template>

<style lang="scss">
#app {
  background-color: $bgc;
}
</style>
