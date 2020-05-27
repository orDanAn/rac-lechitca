<template>
  <button class="button-smoll" @click="$emit('clicBtnSmoll')">
    <slot>Текст кнопки</slot>
  </button>
</template>

<script>
export default {};
</script>

<style scoped>
.button-smoll {
  width: 280px;
  background: #613a93;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #ffffff;
  cursor: pointer;
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
    font-size: 16px;
    line-height: 19px;
  }
}

@media screen and (max-width: 1024px) {
  .button-smoll {
    width: 230px;
    height: 46px;
    font-size: 15px;
    line-height: 18px;
  }
}

@media screen and (max-width: 510px) {
  .button-smoll {
    width: 290px;
    height: 40px;
    font-size: 13px;
    line-height: 16px;
  }
}
</style>
