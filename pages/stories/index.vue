<template>
  <section-stories>
    <section-subtitle class="stories__subtitle"
      >Истории неизлечимых привычек</section-subtitle
    >
    <form class="container">
      <input-search></input-search>
      <button-search class="button-search">Поиск</button-search>
    </form>
    <story-container>
      <story-item
        v-for="item in storyRender"
        :key="item.id"
        :name="item.author"
        :text="item.title"
      ></story-item>
    </story-container>
    <pagination
      :totalItem="this.$store.state.stories.stories.length"
      :ItemsPerPage="ItemsPerPage"
      @onPageChanged="changeStartIndex"
    />
  </section-stories>
</template>

<script>
import Pagination from '@/components/Pagination';
import StoryItem from '@/components/StoryItem';
import StoryImage from '@/components/StoryImage';
import SectionStories from '@/components/SectionStories';
import StoryContainer from '@/components/StoryContainer';
import Title_section from '@/components/Title_section';
import InputSearchStory from '@/components/ui/InputSearchStory';
import ButtonSmall from '@/components/ui/ButtonSmall';
import Container from '@/components/Container';

export default {
  components: {
    pagination: Pagination,
    'story-image': StoryImage,
    'section-stories': SectionStories,
    'story-item': StoryItem,
    'story-container': StoryContainer,
    'section-subtitle': Title_section,
    'input-search': InputSearchStory,
    'button-search': ButtonSmall,
    container: Container,
  },
  computed: {
    storyRender() {
      const { stories } = this.$store.state;
      if (process.browser) {
        if (window.innerWidth <= 950 && window.innerWidth > 768) {
          this.ItemsPerPage = 12;
          return stories.stories.filter(
            (item, index) =>
              index >= this.startIndex &&
              index <= this.startIndex + this.ItemsPerPage - 1
          );
        }
        return stories.stories.filter(
          (item, index) =>
            index >= this.startIndex &&
            index <= this.startIndex + this.ItemsPerPage - 1
        );
      }
    },
  },
  methods: {
    changeStartIndex(item) {
      this.startIndex = (item - 1) * this.ItemsPerPage;
    },
    previousPage() {
      this.startIndex = (this.startIndex - 1) * thix.ItemsPerPage;
      console.log(startIndex);
    },
  },
  data() {
    return {
      ItemsPerPage: 16,
      startIndex: 0,
    };
  },
};
</script>

<style scoped>
.second-title {
  font-size: 35px;
  display: flex;
  justify-content: center;
}
.div-a {
  font-size: 15px;
  display: flex;
  justify-content: center;
}

a {
  cursor: pointer;
  color: black;
  text-decoration: none;
}

.section-container {
  width: 92%;
  max-width: 1320px;
  margin: 0 auto;
}

.container {
  display: flex;
  justify-content: space-between;
  padding: 0;
}

.button-search {
  padding: 0;
  margin: 0;
  width: 226px;
  height: 52px;
  margin-left: 20px;
}
@media (min-width: 1280px) and (max-width: 1439px) {
  .button-search {
    width: 226px;
    height: 48px;
  }
}
@media (min-width: 1024px) and (max-width: 1279px) {
  .button-search {
    width: 226px;
    height: 48px;
  }
}
@media (min-width: 768px) and (max-width: 1023px) {
  .button-search {
    width: 208px;
    height: 46px;
  }
}
@media (min-width: 320px) and (max-width: 767px) {
  .button-search {
    width: 46px;
    height: 46px;
    margin-left: 6px;
  }
}
</style>
