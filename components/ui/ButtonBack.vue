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
</style>
