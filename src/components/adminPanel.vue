<script lang="ts" setup>
import { useInfoStore } from '@/stores/infoStore';
import { InfoEnum } from '@/models/viewModel';

const {
    addToInfoList
} = useInfoStore();

</script>

<template>
    <div class="panel">
        <button @click="addToInfoList(InfoEnum.ERROR, 'error message', 'STATUS')">add error</button>
        <!-- <button @click="cc()">404 error</button> -->
    </div>
</template>

<style lang="scss" scoped>
.panel {
    position: fixed;
    bottom: 10rem;
    left: 0;
}
</style>