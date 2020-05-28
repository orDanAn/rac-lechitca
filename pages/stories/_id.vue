<template>
  <container class="storie-container" @click="$emit('cardClic')">
    <section class="storie-header">
      <img
        :src="stories[1].url"
        alt="фото автора статьи"
        class="storie-header__img"
      />
      <div class="storie-header__title-container">
        <div class="storie__grey-line"></div>
        <h3 class="storie-header__text">
          <span class="storie-header__text-bold">{{ stories[1].author }}:</span>
          {{ stories[1].title }}
        </h3>
      </div>
      <div class="storie-header__subtitle-container">
        <div class="storie-header__subtitle-text">
          <p class="storie-header__share" @click="clickSeti">Поделитесь ↗</p>
          <p class="storie-header__date">{{ stories[1].date }}</p>
        </div>
        <div class="storie__grey-line storie__grey-line_underline"></div>
      </div>
    </section>

    <section class="storie-text" v-html="stories[1].text"></section>

    <section class="storie-share">
      <div class="storie__grey-line"></div>
      <p class="storie-share__link" @click="clickSeti">
        Поделитесь этой статьей в своих социальных сетях &#8599;
      </p>
      <!-- Хаз, здесь элемент grey-line в блоке storie с мод. underline, разве нет? -->
      <div class="storie__grey-line_underline"></div>
    </section>

    <story-container class="storie__story-container">
      <story-item
        v-for="item in stories"
        :key="item.id"
        :name="item.author"
        :text="item.title"
        @cardClick="goToStorie(card.id)"
      ></story-item>
    </story-container>
    <more-stories class="storie__more-stories">Больше статей</more-stories>
  </container>
</template>

<script>
import Container from '@/components/Container';
import StoryContainer from '@/components/StoryContainer';
import MoreStoriesBtn from '@/components/ui/MoreStoriesBtn';
import StoryItem from '@/components/StoryItem';

export default {
  components: {
    'story-container': StoryContainer,
    'more-stories': MoreStoriesBtn,
    container: Container,
    'story-item': StoryItem,
  },

  computed: {
    stories() {
      return this.$store.getters['stories/getStories'];
    },
  },

  methods: {
    clickSeti() {
      this.$store.commit('storePopup/openPopupShowSeti');
    },
  },
};
</script>

<style scoped>
.third-title {
  font-size: 15;
  display: flex;
  flex-direction: column;
  width: 680px;
}

.storie-header__text {
  font-family: 'Inter';
  font-weight: normal;
  font-size: 38px;
  line-height: 48px;
  margin: 30px auto;
}

.storie-header__text-bold {
  font-weight: bold;
}

