<template>
  <div class="popup" @click="$emit('clickPopup')">
    <slot> </slot>
  </div>
</template>
<script>
export default {};
</script>

<style scoped>
.popup {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  max-height: 100vh;
  overflow-y: auto;
}
</style>
