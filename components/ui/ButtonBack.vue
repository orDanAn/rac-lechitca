<template>
  <button class="button-back" @click.prevent="$emit('clickButtonBack')">
    <slot>Текст кнопки</slot>
  </button>
</template>

<script>
export default {};
</script>

<style scoped>
.button-back {
  font-family: 'Inter';
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #c0c0c0;
  border: none;
  cursor: pointer;
  background: none;
}

.button-back:hover {
  color: #000000;
}

@media screen and (max-width: 1024px) {
  .button-back {
    font-size: 15px;
    line-height: 18px;
  }
}

@media screen and (max-width: 1024px) {
  .button-back {
    font-size: 13px;
    line-height: 16px;
  }
}
</style>
