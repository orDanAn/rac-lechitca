<template>
  <button class="button-close" @click="$emit('clickBtnClose')"></button>
</template>

<script>
export default {};
</script>

<style scoped>
.button-close {
  background-image: url('/ui-image/button-close.jpg');
  width: 30px;
  height: 30px;
  border: none;
  position: absolute;
  right: 35px;
  top: 35px;
  cursor: pointer;
}
</style>
