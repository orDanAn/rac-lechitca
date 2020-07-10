<template>
  <div class="progress-bar__inline">
    <div class="progress-bar__inline_fill" :style="style"></div>
  </div>
</template>

<script>
export default {
  props: {
    value: Number,
    maxValue: Number,
  },
  computed: {
    style() {
      return `width: ${(this.value / this.maxValue) * 100}%;`;
    },
  },
};
</script>

<style scoped>
.progress-bar__inline {
  max-width: 260px;
  height: 40px;
  background: #f4f4f4;
  position: relative;
  margin: 0 20px;
  cursor: pointer;
}

@media screen and (max-width: 1280px) {
  .progress-bar__inline {
    max-height: 36px;
  }
}

.progress-bar__inline_fill {
  max-width: 260px;
  height: 100%;
  background: #613a93;
  position: absolute;
  left: 0;
  top: 0;
}

@media screen and (max-width: 1280px) {
  .progress-bar__inline_fill {
    max-height: 36px;
  }
}
</style>
