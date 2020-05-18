<template>
  <div class="stories__wrap">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.stories__wrap {
  margin-top: 70px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

@media screen and (max-width: 535px) {
  .stories__wrap {
    justify-content: center;
  }
}
</style>
