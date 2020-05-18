<template>
  <header class="header">
    <p class="header__text">
      Проект Благотворительного Фонда Константина Хабенского
    </p>
    <div class="header__block-menu">
      <main-menu
        class="header__menu"
        @clicBtnOpenPopap="$emit('clicBtnOpenPopap')"
      />
      <button-open-popup
        class="header__button"
        @clicBtnOpenPopap="$emit('clicBtnOpenPopap')"
        >Рассказать историю</button-open-popup
      >
    </div>
  </header>
</template>

<script>
import MainMenu from '@/components/MainMenu';
import ButtonOpenPopup from '@/components/ui/ButtonOpenPopup';
export default {
  components: {
    'main-menu': MainMenu,
    'button-open-popup': ButtonOpenPopup,
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
.header__block-menu {
  display: flex;
}

.header__text {
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  max-width: 340px;
}
.header__button {
  font-size: 18px;
  line-height: 24px;
  padding-left: 40px;
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
  .header__button {
    font-size: 16px;
  }
}
</style>
