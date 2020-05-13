<template>
  <header class="header">
    <p class="header__text">
      Проект Благотворительного Фонда Константина Хабенского
    </p>
    <menu-header @clicBtnOpenPopap="$emit('clicBtnOpenPopap')" />
  </header>
</template>

<script>
import MenuHeader from '@/components/MenuHeader';
export default {
  components: {
    'menu-header': MenuHeader,
  },
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  min-height: 76px;
  max-width: 1440px;
  padding: 0 60px;
}
.header__text {
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  max-width: 340px;
}

@media screen and (max-width: 1280px) {
  .header {
    max-width: 1280px;
    min-height: 72px;
    padding: 0 50px;
  }
  .header__text {
    font-size: 16px;
    line-height: 18px;
  }
  .header__link {
    font-size: 16px;
  }
}
</style>
