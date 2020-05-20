<template>
  <section-stories>
    <section-subtitle class="stories__subtitle"
      >Истории неизлечимых привычек</section-subtitle
    >
    <div class="container">
      <input-search></input-search>
      <button-search class="button-search">Поиск</button-search>
    </div>
    <story-container>
      <story-item
        v-for="item in storyRender"
        :key="item.id"
        :name="item.name"
        :text="item.text"
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
      return stories.stories.filter(
        (item, index) =>
          index >= this.startIndex &&
          index <= this.startIndex + this.ItemsPerPage - 1
      );
    },
  },
  methods: {
    changeStartIndex(item) {
      this.startIndex = (item - 1) * this.ItemsPerPage;
    },
  },
  data() {
    return {
      ItemsPerPage: 4,
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
  margin-left: 15px;
}

.section-container {
  width: 92%;
  max-width: 1320px;
  margin: 0 auto;
}

.container {
  display: flex;
  justify-content: space-between;
}

.button-search {
  padding: 0;
  margin: 0;
  width: 226px;
}
</style>
