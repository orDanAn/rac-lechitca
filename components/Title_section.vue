<template>
  <h3 class="title-text"><slot>ЗАГОЛОВОК</slot></h3>
</template>

<script>
export default {};
</script>

<style scoped>
.title-text {
  width: 413px;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
}

@media (min-width: 1280px) and (max-width: 1439px) {
  .title-text {
    width: 367px;
    font-size: 28px;
    line-height: 32px;
  }
}
@media (min-width: 1024px) and (max-width: 1279px) {
  .title-text {
    width: 288px;
    font-size: 24px;
    line-height: 28px;
  }
}
@media (min-width: 768px) and (max-width: 1023px) {
  .title-text {
    width: 380px;
    font-size: 24px;
    line-height: 28px;
  }
}
@media (min-width: 320px) and (max-width: 767px) {
  .title-text {
    width: 290px;
    font-size: 18px;
    line-height: 21px;
  }
}
</style>
