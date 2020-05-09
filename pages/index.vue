<template>
  <body>
    <div class="container">
      <main-title />
    </div>
    <project-footer />
  </body>
</template>

<script>
import MainTitle from '@/components/MainTitle';
import Footer from '@/components/Footer';

export default {
  components: {
    'main-title': MainTitle,
    'project-footer': Footer,
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
