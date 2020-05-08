<template>
  <div class="container">
    <h1 class="title">
      Main Page(Главная)
    </h1>
    <a href="/about">о проекте</a>
    <a href="/stories">истории</a>

    <section-video />
  </div>
</template>

<script>
import Video from '@/components/Video';
export default {
  components: {
    'section-video': Video,
  },
};
</script>

<style>
.title {
  font-size: 45px;
  display: flex;
  justify-content: center;
}
a {
  cursor: pointer;
  color: black;
  text-decoration: none;
  margin-left: 15px;
}
</style>
