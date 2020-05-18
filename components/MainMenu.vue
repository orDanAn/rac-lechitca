<template>
  <nav class="menu">
    <ul class="menu__list">
      <li class="menu__list-elem">
        <nuxt-link to="/" class="menu__link menu__link_selected"
          >Главная</nuxt-link
        >
      </li>
      <li class="menu__list-elem">
        <nuxt-link to="/stories" class="menu__link">Истории</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  components: {},
};
</script>

<style scoped>
.menu__list {
  display: flex;
  list-style-type: none;
}
.menu__link {
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  color: black;
  text-decoration: none;
  transition: opacity 0.3s ease-in-out;
}
.menu__link:hover {
  opacity: 0.8;
}
.menu__link_selected {
  text-decoration: underline;
}
.menu__list-elem {
  padding-left: 40px;
}
.menu__list-elem:first-of-type {
  padding-left: 0;
}

@media screen and (max-width: 1280px) {
  .menu__link {
    font-size: 16px;
  }
}
</style>
