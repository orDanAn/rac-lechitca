<template>
  <section class="rac-lechitca">
    <container>
      <h2 class="rac-lechitca__main-title">
        {{ blocks[10].hashtag }}
      </h2>
      <title-section class="rac-lechitca__second-title">
        {{ blocks[10].title }}
      </title-section>
      <div class="rac-lechitca__container">
        <info-section
          class="rac-lechitca__paragraph rac-lechitca__info-section"
          v-html="blocks[10].text"
        >
        </info-section>
        <div class="rac-lechitca__container_inside">
          <div class="rac-lechitca__conteiner-link">
            <link-section
              :class="{
                'rac-lechitca___link_white': variant.varOne,
                'rac-lechitca__link_grey': variant.varTwo,
              }"
              @clicLink="onVarOne"
              >{{ blocks[10].extraTexts[0].title }}</link-section
            >
            <link-section
              :class="{
                'rac-lechitca__link_grey': variant.varOne,
                'rac-lechitca___link_white': variant.varTwo,
              }"
              @clicLink="onVarTwo"
              >{{ blocks[10].extraTexts[1].title }}</link-section
            >
          </div>
          <div>
            <info-section-long
              class="rac-lechitca__paragraph rac-lechitca__info-section-long"
            >
              <template v-if="variant.varOne">
                <div v-html="blocks[10].extraTexts[0].text"></div>
              </template>
              <template v-if="variant.varTwo">
                <div v-html="blocks[10].extraTexts[1].text"></div>
              </template>
            </info-section-long>
          </div>
        </div>
      </div>
    </container>
  </section>
</template>

<script>
import Baner from '@/components/Baner';
import Info_section_long from '@/components/Info_section_long';
import Info_section from '@/components/Info_section';
import Title_section from '@/components/Title_section';
import LinkSection from '@/components/ui/LinkSection';
import Container from '@/components/Container';

export default {
  components: {
    'info-section': Info_section,
    'info-section-long': Info_section_long,
    'title-section': Title_section,
    'link-section': LinkSection,
    container: Container,
  },
  computed: {
    variant() {
      return this.$store.getters['storeRacLechitca/getVar'];
    },
    blocks() {
      return this.$store.getters['storeBlocks/getBlocks'];
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

  min-height: 650px;
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
  margin: 0 60px;
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

@media screen and (max-width: 1280px) {
  .rac-lechitca {
    min-height: 626px;
    padding-top: 80px;
    padding-bottom: 90px;
  }
  .rac-lechitca__container {
    margin: 0;
  }
  .rac-lechitca__second-title {
    margin: 60px 0 30px 0px;
  }
  .rac-lechitca__container_inside {
    flex-basis: 715px;
  }
}

@media screen and (max-width: 1150px) {
  .rac-lechitca {
    min-height: 571px;
    padding-bottom: 80px;
  }
  .rac-lechitca__main-title {
    font-size: 52px;
    line-height: 63px;
  }
  .rac-lechitca__second-title {
    margin: 46px 0 30px 0px;
  }
  .rac-lechitca__info-section {
    width: 260px;
  }

  .rac-lechitca__conteiner-link {
    width: 165px;
  }
}

@media screen and (max-width: 1000px) {
  .rac-lechitca__conteiner-link {
    width: 145px;
  }
}

@media screen and (max-width: 950px) {
  .rac-lechitca__main-title {
    display: none;
  }
  .rac-lechitca {
    min-height: 660px;
    padding: 0 0 0 0;
  }
  .rac-lechitca___link_white {
    color: #fff;
    border-bottom: 2px solid #fff;
    padding-bottom: 6px;
  }

  .rac-lechitca__container {
    display: block;
    margin: 0 auto;
    width: 380px;
  }

  .rac-lechitca__second-title {
    margin: 80px auto 26px;
    text-align: center;
  }

  .rac-lechitca__conteiner-link {
    flex-direction: row;
    align-items: center;
    width: auto;
    margin: 77px 0 30px 0;
  }

  .rac-lechitca__container_inside {
    display: block;
  }
}

@media screen and (max-width: 510px) {
  .rac-lechitca {
    min-height: 628px;
  }

  .rac-lechitca__container {
    width: 290px;
  }

  .rac-lechitca__second-title {
    margin: 50px 0 15px;
    text-align: left;
  }
  .rac-lechitca__info-section-long {
    font-size: 15px;
    line-height: 19px;
  }

  .rac-lechitca__conteiner-link {
    margin: 40px 0 20px 0;
  }
}
</style>
