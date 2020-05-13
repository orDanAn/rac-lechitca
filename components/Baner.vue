<template>
  <div class="stories-rectangle">
    <h2 class="stories-rectangle__text">
      <slot>текст заголовка</slot>
      <span class="stories-rectangle__tag">#ЭТОНЕЛЕЧИТСЯ</span>
    </h2>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.stories-rectangle {
  margin-top: 74px;
  /* margin-bottom: 100px; использование боттома мешает переиспользованию, лучше миксы или модификаторы */
  min-height: 86px;
  background-color: #613a93;
}

.stories-rectangle__text {
  padding-top: 20px;
  text-align: center;
  color: #ffffff;
  font-weight: normal;
  font-size: 30px;
  line-height: 46px;
}

.stories-rectangle__tag {
  font-weight: 800;
  font-size: 34px;
  line-height: 50px;
}
</style>
