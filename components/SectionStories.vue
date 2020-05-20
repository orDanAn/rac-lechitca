<template>
  <section class="stories">
    <container>
      <slot></slot>
    </container>
  </section>
</template>

<script>
import Container from '@/components/Container';

export default {
  components: {
    container: Container,
  },
};
</script>

<style scoped>
.stories {
  width: 92%;
  max-width: 1320px;
  margin: 0 auto;
}

@media screen and (max-width: 1280px) {
  .stories {
    width: 100%;
  }
}
</style>
