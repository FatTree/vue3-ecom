<script lang="ts" setup>
import { useAuthUser } from '@/composable/useAuthUser';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const goLogin = () => {
  router.push('/login')
}

const authUser = useAuthUser()

const {
  signUp,
  errorMsg
} = authUser;


const email = ref<string>('athem.lin1@test.com');
const psw = ref<string>('1234DFGHhjj');


</script>
<template>
  <div class="login">
    <h1>Registration page</h1>
    <input type="email" v-model.lazy="email">
    <input type="password" v-model.lazy="psw">
    <div>
      {{ errorMsg }}
    </div>
    <button @click="signUp(email, psw)">sign up</button>
    <a class="pointer" @click="goLogin">已是會員</a>
  </div>
</template>

<style>

</style>
