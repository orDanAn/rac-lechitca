<template>
  <button class="button-main-title" @click="$emit('btnMainTaitle')"></button>
</template>

<script>
export default {};
</script>

<style scoped>
.button-main-title {
  background: url('/ui-image/button-menu.svg');
  background-repeat: no-repeat;
  width: 36px;
  height: 12px;
  border: none;
  padding: 10px;
  cursor: pointer;
}
</style>
