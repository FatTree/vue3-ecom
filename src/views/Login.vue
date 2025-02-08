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
  signIn,
  errorMsg
} = authUser;


const email = ref<string>('athem.lin0@test.com');
const psw = ref<string>('aaaa123');
</script>
<template>
  <div class="login">
    <div class="login__box">
      <h1 class="title-m">{{ $t('uikit.loginPage') }}</h1>
      <input type="email" v-model.lazy="email">
      <input type="password" v-model.lazy="psw">
      <div>
        {{ errorMsg }}
      </div>
      <div class="btn-yellow mt-1" @click="signIn(email, psw)">{{ $t('uikit.login') }}</div>
      <a class="pointer"@click="goRegis">{{ $t('uikit.notmember') }}</a>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
