<template>
  <button class="button" @click="$emit('clicBtnOpenPopap')">
    <slot></slot>
  </button>
</template>

<script>
export default {};
</script>

<style scoped>
.button {
  padding: 0;
  border: none;
  font: inherit;
  color: inherit;
  background-color: transparent;
  cursor: pointer;
  text-decoration: none;
  transition: opacity 0.3s ease-in-out;
}
.button:active,
.button:focus {
  outline: none;
}
button:hover {
  opacity: 0.8;
}
</style>
