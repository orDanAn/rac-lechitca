<template>
  <section class="stories">
    <rectangle></rectangle>
    <section-subtitle></section-subtitle>
    <slot></slot>
  </section>
</template>

<script>
import Rectangle from '@/components/Rectangle';
import SectionSubtitle from '@/components/SectionSubtitle';

export default {
  components: {
    rectangle: Rectangle,
    'section-subtitle': SectionSubtitle,
  },
};
</script>

<style scoped>
.stories {
  width: 92%;
}
</style>
