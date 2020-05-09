<template>
  <div>
    <p class="info_section"><slot></slot></p>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.info_section {
  width: 340px;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  color: #666666;
}
@media (min-width: 1280px) and (max-width: 1439px) {
  .info_section {
    width: 305px;
    font-size: 16px;
    line-height: 20px;
  }
}
</style>
