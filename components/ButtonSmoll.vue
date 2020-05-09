<template>
  <button class="button-smoll">
    <slot>Текст кнопки</slot>
  </button>
</template>

<script>
export default {};
</script>

<style scoped>
.button-smoll {
  margin-top: 78px;
  background: #613a93;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #ffffff;
  cursor: pointer;
  width: 280px;
  height: 52px;
  border: none;
}

.button-smoll:hover {
  opacity: 0.9;
}
</style>
