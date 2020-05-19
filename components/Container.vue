<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  max-width: 1440px;
  margin: 0 auto;
}

@media screen and (max-width: 1280px) {
  .container {
    padding: 0 50px;
  }
}

@media screen and (max-width: 1280px) {
  .container {
    padding: 0 50px;
  }
}
</style>
