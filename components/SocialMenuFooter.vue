<template>
  <nav class="footer__menu">
    <ul class="footer__list">
      <li class="footer__list-elem">
        <a href="https://www.instagram.com/raklechitsa/" class="footer__link"
          >Мы в Инстаграме</a
        >
        <span class="footer__link">и</span>
        <a
          href="https://www.youtube.com/results?search_query=%23%D1%8D%D1%82%D0%BE%D0%BD%D0%B5%D0%BB%D0%B5%D1%87%D0%B8%D1%82%D1%81%D1%8F"
          class="footer__link"
          >Youtube</a
        >
      </li>
      <li class="footer__list-elem">
        <button-open-popup class="footer__button"
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
};
</script>

<style scoped>
.footer__list {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  list-style-type: none;
  min-height: 94px;
  margin-right: 42px;
}
.footer__link {
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  text-decoration: none;
  color: black;
  transition: opacity 0.3s ease-in-out;
}
.footer__link:hover {
  opacity: 0.8;
}
.footer__button {
  font-size: 18px;
  line-height: 24px;
}
@media screen and (max-width: 1280px) {
  .footer__link {
    font-size: 16px;
  }
  .footer__list {
    min-height: 90px;
  }
  .footer__button {
    font-size: 16px;
  }
}
</style>
