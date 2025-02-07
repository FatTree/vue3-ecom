<script lang="ts" setup>
import { useInfoStore } from '@/stores/infoStore';
import { InfoEnum } from '@/models/viewModel';
import useData from '@/composable/useData';

const {
    addToInfoList
} = useInfoStore();

const er = useData<any>();
const { fetchedData } = er;
const cc = async() => {
    return await fetchedData('/apiddds');
}

</script>

<template>
    <div class="panel">
        <button @click="cc()">create an error</button>
    </div>
</template>

<style lang="scss" scoped>
.panel {
    padding: 1rem;
    background-color: #ddd;
    z-index: 100;
    position: fixed;
    bottom: 0;
    right: 0;
}
</style>