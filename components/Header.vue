<template>
  <header class="header">
    <mobile-menu v-if="MobileMenuIsOpen" />
    <container class="header__container">
      <nuxt-link to="/" class="header__logo">
        {{ blocks.find(item => item.block === 'header').title }}
      </nuxt-link>
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
      <icon-menu class="header__icon-menu"></icon-menu>
    </container>
  </header>
</template>

<script>
import MainMenu from '@/components/MainMenu';
import MobileMenu from '@/components/MobileMenu';
import ButtonOpenPopup from '@/components/ui/ButtonOpenPopup';
import Container from '@/components/Container';
import IconMenu from '@/components/ui/IconMenu';

export default {
  components: {
    'main-menu': MainMenu,
    'button-open-popup': ButtonOpenPopup,
    container: Container,
    'icon-menu': IconMenu,
    'mobile-menu': MobileMenu,
  },
  computed: {
    MobileMenuIsOpen() {
      return this.$store.getters['mobile-menu/getMenuState'];
    },
    blocks() {
      return this.$store.getters['storeBlocks/getBlocks'];
    },
  },
};
</script>

<style scoped>
.header__container {
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

.header__logo {
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  max-width: 340px;
  color: black;
  text-decoration: none;
  transition: opacity 0.3s ease-in-out;
}
.header__logo:hover {
  opacity: 0.8;
}
.header__button {
  font-size: 18px;
  line-height: 24px;
  padding-left: 40px;
}
.header__icon-menu {
  display: none;
}
@media screen and (max-width: 1280px) {
  .header__container {
    max-width: 1280px;
    min-height: 72px;
    padding: 0 50px;
  }
  .header__logo {
    font-size: 16px;
    line-height: 18px;
  }
  .header__menu {
    font-size: 16px;
  }
  .header__button {
    font-size: 16px;
  }
}
@media screen and (max-width: 1024px) {
  .header__container {
    max-width: 1024px;
  }
}
@media screen and (max-width: 775px) {
  .header__container {
    max-width: 768px;
  }
  .header__logo {
    line-height: 18px;
  }
  .header__block-menu {
    display: none;
  }
  .header__icon-menu {
    display: block;
  }
}
@media screen and (max-width: 500px) {
  .header__container {
    padding: 0 15px;
  }
}

@media screen and (max-width: 400px) {
  .header__container {
    max-width: 320px;
    min-height: 64px;
  }
  .header__logo {
    font-size: 12px;
    line-height: 14px;
  }
  .header__icon-menu {
    height: 22px;
  }
  .header__menu /deep/ .menu__link {
    font-size: 13px;
    line-height: 16px;
  }
  .header__button {
    font-size: 13px;
    line-height: 16px;
  }
}
</style>
