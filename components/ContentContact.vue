<template>
  <div class="content-contact">
    <title-popup class="content-contact__title">
      Оставьте контакт для связи
    </title-popup>
    <p class="content-contact__question">
      Мы свяжемся с вами в течение недели, чтобы задать вопросы о вашей истории
      и <br />разместить ее на сайте.
    </p>
    <form @submit.prevent="">
      <p class="content-contact__question">
        Как вас зовут?
      </p>
      <input-popup
        class="content-contact__input_maxi"
        name="name"
        v-model="name"
        value="name"
      />
      <div class="content-contact__container-form">
        <div>
          <p class="content-contact__question">
            Электронная почта
          </p>
          <input-popup
            class="content-contact__input_mini"
            name="email"
            v-model="email"
            value="email"
            type="email"
            placeholder="pochta@example.com"
          />
        </div>
        <div>
          <p class="content-contact__question">
            Телефон
          </p>
          <input-popup
            class="content-contact__input_mini"
            name="tel"
            v-model="tel"
            value="tel"
            type="tel"
            placeholder="+7 000 000 00 00"
          />
        </div>
      </div>
      <p class="content-contact__question">
        Напишите, если есть предпочтительный способ связи и удобное время
      </p>
      <input-popup
        class="content-contact__input_maxi"
        name="coment"
        v-model="coment"
        value="coment"
        placeholder="Телефон / почта и удобное время"
      />
      <div class="content-contact__down-container">
        <button-next class="content-contact__button-next" @clicBtnSmoll="dddd">
          Отправить
        </button-next>
        <p class="personal-data">
          Нажимая на кнопку «отправить», вы даете согласие на
          <nuxt-link to="/policy" class="policy-link"
            >обработку персональных данных</nuxt-link
          >
        </p>
      </div>
    </form>
    <button-close
      class="content-contact__button-close"
      @clickBtnClose="popupClose"
    />
  </div>
</template>

<script>
import ButtonClose from '@/components/ui/ButtonClose';
import Title_section from '@/components/Title_section';
import ButtonSmall from '@/components/ui/ButtonSmall';
import InputPopup from '@/components/ui/InputPopup';
export default {
  components: {
    'title-popup': Title_section,
    'button-close': ButtonClose,
    'button-next': ButtonSmall,
    'input-popup': InputPopup,
  },
};
</script>

<style scoped>
form {
  margin-top: 45px;
}
.content-contact {
  width: 920px;
  min-height: 730px;
  background-color: #ffffff;
  position: relative;
}

.content-contact__title {
  width: 450px;
  margin-top: 40px;
  margin-left: 40px;
}

.content-contact__container-form {
  display: flex;
}

.content-contact__input_mini {
  width: 400px;
  margin-top: 30px;
}

.content-contact__input_maxi {
  margin-top: 40px;
}
.content-contact__question {
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  margin-top: 40px;
  margin-left: 40px;
}

.content-contact__down-container {
  display: flex;
  margin-top: 50px;
  margin-left: 40px;
  align-items: center;
}
.personal-data {
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  width: 378px;
  margin-left: 30px;

  color: #666;
}
.policy-link {
  color: #666;
}

.content-contact__button-next {
  width: 226px;
  height: 52px;
}
</style>
