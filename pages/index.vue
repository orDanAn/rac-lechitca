<template>
  <div class="container">
    <main-title />
    <section-video />
    <section-stories />
    <section-instagram />
    <section-you-story @clicBtnYouStor="popupOpen" />
    <section-statics />
    <section-rac-lechitca />
    <popup v-if="popupShow">
      <popup-conteiner
        @clickBtnClose="popupClose"
        :title="title"
        :question="question"
        :explanation="explanation"
      />
    </popup>
  </div>
</template>

<script>
import MainTitle from '@/components/MainTitle';
import Video from '@/components/Video';
import SectionStories from '@/components/SectionStories';
import SectionYouStory from '@/components/SectionYouStory';
import SectionInstagram from '@/components/SectionInstagram';
import SectionStatics from '@/components/SectionStatics';
import SectionRacLechitca from '@/components/SectionRacLechitca';
import Popup from '@/components/Popup';
import Content from '@/components/Content';

export default {
  components: {
    'main-title': MainTitle,
    'section-video': Video,
    'section-stories': SectionStories,
    'section-instagram': SectionInstagram,
    'section-you-story': SectionYouStory,
    'section-statics': SectionStatics,
    'section-rac-lechitca': SectionRacLechitca,
    popup: Popup,
    'popup-conteiner': Content,
  },

  methods: {
    popupOpen() {
      this.popupShow = true;
    },

    popupClose() {
      this.popupShow = false;
    },
  },

  data() {
    return {
      popupShow: false,
      title: 'Шаг 2 из 12',
      question: 'Было ли у вас онкологическое заболевание?',
      explanation:
        ' Если да – расскажите, пожалуйста, кратко, какой диагноз и текущий статус. Если нет — приглашаем Вас поделиться своей историей неизлечимых привычек в Инстаграм с хештегами #раклечится и #этонелечится.',
    };
  },
};
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.story-item {
  width: 300px;
  margin-bottom: 70px;
}

@media screen and (max-width: 1350px) {
  .story-item {
    width: 265px;
  }
}

.story-item__name {
  margin-top: 16px;
  margin-bottom: 14px;
  font-weight: 600;
  font-size: 22px;
  line-height: 22px;
}

.story-item__text {
  width: 83%;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  color: #666666;
}
</style>
