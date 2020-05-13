<template>
  <root>
    <section-title class="section-statics__title"
      >Статистика по онкозаболеваниям</section-title
    >
    <div class="section-statics__stats-container">
      <div class="section-statics__singe-stat">
        <p class="section-statics__stat-text">
          Каждый 3-й в стране уверен, что рак неизлечим. А это примерно 48 918
          000 человек.
        </p>
        <div class="section-statics__stat-illustration">
          <progress-bar-inline :value="1" :maxValue="3"></progress-bar-inline>
          <p class="section-statics__stat-numbers">1 из 3</p>
          <p class="section-statics__stat-source">Левада-Центр 2018</p>
        </div>
      </div>
      <div class="section-statics__singe-stat">
        <p class="section-statics__stat-text">
          2,6% Россиян имеют онкозаболевания.
        </p>
        <div class="section-statics__stat-illustration">
          <progress-bar-inline
            :value="2.6"
            :maxValue="100"
          ></progress-bar-inline>
          <p class="section-statics__stat-numbers">3 700 000</p>
          <p class="section-statics__stat-source">Росстат 2018</p>
        </div>
      </div>
      <div class="section-statics__singe-stat">
        <p class="section-statics__stat-text">
          На 28% выросла доля выявления заболеваний на ранней стадии за 10 лет.
        </p>
        <div class="section-statics__stat-illustration">
          <progressive-bar-column
            :value="65"
            :maxValue="80"
            :absValue="100"
          ></progressive-bar-column>
          <p class="section-statics__stat-numbers">↑28%</p>
          <p class="section-statics__stat-source">МНИОИ Герцена 2018</p>
        </div>
      </div>
      <div class="section-statics__singe-stat">
        <p class="section-statics__stat-text">
          На 25% снизилась смертность в течение первого года после постановки
          диагноза.
        </p>
        <div class="section-statics__stat-illustration">
          <progressive-bar-column
            :value="50"
            :maxValue="90"
            :absValue="67"
          ></progressive-bar-column>
          <p class="section-statics__stat-numbers">↓25%</p>
          <p class="section-statics__stat-source">МНИОИ Герцена 2018</p>
        </div>
      </div>
    </div>
  </root>
</template>

<script>
import Title_section from '@/components/Title_section';
import Root from '@/components/Root';
import ProgressBarInline from '@/components/ui/ProgressBarInline';
import ProgressiveBarColumn from '@/components/ui/ProgressiveBarColumn';

export default {
  components: {
    'section-title': Title_section,
    root: Root,
    'progress-bar-inline': ProgressBarInline,
    'progressive-bar-column': ProgressiveBarColumn,
  },
};
</script>

<style scoped>
.section-statics__title {
  margin-top: 100px;
}

@media screen and (max-width: 1280px) {
  .section-statics__title {
    margin-top: 90px;
  }
}

.section-statics__stats-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 70px auto 100px;
}

@media screen and (max-width: 1280px) {
  .section-statics__stats-container {
    margin: 60px auto 90px;
  }
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

@media screen and (max-width: 1280px) {
  .section-statics__singe-stat {
    width: 265px;
    height: 265px;
  }
}

.section-statics__stat-graphic {
  height: 40px;
  width: 86.6%;
  display: flex;
  flex-direction: row;
  margin: 0 20px 0;
}

@media screen and (max-width: 1280px) {
  .section-statics__stat-graphic {
    width: 229px;
    margin: 0 18px 0;
  }
}

.section-statics__stat-graphic .section-statics__graphic-2pic {
  position: relative;
  left: -260px;
  overflow: visible;
}

@media screen and (max-width: 1280px) {
  .section-statics__stat-graphic .section-statics__graphic-2pic {
    left: -229px;
  }
}

.section-statics__stat-graphic_column {
  height: 40px;
  width: 86.6%;
  margin: 0 20px 0;
}

@media screen and (max-width: 1280px) {
  .section-statics__stat-graphic_column {
    height: 36px;
  }
}

.section-statics__stat-graphic_column .section-statics__graphic-pic {
  display: block;
}

.section-statics__stat-text {
  margin: 20px 20px 0;
  font-size: 12px;
}

@media screen and (max-width: 1280px) {
  .section-statics__stat-text {
    margin: 18px 18px 0;
    font-size: 12px;
    line-height: 133%;
  }
}

.section-statics__stat-numbers {
  text-align: right;
  margin: 20px 20px 0;
  font-size: 38px;
  line-height: 105%;
  font-weight: bold;
}

@media screen and (max-width: 1280px) {
  .section-statics__stat-numbers {
    margin: 18px 15px 0 23px;
    font-size: 38px;
    line-height: 105%;
  }
}

.section-statics__stat-source {
  margin: 20px;
  text-align: right;
  font-size: 12px;
  line-height: 133%;
}

@media screen and (max-width: 1280px) {
  .section-statics__stat-source {
    margin: 15px 18px 18px;
    font-size: 12px;
    line-height: 133%;
  }
}
</style>
