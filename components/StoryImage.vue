<template>
  <div>
    <img :src="link" alt="" class="story-item__image" />
  </div>
</template>

<script>
export default {
  props: ['link'],
};
</script>

<style scoped>
.story-item__image {
  width: 100%;
  margin-bottom: 20px;
}
</style>
