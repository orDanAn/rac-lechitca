<template>
  <nuxt-link to="/stories/1">
    <div class="story-item">
      <story-image :src="link" />
      <p class="story-item__name">{{ name }}</p>
      <p class="story-item__text" v-html="text"></p>
    </div>
  </nuxt-link>
</template>

<script>
import StoryImage from '@/components/StoryImage';
export default {
  components: {
    'story-image': StoryImage,
  },
  props: ['name', 'text', 'link'],
};
</script>

<style scoped>
a {
  text-decoration: none;
}
.story-item {
  width: 300px;
  margin-bottom: 70px;
}

.story-item__name {
  margin-bottom: 14px;
  font-weight: 600;
  font-size: 22px;
  line-height: 22px;
}

.story-item__text {
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  color: #666666;
  max-width: 250px;
}

@media screen and (max-width: 1350px) {
  .story-item {
    width: 265px;
  }
}

@media screen and (max-width: 1200px) {
  .story-item {
    width: 225px;
  }
}

@media screen and (max-width: 1024px) {
  .story-item {
    width: 208px;
  }

  .story-item__name {
    margin-bottom: 14px;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
  }

  .story-item__text {
    font-weight: normal;
    font-size: 13px;
    line-height: 16px;
    color: #666666;
    max-width: 190px;
  }
}

@media screen and (max-width: 1023px) {
  .story-item {
    width: 250px;
  }
}

@media screen and (max-width: 950px) {
  .story-item {
    width: 216px;
  }
}

@media screen and (max-width: 768px) {
  .story-item {
    width: 240px;
  }
}

@media screen and (max-width: 600px) {
  .story-item {
    width: 350px;
  }
}

@media screen and (max-width: 500px) {
  .story-item {
    width: 320px;
  }
}

@media screen and (max-width: 430px) {
  .story-item {
    width: 290px;
  }
}
</style>
