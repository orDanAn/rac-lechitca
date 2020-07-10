<template>
  <p class="info-section">
    <slot></slot>
  </p>
</template>

<script>
export default {};
</script>

<style scoped>
.info-section {
  width: 640px;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  color: #666;
}

@media screen and (max-width: 1280px) {
  .info-section {
    width: 570px;
  }
}

@media screen and (max-width: 1110px) {
  .info-section {
    width: 447px;
    font-size: 15px;
    line-height: 19px;
  }
}

@media screen and (max-width: 950px) {
  .info-section {
    width: 380px;
  }
}

@media screen and (max-width: 510px) {
  .info-section {
    width: 290px;
    font-size: 13px;
    line-height: 16px;
  }
}
</style>
