<template>
  <nav class="social-list">
    <ul class="social-list__list">
      <li class="social-list__list-elem">
        <span class="social-list__text">Мы в </span>
        <a
          href="https://www.instagram.com/raklechitsa/"
          class="social-list__link"
          target="_blank"
          >Инстаграме</a
        >
        <span class="social-list__text">и</span>
        <a
          href="https://www.youtube.com/results?search_query=%23%D1%8D%D1%82%D0%BE%D0%BD%D0%B5%D0%BB%D0%B5%D1%87%D0%B8%D1%82%D1%81%D1%8F"
          class="social-list__link"
          target="_blank"
          >Youtube</a
        >
      </li>
      <li class="social-list__list-elem" @click="clickSeti">
        <button-open-popup class="social-list__button"
          >Поделитесь ↗</button-open-popup
        >
      </li>
    </ul>
  </nav>
</template>

<script>
import ButtonOpenPopup from '@/components/ui/ButtonOpenPopup';
export default {
  components: {
    'button-open-popup': ButtonOpenPopup,
  },
  methods: {
    clickSeti() {
      this.$store.commit('storePopup/openPopupShowSeti');
    },
  },
};
</script>

<style scoped>
.social-list__list {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  list-style-type: none;
  min-height: 94px;
  margin-right: 42px;
}
.social-list__link {
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  text-decoration: none;
  border-bottom: 1.5px solid black;
  color: black;
  transition: opacity 0.3s ease-in-out;
}
.social-list__text {
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
}
.social-list__link:hover {
  opacity: 0.8;
}
.social-list__button {
  font-size: 18px;
  line-height: 24px;
}
@media screen and (max-width: 1280px) {
  .social-list__link {
    font-size: 16px;
  }
  .social-list__text {
    font-size: 16px;
  }
  .social-list__list {
    min-height: 90px;
  }
  .social-list__button {
    font-size: 16px;
  }
}
@media screen and (max-width: 1100px) {
  .social-list__list {
    min-width: 221px;
    margin-right: 0;
    padding-left: 0;
    justify-content: start;
  }
  .social-list__list-elem {
    margin-bottom: 30px;
  }
}
@media screen and (max-width: 800px) {
  .social-list__list-elem {
    margin-bottom: 14px;
  }
}
@media screen and (max-width: 800px) {
  .social-list__list-elem {
    margin-bottom: 18px;
  }
  .social-list__list {
    margin-bottom: 10px;
  }
}
@media screen and (max-width: 400px) {
  .social-list__link {
    font-weight: 100;
    font-size: 13px;
    line-height: 15px;
  }
  .social-list__text {
    font-weight: 100;
    font-size: 13px;
    line-height: 15px;
  }
  .social-list__button {
    font-weight: 100;
    font-size: 13px;
    line-height: 15px;
  }
  .social-list__list {
    margin-bottom: 0;
  }
  .social-list__list-elem {
    margin-bottom: 5px;
  }
}
</style>
