<template>
  <button class="button-smoll" @click.prevent="$emit('clicBtnSmoll')">
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
  padding: 0 88px;
  height: 52px;
  border: none;
}

.button-smoll:hover {
  opacity: 0.9;
}

@media screen and (max-width: 1280px) {
  .button-smoll {
    width: 230px;
    height: 48px;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
  }
}
</style>
