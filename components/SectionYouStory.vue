<template>
  <section class="you-story">
    <container>
      <title-section class="you-story__title">
        {{ blocks[9].title }}
      </title-section>
      <div class="you-story__container">
        <info-section v-html="blocks[9].text"> </info-section>
        <div class="you-story__container_inside">
          <div class="you-story__container-link">
            <link-section
              :class="{ 'you-story__link_active': variant.variantOne }"
              @clicLink="onVariantOne"
              >{{ blocks[9].extraTexts[0].title }}</link-section
            >
            <link-section
              :class="{ 'you-story__link_active': variant.variantTwo }"
              @clicLink="onVariantTwo"
              >{{ blocks[9].extraTexts[1].title }}</link-section
            >
          </div>
          <div class="you-story__container_info">
            <info-section-long>
              <template v-if="variant.variantOne">
                <div v-html="blocks[9].extraTexts[0].text"></div>
              </template>
              <template v-if="variant.variantTwo">
                <div v-html="blocks[9].extraTexts[1].text"></div>
              </template>
            </info-section-long>
            <button-small
              class="you-story__button"
              v-if="variant.variantOne"
              @clicBtnSmoll="popupOpen"
              >Заполнить форму</button-small
            >
            <button-small
              class="you-story__button"
              v-if="variant.variantTwo"
              @clicBtnSmoll="popupOpenContact"
              >Оставить контакт</button-small
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
    blocks() {
      return this.$store.getters['storeBlocks/getBlocks'];
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

    popupOpenContact() {
      this.$store.commit('storePopup/openPopupShowСontacts');
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

.you-story__container {
  display: flex;
  justify-content: space-between;
  margin: 0 60px 0 60px;
}

.you-story__container_inside {
  display: flex;
  justify-content: space-between;
  flex-basis: 785px;
}
.you-story__container_info {
  position: relative;
}

.you-story__link_active {
  color: #000000;
}
.you-story__button {
  position: absolute;
  top: 166px;
}
@media screen and (max-width: 1280px) {
  .you-story {
    min-height: 488px;
  }

  .you-story__title {
    margin: 90px 0 30px 0;
  }
  .you-story__container {
    margin: 0;
  }
  .you-story__container_inside {
    flex-basis: 715px;
  }
}

@media screen and (max-width: 1110px) {
  .you-story {
    min-height: 436px;
  }

  .you-story__title {
    margin: 80px 0 20px 0;
  }
  .you-story__container_inside {
    flex-basis: 566px;
  }
  .you-story__button {
    top: 152px;
  }
}
@media screen and (max-width: 950px) {
  .you-story {
    min-height: 598px;
  }
  .you-story__link_active {
    color: #000;
    border-bottom: 2px solid #613a93;
    padding-bottom: 6px;
  }
  .you-story__title {
    margin: 80px auto 26px;
  }
  .you-story__container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    height: 270px;
  }
  .you-story__container_inside {
    display: block;
  }
  .you-story__container-link {
    display: flex;
    margin-top: 95px;
    margin-bottom: 30px;
  }
  .you-story__button {
    top: 145px;
  }
}

@media screen and (max-width: 510px) {
  .you-story {
    min-height: 462px;
  }

  .you-story__title {
    margin: 50px auto 16px;
  }

  .you-story__container-link {
    margin-top: 55px;
    margin-bottom: 15px;
  }
  .you-story__button {
    top: 125px;
  }
}
</style>
