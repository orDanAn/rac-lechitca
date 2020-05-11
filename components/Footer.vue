<template>
  <footer class="footer">
    <div class="footer__info">
      <p class="footer__text">
        Спасибо всем, кто помог состояться этому проекту
      </p>
      <nav class="footer__menu">
        <ul class="footer__main-list">
          <li class="footer__list-elem">
            <nuxt-link to="/" class="footer__link footer__main-link"
              >Главная</nuxt-link
            >
          </li>
          <li class="footer__list-elem">
            <nuxt-link to="/stories/index" class="footer__link"
              >Истории</nuxt-link
            >
          </li>
        </ul>
      </nav>

      <nav class="footer__menu">
        <ul class="footer__list">
          <li class="footer__list-elem">
            <a
              href="https://www.instagram.com/raklechitsa/"
              class="footer__link"
              >Мы в Инстаграме</a
            ><span class="footer__link"> и </span
            ><a
              href="https://www.youtube.com/results?search_query=%23%D1%8D%D1%82%D0%BE%D0%BD%D0%B5%D0%BB%D0%B5%D1%87%D0%B8%D1%82%D1%81%D1%8F"
              class="footer__link"
              >Youtube</a
            >
          </li>
          <li class="footer__list-elem">
            <nuxt-link to="#" class="footer__link">Поделитесь ↗</nuxt-link>
          </li>
        </ul>
      </nav>
    </div>

    <div class="footer__description">
      <p class="footer__description-text">Рак Лечится 2020</p>
      <p class="footer__description-text">
        Сделано студентами Яндекс Практикум
      </p>
    </div>
  </footer>
</template>

<script>
export default {};
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
.footer__list {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  list-style-type: none;
  min-height: 94px;
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
.footer__main-list {
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  padding: 0;
  margin-right: 230px;
}
.footer__main-link {
  padding-right: 40px;
}

.footer__link {
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  text-decoration: none;
  color: black;
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
  }
  .footer__description-text {
    font-size: 16px;
  }
  .footer__link {
    font-size: 16px;
  }
  .footer__text {
    max-width: 330px;
  }
  .footer__main-list {
    margin-right: 285px;
  }
  .footer__list {
    min-height: 90px;
  }
}
</style>
