<script lang="ts" setup>
import useApi from '@/composable/useApi';
import { i18n } from '@/i18n';
import { useCategoryStore } from '@/stores/categoryStore';
import { storeToRefs } from 'pinia';
import { onMounted, ref, watch, type Ref } from 'vue';
import { useRouter } from 'vue-router';

type Props = {
  isLogin: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  isLogin: true,
})

const router = useRouter();
const api = useApi();
const {
  callApi,
  fetchData
} = api;

const categoryStore = useCategoryStore();

const {
  categoryNameList,
} = storeToRefs(categoryStore)

const {
  getCategoryNameList,
} = useCategoryStore();


const categroy: Ref<string> = ref('');
watch(categroy, (n) => {
  router.push({ path: `/${n}`})
})

const searchVal: Ref<string> = ref('');
watch(searchVal, (n) => {
  callApi(`/api/products/search?q=${n}`);
})

onMounted(() => {
  getCategoryNameList();
})
</script>
<template>
  <div class="nav">
    <div class="nav__top">
      <RouterLink to="/">Home</RouterLink> |
      <input type="text" placeholder="search product name" v-model.lazy="searchVal">
      <label v-if="isLogin">
        <RouterLink to="/member">member</RouterLink> |
      </label>
      <label v-else>
        <RouterLink to="/login">login</RouterLink> |
      </label>
      <label for="">Language</label>
      <select name="" id="" v-model="$i18n.locale">
        <option v-for="locale in $i18n.availableLocales" 
          :key="`locale-${locale}`" 
          :value="locale">{{ locale }}</option>
      </select>
      {{ $t('name') }}
    </div>

    <div class="nav__buttom">
      <label for="">/{{ categroy }}</label>
      <select v-model="categroy">
        <option disabled>Category</option>
        <option v-for="item in categoryNameList" :value="item">{{ item }}</option>
      </select>
    </div>
  </div>
</template>

<style>

</style>
