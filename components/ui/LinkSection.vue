<template>
  <a class="link-section" @click.prevent="$emit('clicLink')" href="">
    <slot>Текст ссылки</slot>
  </a>
</template>

<script>
export default {};
</script>

<style scoped>
.link-section {
  display: block;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  text-decoration: none;

  color: #a2a2a2;
  cursor: pointer;

  margin-bottom: 10px;
}

.link-section:hover {
  font-weight: normal;
  color: #000000;
}
</style>
