<template>
  <div class="container">
    <main-title />
    <section-you-stori />
  </div>
</template>

<script>
import MainTitle from '@/components/MainTitle';
import SectionYouStori from '@/components/SectionYouStori';

export default {
  components: {
    'main-title': MainTitle,
    'section-you-stori': SectionYouStori,
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
