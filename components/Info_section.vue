<template>
  <div class="conteiner-info">
    <p class="info_section"><slot>текст параграфа</slot></p>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.conteiner-info {
  color: #666;
}

.info_section {
  width: 340px;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
}
@media (min-width: 1280px) and (max-width: 1439px) {
  .info_section {
    width: 305px;
    font-size: 16px;
    line-height: 20px;
  }
}
@media (min-width: 1024px) and (max-width: 1279px) {
  .info_section {
    width: 260px;
    font-size: 13px;
    line-height: 16px;
  }
}
@media (min-width: 768px) and (max-width: 1023px) {
  .info_section {
    width: 100%;
    font-size: 13px;
    line-height: 16px;
  }
}
@media (min-width: 320px) and (max-width: 767px) {
  .info_section {
    width: 100%;
    font-size: 13px;
    line-height: 16px;
  }
}
</style>
