<template>
  <div class="container">
    <main-title />
  </div>
</template>

<script>
import MainTitle from '@/components/MainTitle';

export default {
  components: {
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
