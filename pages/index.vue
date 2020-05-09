<template>
  <div class="container">
    <main-title />
    <section-video />
  </div>
</template>

<script>
import MainTitle from '@/components/MainTitle';
import Video from '@/components/Video';
export default {
  components: {
    'section-video': Video,
    'main-title': MainTitle,
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
</style>
