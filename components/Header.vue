<template>
  <header class="header">
    <p class="header__text">
      Проект Благотворительного Фонда Константина Хабенского
    </p>
    <nav class="header__menu">
      <ul class="header__list">
        <li class="header__list-elem">
          <nuxt-link to="/" class="header__link header__link_selected"
            >Главная</nuxt-link
          >
        </li>
        <li class="header__list-elem">
          <nuxt-link to="/stories/index" class="header__link"
            >Истории</nuxt-link
          >
        </li>
        <li class="header__list-elem">
          <nuxt-link to="#" class="header__link">Рассказать историю</nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {};
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
.header__list {
  display: flex;
  list-style-type: none;
}
.header__link {
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  color: black;
  text-decoration: none;
  transition: opacity 0.3s ease-in-out;
}
.header__link:hover {
  opacity: 0.8;
}
.header__link_selected {
  text-decoration: underline;
}
.header__list-elem {
  padding-left: 40px;
}
.header__list-elem:first-of-type {
  padding-left: 0;
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
