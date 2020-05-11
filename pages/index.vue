<template>
  <div class="container">
    <main-title />
    <section-video />
    <section-stories />
    <section-instagram />
    <section-you-stori />
    <section-statics />
  </div>
</template>

<script>
import MainTitle from '@/components/MainTitle';
import Video from '@/components/Video';
import SectionStories from '@/components/SectionStories';

import SectionYouStori from '@/components/SectionYouStori';
import SectionInstagram from '@/components/SectionInstagram';
import SectionStatics from '@/components/SectionStatics';

export default {
  components: {
    'main-title': MainTitle,
    'section-video': Video,
    'section-stories': SectionStories,

    'section-instagram': SectionInstagram,
    'section-you-stori': SectionYouStori,
    'section-statics': SectionStatics,
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
