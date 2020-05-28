<template>
  <div class="info_section"><slot>текст параграфа</slot></div>
</template>

<script>
export default {};
</script>

<style scoped>
.info_section {
  color: #666;
  width: 340px;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
}
@media screen and (max-width: 1280px) {
  .info_section {
    width: 305px;
    font-size: 16px;
    line-height: 20px;
  }
}
@media screen and (max-width: 1024px) {
  .info_section {
    width: 260px;
    font-size: 13px;
    line-height: 16px;
  }
}
@media screen and (max-width: 950px) {
  .info_section {
    width: 380px;
    font-size: 13px;
    line-height: 16px;
  }
}
@media screen and (max-width: 510px) {
  .info_section {
    width: 290px;
    font-size: 13px;
    line-height: 16px;
  }
}
</style>
