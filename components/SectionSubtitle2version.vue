<template>
  <p class="section-subtitle">
    <slot>Some subtitle text</slot>
  </p>
</template>

<script>
export default {};
</script>

<style scoped>
.section-subtitle {
  max-width: 340px;
  margin: 32px 0 0 0;
  font-size: 18px;
  line-height: 122%;
}

@media screen and (max-width: 1280px) {
  .section-title {
    font-size: 16px;
    line-height: 125%;
    max-width: 305px;
  }
}
</style>
