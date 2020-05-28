<template>
  <div class="stories-rectangle">
    <h2 class="stories-rectangle__text">
      <slot>текст заголовка</slot>
      <span class="stories-rectangle__tag">{{
        banner.find(item => item.block === 'note-1').hashtag
      }}</span>
    </h2>
  </div>
</template>

<script>
export default {
  computed: {
    banner() {
      return this.$store.getters['storeBlocks/getBlocks'];
    },
  },
};
</script>

<style scoped>
.stories-rectangle {
  margin-top: 74px;
  min-height: 86px;
  background-color: #613a93;
}

.stories-rectangle__text {
  padding-top: 20px;
  text-align: center;
  color: #ffffff;
  font-weight: normal;
  font-size: 30px;
  line-height: 46px;
}

.stories-rectangle__tag {
  font-weight: 800;
  font-size: 34px;
  line-height: 50px;
}

@media screen and (max-width: 1280px) {
  .stories-rectangle__text {
    font-size: 28px;
    line-height: 46px;
  }

  .stories-rectangle__tag {
    font-size: 34px;
    line-height: 50px;
  }
}

@media screen and (max-width: 768px) {
  .stories-rectangle__text {
    padding-top: 12px;
    max-width: 444px;
    margin: 0 auto;
    font-size: 22px;
    line-height: 36px;
  }

  .stories-rectangle__tag {
    font-size: 26px;
    line-height: 50px;
  }
}

@media screen and (max-width: 600px) {
  .stories-rectangle__text {
    padding-top: 15px;
    color: #fff;
    font-size: 16px;
    line-height: 18px;
  }

  .stories-rectangle__tag {
    font-size: 22px;
    line-height: 50px;
  }
}
</style>
