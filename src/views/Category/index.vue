<script lang="ts" setup>
import { useRoute } from 'vue-router';

const route = useRoute();
</script>
<template>
    <div class="about">
        <h1>{{ route.params.category }} page</h1>
        <p>{{ route.params }}</p>
    </div>
</template>

<style>
</style>