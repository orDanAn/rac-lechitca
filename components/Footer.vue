<template>
  <footer class="footer">
    <container class="footer__container">
      <div class="footer__info">
        <p class="footer__text">
          {{ blocks.find(item => item.block === 'footer').title }}
        </p>
        <main-menu class="footer__menu" />
        <social-list />
      </div>

      <div class="footer__description">
        <div class="footer__description-text">
          <div v-html="blocks.find(item => item.block === 'footer').text"></div>
          <span>&nbsp;{{ date }}</span>
        </div>
        <p class="footer__description-text">
          Сделано студентами&nbsp;
          <a
            class="footer__description-link"
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

  computed: {
    blocks() {
      return this.$store.getters['storeBlocks/getBlocks'];
    },
  },
};
</script>

<style scoped>
.footer {
  background-color: #fbfbfb;
}
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
  display: flex;
}
.footer__description-link {
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 18px;
  color: #898989;
  text-decoration: none;
  transition: opacity 0.3s ease-in-out;
}
.footer__description-link:hover {
  opacity: 0.8;
}
.footer__menu {
  margin-right: 230px;
}
@media screen and (max-width: 1280px) {
  .footer__container {
    max-width: 1280px;
    padding: 50px 15px;
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
  .footer__description-link {
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
@media screen and (max-width: 850px) {
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
    margin-bottom: 14px;
    padding: 0;
  }
}
@media screen and (max-width: 700px) {
  .footer__info {
    display: block;
  }
  .footer__text {
    padding-bottom: 50px;
  }
  .footer__menu /deep/ .menu__list-elem {
    margin-bottom: 18px;
    padding: 0;
  }
  .footer__description {
    display: block;
  }
  .footer__description-text {
    margin-top: 10px;
  }
}
@media screen and (max-width: 400px) {
  .footer__text {
    font-size: 18px;
    line-height: 21px;
  }
  .footer__menu /deep/ .menu__link {
    font-weight: 100;
    font-size: 13px;
    line-height: 15px;
  }

  .footer__description-text {
    font-weight: 100;
    font-size: 13px;
    line-height: 15px;
  }
  .footer__description-link {
    font-weight: 100;
    font-size: 13px;
    line-height: 15px;
  }
}
</style>
