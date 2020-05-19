<template>
  <footer class="footer">
    <container class="footer__container">
      <div class="footer__info">
        <p class="footer__text">
          Спасибо всем, кто помог состояться этому проекту
        </p>
        <main-menu class="footer__menu" />
        <social-list />
      </div>

      <div class="footer__description">
        <p class="footer__description-text">Рак Лечится {{ date }}</p>
        <p class="footer__description-text">
          Сделано студентами
          <a
            class="footer__description-text"
            href="https://praktikum.yandex.ru/"
            target="_blank"
            rel="noopener noreferrer"
            >Яндекс Практикум</a
          >
        </p>
      </div>
    </container>
  </footer>
</template>

<script>
import MainMenu from '@/components/MainMenu';
import Container from '@/components/Container';
import SocialListFooter from '@/components/SocialListFooter';

const currenData = new Date();

export default {
  components: {
    'main-menu': MainMenu,
    'social-list': SocialListFooter,
    container: Container,
  },
  data() {
    return {
      date: currenData.getFullYear(),
    };
  },
};
</script>

<style scoped>
.footer__container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 1440px;
  margin: 0 auto;
  padding: 60px;
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
  text-decoration: none;
}
.footer__menu {
  margin-right: 230px;
}
@media screen and (max-width: 1280px) {
  .footer__container {
    max-width: 1280px;
    padding: 50px;
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
@media screen and (max-width: 1024px) {
  .footer__container {
    max-width: 1024px;
    min-height: 292px;
  }
  .footer__text {
    max-width: 288px;
    font-size: 24px;
    line-height: 28px;
  }
}
@media screen and (max-width: 1000px) {
  .footer__menu {
    margin-right: 0;
  }
}
@media screen and (max-width: 800px) {
  .footer__container {
    max-width: 768px;
  }
  .footer__text {
    max-width: 250px;
  }
  .footer__menu /deep/ .menu__list {
    display: block;
  }

  .footer__menu /deep/ .menu__list-elem {
    padding: 0 0 14px;
  }
}
</style>
