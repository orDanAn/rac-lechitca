<template>
  <div class="stories-item">
    <img src="../static/Image.png" alt="" class="stories-item__image" />
    <p class="stories-item__name">Владимир Тен</p>
    <p class="stories-item__text">
      Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.stories-item {
  width: 300px;
  margin-bottom: 70px;
}

.stories-item__image {
  width: 100%;
  margin-bottom: 20px;
}

.stories-item__name {
  margin-bottom: 14px;
}

@media screen and (max-width: 1350px) {
  .stories-item {
    width: 265px;
  }
}
</style>
