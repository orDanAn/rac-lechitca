<template>
  <button class="button">
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
}
.button:active,
.button:focus {
  outline: none;
}
</style>
