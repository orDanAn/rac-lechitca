<template>
  <div class="title">
    <h3 class="title__text"><slot>ЗАГОЛОВОК</slot></h3>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.title__text {
  width: 413px;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
}

@media (min-width: 1280px) and (max-width: 1439px) {
  .title__text {
    width: 367px;
    font-size: 28px;
    line-height: 32px;
  }
}
@media (min-width: 1024px) and (max-width: 1279px) {
  .title__text {
    width: 288px;
    font-size: 24px;
    line-height: 28px;
  }
}
@media (min-width: 768px) and (max-width: 1023px) {
  .title__text {
    width: 380px;
    font-size: 24px;
    line-height: 28px;
  }
}
@media (min-width: 320px) and (max-width: 767px) {
  .title__text {
    width: 290px;
    font-size: 18px;
    line-height: 21px;
  }
}
</style>
