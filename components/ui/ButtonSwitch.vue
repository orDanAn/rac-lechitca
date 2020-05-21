<template>
  <div>
    <button :class="['button', `button_${position}`]"></button>
  </div>
</template>

<script>
export default {
  props: ['position'],
};
</script>

<style scoped>
.button {
  width: 40px;
  height: 40px;
  background: #fbfbfb;
  background-repeat: no-repeat;
  background-size: 8px 16px;
  background-position: center;
  border: none;
  cursor: pointer;
}
.button_right {
  background-image: url('/ui-image/Button-img.jpg');
}
.button_left {
  background-image: url('/ui-image/Button-imgL.jpg');
}
@media (min-width: 320px) and (max-width: 767px) {
  .button {
    width: 8px;
    height: 16px;
  }
}
</style>
