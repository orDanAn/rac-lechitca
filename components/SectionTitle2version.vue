<template>
  <section class="section-title__root">
    <h2 class="section-title">
      <slot>Some title text</slot>
    </h2>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.section-title {
  font-weight: bold;
  font-size: 32px;
  line-height: 112%;
  max-width: 340px;
  margin: 0 0 0 0;
  align-self: start;
}

@media screen and (max-width: 1280px) {
  .section-title {
    font-weight: bold;
    font-size: 28px;
    line-height: 114%;
    max-width: 367px;
    margin: 0 0 0 0;
    align-self: start;
  }
}
</style>
