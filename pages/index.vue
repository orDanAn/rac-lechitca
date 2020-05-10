<template>
  <div class="container">
    <main-title />
    <section-video />
    <section-stories>
      <stories-wrap>
        <div v-for="item in stories" :key="item.id" class="story-item">
          <story-image />
          <p class="story-item__name">{{ item.name }}</p>
          <p class="story-item__text">
            {{ item.text }}
          </p>
        </div>
      </stories-wrap>
      <more-stories>Больше статей</more-stories>
    </section-stories>
    <section-instagram />
    <section-statics />
  </div>
</template>

<script>
import MainTitle from '@/components/MainTitle';
import Video from '@/components/Video';
import SectionStories from '@/components/SectionStories';
import StoriesWrap from '@/components/StoriesWrap';
import StoryImage from '@/components/StoryImage';
import MoreStoriesBtn from '@/components/MoreStoriesBtn';
import SectionInstagram from '@/components/SectionInstagram';
import SectionStatics from '@/components/SectionStatics';

export default {
  components: {
    'section-video': Video,
    'main-title': MainTitle,
    'section-stories': SectionStories,
    'stories-wrap': StoriesWrap,
    'story-image': StoryImage,
    'more-stories': MoreStoriesBtn,
    'section-instagram': SectionInstagram,
    'section-statics': SectionStatics,
  },
  data() {
    return {
      stories: [
        {
          id: 1,
          name: 'Владимир Тен',
          text:
            'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
        },
        {
          id: 2,
          name: 'Владимир Познер',
          text: 'Я боюсь акул — и, в отличии от рака, это не лечится.',
        },
        {
          id: 3,
          name: 'Владимир Тен',
          text:
            'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
        },
        {
          id: 4,
          name: 'Владимир Познер',
          text: 'Я боюсь акул — и, в отличии от рака, это не лечится.',
        },
        {
          id: 5,
          name: 'Владимир Тен',
          text:
            'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
        },
        {
          id: 6,
          name: 'Владимир Познер',
          text: 'Я боюсь акул — и, в отличии от рака, это не лечится.',
        },
        {
          id: 7,
          name: 'Владимир Тен',
          text:
            'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
        },
        {
          id: 8,
          name: 'Владимир Познер',
          text: 'Я боюсь акул — и, в отличии от рака, это не лечится.',
        },
      ],
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
