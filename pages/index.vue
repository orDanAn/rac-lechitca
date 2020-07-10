<template>
  <div class="container-main">
    <main-title @btnMainTaitle="scroll" />
    <section-video ref="nextSection" />
    <section-stories>
      <baner>{{ blocks.find(item => item.block === 'note-1').title }}</baner>
      <section-subtitle class="stories__subtitle"
        >Истории неизлечимых привычек</section-subtitle
      >
      <story-container class="story-container">
        <story-item
          v-for="item in stories"
          :key="item.id"
          :name="item.author"
          :text="item.title"
          :link="`${apiUrl}${item.ImageUrl[0].url}`"
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

  methods: {
    scroll() {
      this.$refs.nextSection.$el.scrollIntoView({
        behavior: 'smooth',
      });
    },
    data() {
      return {
        apiUrl: process.env.apiUrl,
      };
    },
  },

  computed: {
    stories() {
      if (process.browser) {
        if (window.innerWidth <= 950 && window.innerWidth > 768) {
          return this.$store.getters['stories/getStories'].filter(
            item => item.id < 8
          );
        }
        return this.$store.getters['stories/getStories'].filter(
          item => item.id <= 9
        );
      }
    },
    blocks() {
      return this.$store.getters['storeBlocks/getBlocks'];
    },
    videos() {
      return this.$store.getters['storeVideo/getVideo'];
    },
  },

  //beforeMount() {
  // this.$store.dispatch('storeBlocks/fetchBlocks')
  // this.$store.dispatch('stories/fetchStories')
  //},

  //async fetch({store}) {
  //await store.dispatch('stories/fetchStories')
  //await store.dispatch('storeBlocks/fetchBlocks')
  //}
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
    text-align: center;
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
    margin: 0 auto;
    margin-top: 80px;
    margin-bottom: 60px;
  }
}

@media screen and (max-width: 600px) {
  .stories__subtitle {
    width: 380px;
    margin: 0;
    text-align: left;
    margin-top: 50px;
    margin-bottom: 40px;
  }
}
</style>
