<template>
  <div class="stories__wrap">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.stories__wrap {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
