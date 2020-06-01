<template>
  <container class="error-page">
    <div class="error-page__block">
      <p class="error-page__title">404</p>
      <p class="error-page__text">
        Страница не найдена.
      </p>
      <nuxt-link to="/" class="error-page__link">
        Перейти на главную.</nuxt-link
      >
    </div>
  </container>
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
.error-page {
  max-width: 1440px;
  min-height: 900px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.error-page__block {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.error-page__title {
  font-style: normal;
  font-weight: 100;
  font-size: 144px;
  line-height: 174px;
}
.error-page__text {
  margin-top: 10px;
  font-style: normal;
  font-weight: 100;
  font-size: 18px;
  line-height: 24px;
}
.error-page__link {
  color: black;
  text-align: center;
  font-style: normal;
  font-weight: 100;
  font-size: 18px;
  line-height: 24px;
  text-decoration: none;
  border-bottom: 1.5px solid black;
  transition: opacity 0.3s ease-in-out;
}
.error-page__link:hover {
  opacity: 0.8;
}
@media screen and (max-width: 1280px) {
  .error-page {
    max-width: 1280px;
    min-height: 700px;
  }
  .error-page__text {
    font-size: 16px;
    line-height: 20px;
  }
  .error-page__link {
    font-size: 16px;
    line-height: 20px;
  }
}
@media screen and (max-width: 1024px) {
  .error-page {
    max-width: 1024px;
  }
}
@media screen and (max-width: 768px) {
  .error-page {
    max-width: 768px;
  }
}
@media screen and (max-width: 500px) {
  .error-page__title {
    font-size: 72px;
    line-height: 87px;
  }
  .error-page__text {
    font-size: 13px;
    line-height: 16px;
  }
  .error-page__link {
    font-size: 13px;
    line-height: 16px;
  }
}
</style>
