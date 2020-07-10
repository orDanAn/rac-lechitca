<template>
  <nav class="mobile-menu">
    <ul class="mobile-menu__list">
      <li class="mobile-menu__list-elem">
        <nuxt-link to="/" class="mobile-menu__link">Главная</nuxt-link>
      </li>
      <li class="mobile-menu__list-elem">
        <nuxt-link to="/stories" class="mobile-menu__link">Истории</nuxt-link>
      </li>
    </ul>
    <button-open-popup class="mobile-menu__button" @clicBtnOpenPopap="popupOpen"
      >Рассказать историю</button-open-popup
    >
  </nav>
</template>

<script>
import ButtonOpenPopup from '@/components/ui/ButtonOpenPopup';
export default {
  components: {
    'button-open-popup': ButtonOpenPopup,
  },
  methods: {
    popupOpen() {
      this.$store.commit('storePopup/openPopup');
    },
  },
};
</script>

<style scoped>
.mobile-menu {
  display: none;
}
.mobile-menu__list {
  display: flex;
  list-style-type: none;
  padding: 0;
}
.mobile-menu__link {
  font-style: normal;
  font-weight: 100;
  font-size: 16px;
  line-height: 24px;
  color: black;
  text-decoration: none;
}
.mobile-menu__button {
  font-style: normal;
  font-weight: 100;
  font-size: 16px;
  line-height: 24px;
  padding-left: 30px;
}
.mobile-menu__list-elem {
  padding-left: 30px;
}
.mobile-menu__list-elem:first-of-type {
  padding-left: 0;
}
@media screen and (max-width: 768px) {
  .mobile-menu {
    display: flex;
    padding: 18px 50px 36px;
  }
}
@media screen and (max-width: 400px) {
  .mobile-menu {
    display: block;
    padding: 18px 15px 36px;
  }
  .mobile-menu__list {
    display: block;
  }
  .mobile-menu__link {
    font-size: 13px;
    line-height: 16px;
  }
  .mobile-menu__button {
    font-size: 13px;
    line-height: 16px;
  }
  .mobile-menu__list-elem {
    padding: 0 0 18px;
  }
  .mobile-menu__button {
    padding: 0;
  }
}
</style>
