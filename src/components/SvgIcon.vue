<script lang="ts" setup>
import { onMounted, ref } from 'vue';

type Props = {
  src: string
}
const props = withDefaults(defineProps<Props>(), {
  src: '',
});

const svgContent = ref('');

onMounted(async() => {
  try {
      const response = await fetch(props.src);
      svgContent.value = await response.text();
    } catch (error) {
      console.error('Failed to load SVG:', error);
    }
})
</script>
<template>
  <div :html="svgContent"></div>
</template>

<style>

</style>
