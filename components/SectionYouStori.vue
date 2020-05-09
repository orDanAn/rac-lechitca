<template>
  <section>
    <h4 class="proba-title">
      Расскажите свою историю
    </h4>
    <div class="you-stori-conteiner">
      <p class="proba-p">
        Мы публикуем новые истории на сайте раз в неделю. Есть 2 варианта
        поделиться своей историей неизлечимых привычек, навязчивых идей и
        болезненных привязанностей.
      </p>
      <div class="you-stori-conteiner_inside">
        <div>
          <a class="link-section">1-й вариант</a>
          <a class="link-section">2-й вариант</a>
        </div>

        <div>
          <p class="proba-p_long">
            Заполнить подробную форму прямо на сайте и мы опубликуем вашу
            историю после проверки. Пожалуйста, заполняйте все пункты корректно,
            если вы испытаете какие-то сложности, воспользуйтесь 2-м вариантом.
          </p>
          <button-smoll>Заполнить форму</button-smoll>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ButtonSmoll from '@/components/ButtonSmoll';

export default {
  'button-smoll': ButtonSmoll,
};
</script>

<style scoped>
section {
  width: 100%;
  max-width: 1440px;
  background: #f7f7f7;
}

.proba-title {
  width: 413px;
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  margin: 100px 0 32px 60px;
}

.you-stori-conteiner {
  display: flex;
  justify-content: space-between;
  margin: 0 60px 0 60px;
}

.you-stori-conteiner_inside {
  display: flex;
  justify-content: space-between;
  flex-basis: 785px;
}

.proba-p {
  width: 340px;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  color: #666666;
}

.proba-p_long {
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  color: #666666;
  width: 640px;
}

.link-section {
  display: block;
}
</style>
