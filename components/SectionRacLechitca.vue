<template>
  <section class="rac-lechitca">
    <h2 class="rac-lechitca__main-title">
      #РАКЛЕЧИТСЯ
    </h2>
    <title-section class="rac-lechitca__second-title">
      О проекте
    </title-section>
    <div class="rac-lechitca__container">
      <info-section class="rac-lechitca__paragraph">
        Этот проект был создан благотворительным фондом Константина Хабенского.
      </info-section>
      <div class="rac-lechitca__container_inside">
        <div class="rac-lechitca__conteiner-link">
          <link-section
            :class="{
              'rac-lechitca___link_white': variant.varOne,
              'rac-lechitca__link_grey': variant.varTwo,
            }"
            @clicLink="onVarOne"
            >Рак Лечится</link-section
          >
          <link-section
            :class="{
              'rac-lechitca__link_grey': variant.varOne,
              'rac-lechitca___link_white': variant.varTwo,
            }"
            @clicLink="onVarTwo"
            >Фонд Хабенского</link-section
          >
        </div>
        <div>
          <info-section-long class="rac-lechitca__paragraph">
            <template v-if="variant.varOne">
              Есть вещи, которые не лечатся. Особенности характера, страстные
              увлечения, привычки, ставшие частью нашего «я», фобии, которые мы
              приобрели в детстве. Список можно продолжать до бесконечности, но
              одна болезнь в него точно не войдет. Эта болезнь — рак. Рак
              лечится, и лучшее доказательство — люди с их неизлечимыми
              особенностями, которые сумели победить рак.
              <br />
              <br />
              Рак лечится — проект Благотворительного Фонда Константина
              Хабенского и Leo Burnett Moscow. С его помощью мы надеемся
              изменить отношение людей к раку и заставить каждого поверить:
              онкологическое заболевание — это не приговор.
            </template>
            <template v-if="variant.varTwo">
              Благотворительный Фонд Константина Хабенского с 2008 года помогает
              детям с онкологическими и другими тяжелыми заболеваниями головного
              мозга. Фонд не только поддерживает семью заболевшего ребенка в
              самый сложный момент, оплачивая обследования, лечение и
              медицинские препараты, но и в целом меняет систему оказания помощи
              детям с опухолями мозга в России.
            </template>
          </info-section-long>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Baner from '@/components/Baner';
import Info_section_long from '@/components/Info_section_long';
import Info_section from '@/components/Info_section';
import Title_section from '@/components/Title_section';
import LinkSection from '@/components/ui/LinkSection';

export default {
  components: {
    'info-section': Info_section,
    'info-section-long': Info_section_long,
    'title-section': Title_section,
    'link-section': LinkSection,
  },
  computed: {
    variant() {
      return this.$store.getters['storeRacLechitca/getVar'];
    },
  },

  methods: {
    onVarOne() {
      this.$store.commit('storeRacLechitca/onVarOne');
    },

    onVarTwo() {
      this.$store.commit('storeRacLechitca/onVarTwo');
    },
  },
};
</script>

<style scoped>
.rac-lechitca {
  width: 100%;
  max-width: 1440px;
  height: 650px;
  background: #613a93;
  padding-top: 90px;
  padding-bottom: 100px;
}

.rac-lechitca__main-title {
  font-family: Inter;
  font-style: normal;
  font-weight: 800;
  font-size: 58px;
  line-height: 70px;
  text-align: center;
  color: #fff;
}

.rac-lechitca__second-title {
  margin: 80px 0 32px 60px;
  color: #fff;
}

.rac-lechitca__container {
  display: flex;
  justify-content: space-between;
  margin: 0 60px 0 60px;
}

.rac-lechitca__container_inside {
  display: flex;
  justify-content: space-between;
  flex-basis: 785px;
}

.rac-lechitca___link_white {
  color: #fff;
}

.rac-lechitca__link_grey {
  color: #c9c9c9;
}

.link-section:hover {
  color: #fff;
}

.link_whitey:hover {
  color: #fff;
}

.rac-lechitca__conteiner-link {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 170px;
  margin-right: 40px;
}

.rac-lechitca__paragraph {
  color: #dedede;
  margin-bottom: 18px;
}
</style>
