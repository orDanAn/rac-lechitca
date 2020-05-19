<template>
  <nav class="footer__menu">
    <ul class="footer__main-list">
      <li class="footer__list-elem">
        <nuxt-link to="/" class="footer__link footer_main-link"
          >Главная</nuxt-link
        >
      </li>
      <li class="footer__list-elem">
        <nuxt-link to="/stories" class="footer__link">Истории</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
.footer__main-list {
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  padding: 0;
  margin-right: 230px;
}
.footer_main-link {
  padding-right: 40px;
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
@media screen and (max-width: 1280px) {
  .footer__link {
    font-size: 16px;
  }

  .footer__main-list {
    margin-right: 285px;
  }
}
</style>
