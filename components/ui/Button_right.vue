<template>
  <div>
    <button class="button_right"></button>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.button_right {
  width: 40px;
  height: 40px;
  background: #fbfbfb;
  background-image: url('/ui-image/Button-img.jpg');
  background-repeat: no-repeat;
  background-size: 8px 16px;
  background-position: center;
  border: none;
  cursor: pointer;
}
@media (min-width: 320px) and (max-width: 767px) {
  .button_right {
    width: 8px;
    height: 16px;
  }
}
</style>
