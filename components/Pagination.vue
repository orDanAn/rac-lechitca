<template>
  <div class="pagination">
    <div
      class="pagination__item"
      v-for="item in pageCount"
      :key="item"
      @click="setActive(item)"
      :class="[{ pagination__item_active: item === active }]"
    >
      {{ item }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    totalItem: {
      type: Number,
      default: 0,
    },
    ItemsPerPage: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    pageCount() {
      return Math.ceil(this.totalItem / this.ItemsPerPage);
    },
  },
  data() {
    return {
      active: 1,
    };
  },
  methods: {
    setActive(item) {
      this.active = item;
      this.$emit('onPageChanged', item);
    },
  },
};
</script>

<style scoped>
.pagination {
  width: 30%;
  margin: 0 auto;
  margin-bottom: 100px;
  display: flex;
  justify-content: space-between;
}

.pagination__item {
  color: black;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  padding: 15px 20px;
  background-color: #fbfbfb;
}

.pagination__item_active {
  background-color: #f4f4f4;
}
</style>
