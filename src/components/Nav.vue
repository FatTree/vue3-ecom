<script lang="ts" setup>
type Props = {

}
const props = withDefaults(defineProps<Props>(), {
  
})
</script>
<template>
  <div class="nav">
    <RouterLink to="/">Home</RouterLink> |
    <RouterLink to="/category">Category</RouterLink> |
    <RouterLink to="/member">member</RouterLink> |
    <RouterLink to="/login">login</RouterLink> |
    <RouterLink to="/registration">registration</RouterLink>
  </div>
</template>

<style>

</style>
