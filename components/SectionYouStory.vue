<template>
  <section class="you-story">
    <container>
      <title-section class="you-story__title">
        Расскажите свою историю
      </title-section>
      <div class="you-story__conteiner">
        <info-section>
          Мы публикуем новые истории на сайте раз в неделю. Есть 2 варианта
          поделиться своей историей неизлечимых привычек, навязчивых идей и
          болезненных привязанностей.
        </info-section>
        <div class="you-story__conteiner_inside">
          <div>
            <link-section
              :class="{ 'you-story__link_active': variant.variantOne }"
              @clicLink="onVariantOne"
              >1-й вариант</link-section
            >
            <link-section
              :class="{ 'you-story__link_active': variant.variantTwo }"
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
                Оставить контакт (почту или номер телефона) и мы свяжемся с
                вами, зададим вопросы, уточним детали вашей истории.
              </template>
            </info-section-long>
            <button-small @clicBtnSmoll="popupOpen"
              >Заполнить форму</button-small
            >
          </div>
        </div>
      </div>
    </container>
  </section>
</template>

<script>
import ButtonSmall from '@/components/ui/ButtonSmall';
import Info_section_long from '@/components/Info_section_long';
import Info_section from '@/components/Info_section';
import Title_section from '@/components/Title_section';
import LinkSection from '@/components/ui/LinkSection';
import Container from '@/components/Container';

export default {
  components: {
    'button-small': ButtonSmall,
    'info-section': Info_section,
    'info-section-long': Info_section_long,
    'title-section': Title_section,
    'link-section': LinkSection,
    container: Container,
  },

  computed: {
    variant() {
      return this.$store.getters['storeYouStory/getVariant'];
    },
  },

  methods: {
    onVariantOne() {
      this.$store.commit('storeYouStory/onVariantOne');
    },

    onVariantTwo() {
      this.$store.commit('storeYouStory/onVariantTwo');
    },

    popupOpen() {
      this.$store.commit('storePopup/openPopup');
    },
  },
};
</script>

<style scoped>
.you-story {
  width: 100%;
  min-height: 522px;
  background: #f7f7f7;
}

.you-story__title {
  margin: 100px 0 32px 60px;
}

.you-story__conteiner {
  display: flex;
  justify-content: space-between;
  margin: 0 60px 0 60px;
}

.you-story__conteiner_inside {
  display: flex;
  justify-content: space-between;
  flex-basis: 785px;
}

.you-story__link_active {
  color: #000000;
}
</style>
