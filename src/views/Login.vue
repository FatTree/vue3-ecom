<script lang="ts" setup>
import { useAuthUser } from '@/composable/useAuthUser';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const goRegis = () => {
  router.push('/registration')
}

const authUser = useAuthUser()

const {
  signUp,
  signIn,
  checkUser,
  userSignOut,
  errorMsg
} = authUser;


const email = ref<string>('athem.lin0@test.com');
const psw = ref<string>('aaaa123');
</script>
<template>
  <div class="login">
    <h1>Login page</h1>
    <input type="email" v-model.lazy="email">
    <input type="password" v-model.lazy="psw">
    <div>
      {{ errorMsg }}
    </div>
    <button @click="signIn(email, psw)">login</button>
    <a class="pointer"@click="goRegis">還不是會員</a>
  </div>
</template>

<style>

</style>
