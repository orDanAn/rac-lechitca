<template>
  <div>
    <h4 class="title_section"><slot></slot></h4>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.title_section {
  width: 413px;
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  color: #000000;
}

@media (min-width: 1280px) and (max-width: 1439px) {
  .title_section {
    width: 367px;
    font-size: 28px;
    line-height: 32px;
  }
}
</style>
