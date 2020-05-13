<template>
  <section class="stories">
    <baner>И В ОТЛИЧИЕ ОТ РАКА</baner>
    <section-subtitle class="stories__subtitle"
      >Истории неизлечимых привычек</section-subtitle
    >
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
  </section>
</template>

<script>
import Baner from '@/components/Baner';
import Title_section from '@/components/Title_section';
import StoriesWrap from '@/components/StoriesWrap';
import StoryImage from '@/components/StoryImage';
import MoreStoriesBtn from '@/components/ui/MoreStoriesBtn';

export default {
  components: {
    baner: Baner,
    'section-subtitle': Title_section,
    'stories-wrap': StoriesWrap,
    'story-image': StoryImage,
    'more-stories': MoreStoriesBtn,
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

<style scoped>
.stories {
  width: 92%;
  max-width: 1320px;
}

.stories__subtitle {
  margin-top: 100px;
}

@media screen and (max-width: 1280px) {
  .stories__subtitle {
    margin-top: 90px;
  }
}
</style>
