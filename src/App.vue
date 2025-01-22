<script setup lang="ts">
import { RouterView } from 'vue-router'
import { onMounted } from 'vue';
import { useAuthUser } from './composable/useAuthUser';

const authUser = useAuthUser();

const {
  checkUser,
  isLogin,
} = authUser;

onMounted( () => {
  checkUser();
  console.log(import.meta.env);
})
</script>

<template>
  <div class="app">
    <Nav :isLogin="isLogin" />
    <div class="content">
      <RouterView />
    </div>
    <Footer />
  </div>
</template>

<style lang="scss">
#app {
  background-color: $bgc;
}
.app {
  >.content {
    min-height: calc(100vh - 375px);
  }
}

</style>
