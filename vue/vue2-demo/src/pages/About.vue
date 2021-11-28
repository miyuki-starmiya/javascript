<template>
  <div>
  <div class="flex-container">
    <img class="flex-items" alt="ichigo">
    <div class="flex-items">
      <p>ichigo is very cute and she has massive ambitious! I'm much proud of her</p>
    </div>
  </div>
    <p>username: {{ $route.params.username }}</p>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.flex-container {
  display: flex;
}
.flex-items {
  flex: 1;
}
</style>
