<template>
  <div class="pagination">
    <button
      class="pagination__text pagination__first-page pagination__first-page_inactive"
      v-if="active === 1"
    >
      Первая
    </button>
    <button class="pagination__text pagination__first-page" v-else>
      Первая
    </button>
    <button-switch :position="'right'" class="button-rotate button-switch" />
    <div
      class="pagination__item"
      v-for="item in pageCount"
      :key="item"
      @click="setActive(item)"
      :class="[{ pagination__item_active: item === active }]"
    >
      {{ item }}
    </div>
    <button-switch :position="'right'" class="button-switch" />
    <button
      class="pagination__text pagination__last-page pagination__last-page_inactive"
      v-if="active === pageCount"
    >
      Последняя
    </button>
    <button class="pagination__text pagination__last-page" v-else>
      Последняя
    </button>
  </div>
</template>

<script>
import ButtonSwitch from '@/components/ui/ButtonSwitch';
export default {
  components: {
    'button-switch': ButtonSwitch,
  },
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
  margin-bottom: 100px;
  display: grid;
  grid-template-columns: 55px repeat(8, 56px) 95px;
  align-items: center;
  justify-items: center;
  justify-content: center;
  grid-gap: 10px;
}

.pagination__item {
  color: black;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 56px;
  height: 56px;
  background-color: #fbfbfb;
}

.pagination__item_active {
  background-color: #f4f4f4;
}

.button-rotate {
  transform: rotate(180deg);
}

.button-switch /deep/ button {
  background-color: transparent;
}

.pagination__text {
  border: none;
  background: none;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  color: #181818;
  cursor: pointer;
}

.pagination__first-page_inactive {
  color: #a2a2a2;
  cursor: default;
}

.pagination__last-page_inactive {
  color: #a2a2a2;
  cursor: default;
}

@media screen and (max-width: 1250px) {
  .pagination__item {
    width: 50px;
    height: 50px;
    font-size: 15px;
    line-height: 18px;
  }
}

@media screen and (max-width: 950px) {
  .pagination__text {
    font-weight: normal;
    font-size: 15px;
    line-height: 18px;
  }

  .pagination {
    grid-template-columns: 55px repeat(8, 50px) 95px;
  }
}

@media screen and (max-width: 768px) {
  .pagination {
    grid-template-columns: 20px repeat(5, 50px) 20px;
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 5px;
  }
  .pagination__first-page {
    grid-row: 2/3;
    grid-column: 1/2;
  }
  .pagination__last-page {
    grid-row: 2/3;
    grid-column: 6/8;
  }
}
</style>
