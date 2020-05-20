<template>
  <div class="story-container">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.story-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

@media screen and (max-width: 1280px) {
  .stories__wrap {
    margin-top: 60px;
  }
}

@media screen and (max-width: 1024px) {
  .stories__wrap {
    margin-top: 46px;
  }
}

@media screen and (max-width: 940px) {
  .stories__wrap {
    margin-top: 60px;
  }
}

@media screen and (max-width: 535px) {
  .stories__wrap {
    justify-content: center;
  }
}

@media screen and (max-width: 378px) {
  .stories__wrap {
    margin-top: 40px;
  }
}
</style>
