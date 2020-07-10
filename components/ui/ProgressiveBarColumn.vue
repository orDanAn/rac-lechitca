<template>
  <div class="progress-bar__container">
    <div class="progress-bar__column_grey" :style="styleGrey"></div>
    <div class="progress-bar__column_purple" :style="stylePurple"></div>
  </div>
</template>

<script>
export default {
  props: {
    value: Number,
    maxValue: Number,
    absValue: Number,
  },
  computed: {
    styleGrey() {
      return `width: ${(this.value / this.absValue) * 100}%;`;
    },
    stylePurple() {
      return `width: ${(this.value / this.maxValue) * 100}%;`;
    },
  },
};
</script>

<style scoped>
.progress-bar__column_grey {
  max-width: 260px;
  height: 20px;
  background: #f4f4f4;
  align-self: start;
}

.progress-bar__column_purple {
  max-width: 260px;
  height: 20px;
  background: #613a93;
  align-self: start;
}

.progress-bar__container {
  display: flex;
  flex-direction: column;
  margin: 0 20px;
  cursor: pointer;
}
</style>
