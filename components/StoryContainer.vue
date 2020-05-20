<template>
  <div class="story-container">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.story-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
