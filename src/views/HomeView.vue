<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main>
  <h1>{{ $t('name') }}</h1>
    <TheWelcome />
  </main>
</template>
