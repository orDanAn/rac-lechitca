<template>
  <container>
    <sec-title class="section-statics__title"
      >Статистика по онкозаболеваниям</sec-title
    >
    <div class="section-statics__stats-container">
      <div
        class="section-statics__singe-stat"
        v-for="(item, index) in infoStatics"
        :key="item.id"
      >
        <p class="section-statics__stat-text">
          {{ infoStatics[index].description }}
        </p>
        <div class="section-statics__stat-illustration">
          <prog-bar-inline
            v-if="!infoStatics[index].absValue"
            :value="infoStatics[index].value"
            :maxValue="infoStatics[index].maxValue"
          ></prog-bar-inline>
          <prog-bar-column
            v-if="infoStatics[index].absValue"
            :value="infoStatics[index].value"
            :maxValue="infoStatics[index].maxValue"
            :absValue="infoStatics[index].absValue"
          ></prog-bar-column>
          <p class="section-statics__stat-numbers">
            {{ infoStatics[index].summary }}
          </p>
          <p class="section-statics__stat-source">
            {{ infoStatics[index].source }}
          </p>
        </div>
      </div>
    </div>
  </container>
</template>

<script>
import Title_section from '@/components/Title_section';
import Container from '@/components/Container';
import ProgressBarInline from '@/components/ui/ProgressBarInline';
import ProgressiveBarColumn from '@/components/ui/ProgressiveBarColumn';

export default {
  components: {
    'sec-title': Title_section,
    container: Container,
    'prog-bar-inline': ProgressBarInline,
    'prog-bar-column': ProgressiveBarColumn,
  },
  computed: {
    infoStatics() {
      return this.$store.getters['storeStatics/getInfoStatics'];
    },
  },
};
</script>

<style scoped>
.section-statics__title {
  margin-top: 105px;
  margin-left: 60px;
}

.section-statics__stats-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 40px;
  justify-content: space-between;
  margin: 70px 60px 100px;
}

.section-statics__singe-stat {
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
  border: 1px solid #efefef;
}

.section-statics__stat-graphic {
  height: 40px;
  width: 86.6%;
  display: flex;
  flex-direction: row;
  margin: 0 20px 0;
}

.section-statics__stat-graphic .section-statics__graphic-2pic {
  position: relative;
  left: -260px;
  overflow: visible;
}

.section-statics__stat-graphic_column {
  height: 40px;
  width: 86.6%;
  margin: 0 20px 0;
}

.section-statics__stat-graphic_column .section-statics__graphic-pic {
  display: block;
}

.section-statics__stat-text {
  margin: 20px 20px 0;
  font-size: 12px;
}

.section-statics__stat-numbers {
  text-align: right;
  margin: 20px 20px 0;
  font-size: 38px;
  line-height: 105%;
  font-weight: bold;
}

.section-statics__stat-source {
  margin: 20px;
  text-align: right;
  font-size: 12px;
  line-height: 133%;
}

@media screen and (max-width: 1395px) {
  .section-statics__title {
    margin-top: 90px;
    margin-left: 0;
  }

  .section-statics__stats-container {
    margin: 60px auto 90px;
  }

  .section-statics__singe-stat {
    width: 265px;
    height: 265px;
  }

  .section-statics__stat-graphic {
    width: 229px;
    margin: 0 18px 0;
  }

  .section-statics__stat-graphic .section-statics__graphic-2pic {
    left: -229px;
  }

  .section-statics__stat-graphic_column {
    height: 36px;
  }

  .section-statics__stat-text {
    margin: 18px 18px 0;
    font-size: 12px;
    line-height: 133%;
  }

  .section-statics__stat-numbers {
    margin: 18px 15px 0 23px;
    font-size: 38px;
    line-height: 105%;
  }

  .section-statics__stat-source {
    margin: 15px 18px 18px;
    font-size: 12px;
    line-height: 133%;
  }
}

@media screen and (max-width: 1235px) {
  .section-statics__title {
    margin: 80px 10px 0;
  }

  .section-statics__stats-container {
    margin: 60px 10px 90px;
    width: 90%;
    grid-gap: 10px;
  }

  .section-statics__singe-stat {
    max-width: 208px;
    max-height: 208px;
  }

  .section-statics__stat-graphic {
    width: 229px;
    margin: 0 18px 0;
  }

  .section-statics__stat-graphic .section-statics__graphic-2pic {
    left: -229px;
  }

  .section-statics__stat-graphic_column {
    height: 36px;
  }

  .section-statics__stat-text {
    margin: 5px 15px 0 5px;
    font-size: 10px;
    line-height: 14px;
  }

  .section-statics__stat-numbers {
    margin: 18px 15px 0 23px;
    font-size: 26px;
    line-height: 30px;
  }

  .section-statics__stat-source {
    margin: 15px 18px 18px;
    font-size: 10px;
    line-height: 14px;
  }
}

@media screen and (max-width: 950px) {
  .section-statics__stats-container {
    overflow: scroll;
  }
}

@media screen and (max-width: 768px) {
  .section-statics__title {
    margin: 80px auto 50px;
    text-align: center;
  }

  .section-statics__stats-container {
    margin: 60px 0 90px;
    width: auto;
    overflow: scroll;
  }

  .section-statics__singe-stat {
    width: 216px;
    height: 216px;
    overflow: scroll;
  }

  .section-statics__stat-graphic {
    width: 229px;
    margin: 0 18px 0;
  }

  .section-statics__stat-graphic .section-statics__graphic-2pic {
    left: -229px;
  }

  .section-statics__stat-graphic_column {
    height: 36px;
  }

  .section-statics__stat-text {
    margin: 5px 15px 0 5px;
    font-size: 10px;
    line-height: 14px;
  }

  .section-statics__stat-numbers {
    margin: 18px 15px 0 23px;
    font-size: 26px;
    line-height: 30px;
  }

  .section-statics__stat-source {
    margin: 15px 18px 18px;
    font-size: 10px;
    line-height: 14px;
  }
}

@media screen and (max-width: 320px) {
  .section-statics__title {
    margin: 40px auto 30px;
    text-align: center;
  }
}
</style>
