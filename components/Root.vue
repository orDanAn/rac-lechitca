<template>
  <section class="root">
    <slot></slot>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.root {
  max-width: 1320px;
  width: 100%;
  margin: 0 auto;
}

@media screen and (max-width: 1280px) {
  .root {
    max-width: 1180px;
    width: 100%;
  }
}
</style>
