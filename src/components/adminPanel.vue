<script lang="ts" setup>
import useApi from '@/composable/useApi';
import { useErrorStore } from '@/stores/errorStore';


const {
    addToErrorList
} = useErrorStore();

const api = useApi();

const {
    callApi,
} = api;

const cc = async() => {
    await callApi(`/api/products/ddd`);
}

</script>

<template>
    <div class="panel">
        <button @click="addToErrorList('error message', 'STATUS')">add error</button>
        <button @click="cc()">404 error</button>
    </div>
</template>

<style lang="scss" scoped>
.panel {
    position: fixed;
    bottom: 10rem;
    left: 0;
}

</style>