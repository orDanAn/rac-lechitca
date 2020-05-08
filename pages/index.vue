<template>
  <div class="container">
    <main-title />

    <section class="stories">
      <stories-rectangle></stories-rectangle>
      <section-subtitle />
      <div class="stories__wrap">
        <stories-item />
        <stories-item />
        <stories-item />
        <stories-item />
        <stories-item />
        <stories-item />
        <stories-item />
        <stories-item />
      </div>
      <button class="stories__button">Больше статей</button>
    </section>
  </div>
</template>

<script>
import MainTitle from '@/components/MainTitle';
import Rectangle from '@/components/Rectangle';
import SectionSubtitle from '@/components/SectionSubtitle';
import StoriesItem from '@/components/StoriesItem';

export default {
  components: {
    'main-title': MainTitle,
    'stories-rectangle': Rectangle,
    'section-subtitle': SectionSubtitle,
    'stories-item': StoriesItem,
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

.stories {
  width: 92%;
}

.stories__wrap {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.stories__button {
  display: block;
  border: none;
  background-color: transparent;
  width: 100%;
  text-align: center;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
}
</style>
