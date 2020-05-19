<template>
  <section class="stories">
    <baner>И В ОТЛИЧИЕ ОТ РАКА</baner>
    <section-subtitle class="stories__subtitle"
      >Истории неизлечимых привычек</section-subtitle
    >
    <stories-wrap>
      <div v-for="item in itemsToLoop" :key="item.id" class="story-item">
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
  computed: {
    itemsToLoop() {
      if (process.browser) {
        console.log(window.innerWidth);
        if (window.innerWidth <= 1145) {
          return this.stories.filter((item, index) => index < 9);
        } else {
          return this.stories.filter((item, index) => index < 8);
        }
      }
    },
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
        {
          id: 9,
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

.story-item {
  width: 300px;
  margin-bottom: 70px;
}

.story-item__name {
  font-weight: 600;
  font-size: 22px;
  line-height: 22px;
}

.story-item__text {
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
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

@media screen and (max-width: 1280px) {
  .stories__subtitle {
    margin-top: 90px;
  }
}

@media screen and (max-width: 1200px) {
  .story-item {
    width: 225px;
    margin-bottom: 60px;
  }

  .story-item__name {
    font-size: 18px;
    line-height: 22px;
  }

  .story-item__text {
    font-size: 13px;
    line-height: 16px;
  }
}

@media screen and (max-width: 1024px) {
  .story-item {
    width: 208px;
  }
}

@media screen and (max-width: 940px) {
  .story-item {
    width: 218px;
    margin-bottom: 40px;
  }

  .stories__subtitle {
    text-align: center;
    width: 380px;
    margin: 0 auto;
    margin-top: 80px;
  }
}

@media screen and (max-width: 768px) {
  .story-item {
    width: 216px;
  }

  .stories__subtitle {
    width: 290px;
    margin-top: 80px;
  }
}

@media screen and (max-width: 730px) {
  .story-item {
    width: 235px;
  }
}

@media screen and (max-width: 535px) {
  .story-item {
    width: 290px;
  }
}

@media screen and (max-width: 378px) {
  .stories__subtitle {
    text-align: left;
    margin-top: 50px;
  }
}
</style>
