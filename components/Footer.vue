<template>
  <footer class="footer">
    <div class="footer__info">
      <p class="footer__text">
        Спасибо всем, кто помог состояться этому проекту
      </p>
      <menu-footer />
      <social-menu />
    </div>

    <div class="footer__description">
      <p class="footer__description-text">Рак Лечится {{ date }}</p>
      <p class="footer__description-text">
        Сделано студентами Яндекс Практикум
      </p>
    </div>
  </footer>
</template>

<script>
import MenuFooter from '@/components/MenuFooter';
import SocialMenuFooter from '@/components/SocialMenuFooter';

const currenData = new Date();

export default {
  components: {
    'menu-footer': MenuFooter,
    'social-menu': SocialMenuFooter,
  },
  data() {
    return {
      date: currenData.getFullYear(),
    };
  },
};
</script>

<style scoped>
.footer {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 1440px;
  margin: 0 auto;
  padding: 60px 60px;
  min-height: 356px;
}
.footer__info {
  display: flex;
  justify-content: space-between;
}
.footer__text {
  max-width: 340px;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
}
.footer__description {
  display: flex;
  justify-content: space-between;
}
.footer__description-text {
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 18px;
  color: #898989;
}
@media screen and (max-width: 1280px) {
  .footer {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 1280px;
    margin: 0 auto;
    padding: 50px 50px;
    min-height: 316px;
  }
  .footer__text {
    font-size: 28px;
    line-height: 32px;
    max-width: 330px;
  }
  .footer__description-text {
    font-size: 16px;
  }
}
</style>