.storie-header__subtitle-container {
  max-width: 680px;
  width: 100%;
  margin: auto auto 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.storie-header__subtitle-text {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.storie-header__share {
  grid-area: 1 / 1;
  font-size: 18px;
  line-height: 133%;
  cursor: pointer;
}

.storie-header__date {
  grid-area: 1 / 2;
  font-size: 18px;
  line-height: 133%;
}

.storie__grey-line {
  background-color: #efefef;
  width: 100%;
  height: 1px;
  margin: 0 auto;
}

.storie__grey-line_underline {
  grid-area: 2 / 1 / 2 / span 2;
  background-color: #efefef;
  width: 100%;
  height: 1px;
  margin: 30px auto 0px;
}

.storie-text {
  max-width: 780px;
  width: 100%;
  margin: 125px auto 0;
}

.storie-text__abzac {
  width: 100%;
  margin-top: 33px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 136%;
}

.storie-text__abzac_bold {
  font-weight: bold;
}

.storie-share {
  max-width: 780px;
  width: 100%;
  margin: 70px auto;
}

.storie-share__link {
  margin: 30px auto;
  padding: 0;
  text-align: center;
  font-size: 18px;
  line-height: 133%;
  cursor: pointer;
}

.storie__story-container {
  margin: 160px auto 0;
}

.storie__more-stories {
  margin: 0 0 100px;
}

@media screen and (max-width: 1280px) {
  .storie-header__img {
    max-width: 518px;
    max-height: 518px;
  }

  .storie-header {
    margin: 100px auto;
    justify-content: space-between;
  }

  .storie-header__text {
    max-width: 602px;
    font-size: 34px;
    line-height: 44px;
    margin: 30px auto 0 50px;
  }

  .storie-header__subtitle-container {
    max-width: 602px;
  }

  .storie-header__share {
    font-size: 18px;
    line-height: 24px;
  }

  .storie-header__date {
    font-size: 18px;
    line-height: 24px;
  }

  .storie-text {
    max-width: 700px;
    margin-top: 120px;
  }

  .storie-text__abzac {
    font-size: 20px;
    line-height: 28px;
    margin-top: 28px;
  }

  .storie-share {
    font-size: 18px;
    line-height: 24px;
    margin: 60px auto;
  }

  .storie__story-container {
    margin-top: 150px;
  }

  .storie__more-stories {
    margin-top: 0px;
    margin-bottom: 80px;
  }
}

@media screen and (max-width: 1024px) {
  .storie-header__img {
    max-width: 407px;
    max-height: 407px;
    margin-right: 45px;
  }

  .storie-header {
    margin: 100px auto 0;
    justify-content: space-between;
  }

  .storie-header__text {
    max-width: 477px;
    font-size: 30px;
    line-height: 38px;
    margin: 20px 0;
  }

  .storie-header__subtitle-container {
    max-width: 477px;
    margin-left: 0;
  }

  .storie-header__share {
    font-size: 16px;
    line-height: 24px;
  }

  .storie-header__date {
    font-size: 16px;
    line-height: 24px;
  }

  .storie__grey-line_underline {
    margin: 10px auto 0px;
  }

  .storie-text {
    max-width: 640px;
    margin-top: 90px;
  }

  .storie-text__abzac {
    font-size: 18px;
    line-height: 27px;
    margin-top: 30px;
  }

  .storie-share {
    margin: 46px auto;
  }

  .storie-share__link {
    font-size: 16px;
    line-height: 22px;
    margin: 24px auto;
  }

  .storie__story-container {
    margin-top: 120px;
  }

  /* наверняка поправлено уже, убрать отрицатльный маргин после маржина */
  .storie__more-stories {
    margin-top: -30px;
    margin-bottom: 70px;
  }
}

@media screen and (max-width: 768px) {
  .storie-header {
    margin: 80px auto 0;
    grid-template: 22% 60% 10% / 1fr;
    width: 100vw;
  }

  .storie-header__img {
    max-width: 55vw;
    max-height: 55vw;
    grid-row: 2 / 5;
    margin: 20px auto 0;
    align-content: center;
  }

  .storie-header__title-container {
    margin: 0 auto 0px;
    display: flex;
    flex-direction: column;
    width: 680px;
  }

  .storie-header__text {
    max-width: 650px;
    font-size: 30px;
    line-height: 38px;
    margin: 20px auto 0;
    text-align: center;
  }

  .storie-header__subtitle-container {
    max-width: 640px;
    margin: 50px auto 0;
  }

  .storie-header__subtitle-text {
    justify-content: space-between;
  }

  .storie-header__share {
    font-size: 16px;
    line-height: 24px;
  }

  .storie-header__date {
    font-size: 16px;
    line-height: 24px;
  }

  .storie__grey-line_underline {
    margin: 10px auto 0px;
  }

  .storie-text {
    max-width: 640px;
    margin-top: 141px;
  }

  .storie-text__abzac {
    font-size: 18px;
    line-height: 27px;
    margin-top: 30px;
  }

  .storie-share {
    margin: 83px auto;
  }

  .storie-share__link {
    font-size: 16px;
    line-height: 22px;
    margin: 24px auto;
  }

  .storie__story-container {
    margin-top: 120px;
  }

  /* наверняка поправлено уже, убрать отрицатльный маргин после маржина */
  .storie__more-stories {
    margin-top: -30px;
    margin-bottom: 70px;
  }
}

@media screen and (max-width: 600px) {
  .storie-header {
    margin: 50px auto 0;
    grid-template: 22% 60% 10% / 1fr;
  }

  .storie-header__img {
    max-width: 290px;
    max-height: 290px;
    grid-row: 2 / 5;
    margin: 10px 0 0;
  }

  .storie-header__title-container {
    margin: 0 0 0;
    display: flex;
    flex-direction: column;
  }

  .storie-header__text {
    max-width: 300px;
    font-size: 18px;
    line-height: 21px;
    margin: 20px 0 0;
    text-align: center;
  }

  .storie-header__subtitle-container {
    max-width: 290px;
    margin: 30px 0 0;
  }

  .storie-header__subtitle-text {
    justify-content: space-between;
  }

  .storie-header__share {
    font-size: 13px;
    line-height: 16px;
  }

  .storie-header__date {
    font-size: 13px;
    line-height: 16px;
  }

  .storie__grey-line_underline {
    margin: 10px auto 0px;
  }

  .storie-text {
    max-width: 290px;
    margin-top: 65px;
  }

  .storie-text__abzac {
    font-size: 13px;
    line-height: 16px;
    margin-top: 20px;
  }

  .storie-share {
    margin: 50px auto;
  }

  .storie-share__link {
    font-size: 13px;
    line-height: 16px;
    margin: 20px auto;
  }

  .storie__story-container {
    margin-top: 120px;
  }

  /* наверняка поправлено уже, убрать отрицатльный маргин после маржина */
  .storie__more-stories {
    margin-top: -30px;
    margin-bottom: 70px;
  }
}

.storie-header {
  display: grid;
  grid-template: 1fr 1fr/1fr 1fr;
  margin: 100px auto;
  justify-content: space-between;
  max-width: 1320px;
}

.storie-header__img {
  width: 580px;
  height: 580px;
  object-fit: cover;
  margin: 0;
  grid-row: 1 / 3;
}

.storie-header__text-block {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.storie-header__title-container {
  margin: 0 auto 0;
  display: flex;
  flex-direction: column;
  width: 680px;
}

.storie-header__text {
  font-family: 'Inter';
  font-weight: normal;
  font-size: 38px;
  line-height: 48px;
  margin: 30px auto;
}

.storie-header__text-bold {
  font-weight: bold;
}

.storie-header__subtitle-container {
  max-width: 680px;
  width: 100%;
  margin: auto auto 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.storie-header__subtitle-text {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.storie-header__share {
  grid-area: 1 / 1;
  font-size: 18px;
  line-height: 133%;
  cursor: pointer;
}

.storie-header__date {
  grid-area: 1 / 2;
  font-size: 18px;
  line-height: 133%;
}

.storie__grey-line {
  background-color: #efefef;
  width: 100%;
  height: 1px;
  margin: 0 auto;
}

.storie__grey-line_underline {
  grid-area: 2 / 1 / 2 / span 2;
  background-color: #efefef;
  width: 100%;
  height: 1px;
  margin: 30px auto 0px;
}

.storie-text {
  max-width: 780px;
  width: 100%;
  margin: 125px auto 0;
}

.storie-text__abzac {
  width: 100%;
  margin-top: 33px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 136%;
}

.storie-text__abzac_bold {
  font-weight: bold;
}

.storie-share {
  max-width: 780px;
  width: 100%;
  margin: 70px auto;
}

.storie-share__link {
  margin: 30px auto;
  padding: 0;
  text-align: center;
  font-size: 18px;
  line-height: 133%;
  cursor: pointer;
}

.storie__story-container {
  margin: 160px auto 0;
}

.storie__more-stories {
  margin: 0 0 100px;
}

@media screen and (max-width: 1280px) {
  .storie-container {
    max-width: 95%;
  }

  .storie-header__img {
    max-width: 430px;
    max-height: 430px;
  }

  .storie-header {
    margin: 100px auto;
    justify-content: space-around;
  }

  .storie-header__text {
    max-width: 450px;
    font-size: 30px;
    line-height: 40px;
    margin: 30px auto 0 50px;
  }

  .storie-header__subtitle-container {
    max-width: 602px;
    width: 60%;
    align-self: start;
  }

  .storie-header__share {
    font-size: 18px;
    line-height: 24px;
  }

  .storie-header__date {
    font-size: 18px;
    line-height: 24px;
  }

  .storie-text {
    max-width: 700px;
    margin-top: 120px;
  }

  .storie-text__abzac {
    font-size: 20px;
    line-height: 28px;
    margin-top: 28px;
  }

  .storie-share {
    font-size: 18px;
    line-height: 24px;
    margin: 60px auto;
  }

  .storie__story-container {
    margin-top: 150px;
  }

  .storie__more-stories {
    margin-top: 0px;
    margin-bottom: 80px;
  }
}

@media screen and (max-width: 1024px) {
  .storie-header__img {
    max-width: 407px;
    max-height: 407px;
    margin-right: 45px;
  }

  .storie-header {
    margin: 100px auto 0;
    justify-content: space-between;
  }

  .storie-header__text {
    max-width: 477px;
    font-size: 30px;
    line-height: 38px;
    margin: 20px 0;
  }

  .storie-header__subtitle-container {
    max-width: 477px;
    margin-left: 0;
  }

  .storie-header__share {
    font-size: 16px;
    line-height: 24px;
  }

  .storie-header__date {
    font-size: 16px;
    line-height: 24px;
  }

  .storie__grey-line_underline {
    margin: 10px auto 0px;
  }

  .storie-text {
    max-width: 640px;
    margin-top: 90px;
  }

  .storie-text__abzac {
    font-size: 18px;
    line-height: 27px;
    margin-top: 30px;
  }

  .storie-share {
    margin: 46px auto;
  }

  .storie-share__link {
    font-size: 16px;
    line-height: 22px;
    margin: 24px auto;
  }

  .storie__story-container {
    margin-top: 120px;
  }

  /* наверняка поправлено уже, убрать отрицатльный маргин после маржина */
  .storie__more-stories {
    margin-top: -30px;
    margin-bottom: 70px;
  }
}

@media screen and (max-width: 980px) {
  .storie-header {
    margin: 80px 0 0;
    grid-template: 22% 60% 10% / 80%;
    width: 600px;
    justify-content: center;
  }

  @media screen and (max-width: 700px) {
    .storie-header {
      width: 100%;
      margin-right: 0;
      margin-left: 0;
    }
  }

  .storie-header__img {
    max-width: 55vw;
    max-height: 55vw;
    grid-row: 2 / 5;
    margin: 20px auto 0;
    align-content: center;
  }

  .storie-header__title-container {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .storie-header__text {
    max-width: 700px;
    padding: 0 10px;
    font-size: 30px;
    line-height: 38px;
    margin: 20px 0 0;
    text-align: center;
  }

  .storie-header__subtitle-container {
    max-width: 80vw;
    margin: 50px auto 0;
  }

  .storie-header__subtitle-text {
    justify-content: space-between;
  }

  .storie-header__share {
    font-size: 16px;
    line-height: 24px;
  }

  .storie-header__date {
    font-size: 16px;
    line-height: 24px;
  }

  .storie__grey-line_underline {
    margin: 10px auto 0px;
  }

  .storie-text {
    max-width: 640px;
    margin-top: 141px;
  }

  .storie-text__abzac {
    font-size: 18px;
    line-height: 27px;
    margin-top: 30px;
  }

  .storie-share {
    margin: 83px auto;
  }

  .storie-share__link {
    font-size: 16px;
    line-height: 22px;
    margin: 24px auto;
  }

  .storie__story-container {
    margin-top: 120px;
  }

  /* наверняка поправлено уже, убрать отрицатльный маргин после маржина */
  .storie__more-stories {
    margin-top: -30px;
    margin-bottom: 70px;
  }
}

@media screen and (max-width: 600px) {
  .storie-header {
    margin: 50px auto 0;
    grid-template: 22% 60% 10% / 1fr;
  }

  .storie-header__img {
    max-width: 290px;
    max-height: 290px;
    grid-row: 2 / 5;
    margin: 10px 0 0;
  }

  .storie-header__title-container {
    margin: 0 0 0;
    display: flex;
    flex-direction: column;
  }

  .storie-header__text {
    max-width: 300px;
    font-size: 18px;
    line-height: 21px;
    margin: 20px 0 0;
    text-align: center;
  }

  .storie-header__subtitle-container {
    width: 90vw;
    margin: 30px auto 0;
  }

  .storie-header__subtitle-text {
    justify-content: space-between;
  }

  .storie-header__share {
    font-size: 13px;
    line-height: 16px;
  }

  .storie-header__date {
    font-size: 13px;
    line-height: 16px;
  }

  .storie__grey-line_underline {
    margin: 10px auto 0px;
  }

  .storie-text {
    max-width: 290px;
    margin-top: 65px;
  }

  .storie-text__abzac {
    font-size: 13px;
    line-height: 16px;
    margin-top: 20px;
  }

  .storie-share {
    margin: 50px auto;
  }

  .storie-share__link {
    font-size: 13px;
    line-height: 16px;
    margin: 20px auto;
  }

  .storie__story-container {
    margin-top: 120px;
  }

  /* наверняка поправлено уже, убрать отрицатльный маргин после маржина */
  .storie__more-stories {
    margin-top: -30px;
    margin-bottom: 70px;
  }
}
</style>
