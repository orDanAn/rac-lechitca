<template>
  <section>
    <title-section class="title-you-stori">
      Расскажите свою историю
    </title-section>
    <div class="you-stori-conteiner">
      <info-section>
        Мы публикуем новые истории на сайте раз в неделю. Есть 2 варианта
        поделиться своей историей неизлечимых привычек, навязчивых идей и
        болезненных привязанностей.
      </info-section>
      <div class="you-stori-conteiner_inside">
        <div>
          <link-section
            :class="{ link_activ: variant.variantOne }"
            @clicLink="onVariantOne"
            >1-й вариант</link-section
          >
          <link-section
            :class="{ link_activ: variant.variantTwo }"
            @clicLink="onVariantTwo"
            >2-й вариант</link-section
          >
        </div>
        <div>
          <info-section-long>
            <template v-if="variant.variantOne">
              Заполнить подробную форму прямо на сайте и мы опубликуем вашу
              историю после проверки. Пожалуйста, заполняйте все пункты
              корректно, если вы испытаете какие-то сложности, воспользуйтесь
              2-м вариантом.
            </template>
            <template v-if="variant.variantTwo">
              Оставить контакт (почту или номер телефона) и мы свяжемся с вами,
              зададим вопросы, уточним детали вашей истории.
            </template>
          </info-section-long>
          <button-smoll @clicBtnSmoll="$emit('clicBtnYouStor')"
            >Заполнить форму</button-smoll
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ButtonSmoll from '@/components/ui/ButtonSmoll';
import Info_section_long from '@/components/Info_section_long';
import Info_section from '@/components/Info_section';
import Title_section from '@/components/Title_section';
import LinkSection from '@/components/ui/LinkSection';

export default {
  components: {
    'button-smoll': ButtonSmoll,
    'info-section': Info_section,
    'info-section-long': Info_section_long,
    'title-section': Title_section,
    'link-section': LinkSection,
  },

  computed: {
    variant() {
      return this.$store.getters['storeYouStori/getVariant'];
    },
  },

  methods: {
    onVariantOne() {
      this.$store.commit('storeYouStori/onVariantOne');
    },

    onVariantTwo() {
      this.$store.commit('storeYouStori/onVariantTwo');
    },
  },
};
</script>

<style scoped>
section {
  width: 100%;
  height: 522px;
  max-width: 1440px;
  background: #f7f7f7;
}

.title-you-stori {
  margin: 100px 0 32px 60px;
}

.you-stori-conteiner {
  display: flex;
  justify-content: space-between;
  margin: 0 60px 0 60px;
}

.you-stori-conteiner_inside {
  display: flex;
  justify-content: space-between;
  flex-basis: 785px;
}

.link_activ {
  color: #000000;
}
</style>
