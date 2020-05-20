<template>
  <div class="container-main">
    <main-title />
    <section-video />
    <section-stories>
      <baner>И В ОТЛИЧИЕ ОТ РАКА</baner>
      <section-subtitle class="stories__subtitle"
        >Истории неизлечимых привычек</section-subtitle
      >
      <story-container class="story-container">
        <story-item
          v-for="item in stories"
          :key="item.id"
          :name="item.name"
          :text="item.text"
        ></story-item>
      </story-container>
      <more-stories>Больше статей</more-stories>
    </section-stories>
    <section-instagram />
    <section-you-story />
    <section-statics />
    <section-rac-lechitca />
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
import Baner from '@/components/Baner';
import Title_section from '@/components/Title_section';
import MoreStoriesBtn from '@/components/ui/MoreStoriesBtn';
import StoryContainer from '@/components/StoryContainer';
import StoryItem from '@/components/StoryItem';

export default {
  components: {
    'main-title': MainTitle,
    'section-video': Video,
    'section-stories': SectionStories,
    'section-instagram': SectionInstagram,
    'section-you-story': SectionYouStory,
    'section-statics': SectionStatics,
    'section-rac-lechitca': SectionRacLechitca,
    baner: Baner,
    'section-subtitle': Title_section,
    'more-stories': MoreStoriesBtn,
    'story-item': StoryItem,
    'story-container': StoryContainer,
  },

  computed: {},

  methods: {},

  computed: {
    stories() {
      return this.$store.getters['stories/getStories'];
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
.container-main {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.stories__subtitle {
  margin-top: 100px;
  margin-bottom: 70px;
}

.story-container {
  margin-top: 70px;
}

@media screen and (max-width: 1023px) {
  .stories__subtitle {
    width: 380px;
    margin: 0 auto;
    margin-top: 80px;
    margin-bottom: 46px;
  }
}

@media screen and (max-width: 950px) {
  .stories__subtitle {
    width: 380px;
    margin: 0 auto;
    margin-top: 80px;
    margin-bottom: 60px;
  }
}

@media screen and (max-width: 768px) {
  .stories__subtitle {
    width: 380px;
    margin: 0;
    margin-top: 80px;
    margin-bottom: 60px;
  }
}

@media screen and (max-width: 600px) {
  .stories__subtitle {
    width: 380px;
    margin-top: 50px;
    margin-bottom: 40px;
  }
}
</style>
