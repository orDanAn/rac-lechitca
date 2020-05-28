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
        class="content-contact__input-maxi"
        name="name"
        v-model="name"
        value="name"
      />
      <div class="content-contact__container-form">
        <div>
          <p class="content-contact__input-mini">
            Электронная почта
          </p>
          <input-popup
            class="content-contact__input-mini"
            name="email"
            v-model="email"
            value="email"
            type="email"
            placeholder="pochta@example.com"
          />
        </div>
        <div>
          <p class="content-contact__input-mini">
            Телефон
          </p>
          <input-popup
            class="content-contact__input-mini "
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
        class="content-contact__input-maxi"
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
  methods: {
    popupClose() {
      this.$store.commit('storePopup/closePopupShowСontacts');
    },
  },
};
</script>

<style scoped>
form {
  margin-top: 50px;
}
.content-contact {
  width: 920px;
  min-height: 730px;
  background-color: #fff;
  position: relative;
  margin: auto;
}

.content-contact__title {
  width: 450px;
  margin-top: 40px;
  margin-left: 40px;
}

.content-contact__container-form {
  display: flex;
}

.content-contact__input-mini {
  width: 400px;
  margin-top: 40px;
  margin-left: 40px;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
}

.content-contact__input-maxi {
  margin-top: 40px;
  width: 840px;
}
.content-contact__question {
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  margin-top: 40px;
  margin-left: 40px;
  width: 840px;
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
@media (min-width: 1280px) and (max-width: 1439px) {
  .content-contact {
    width: 800px;
    min-height: 710px;
  }
  .content-contact__title {
    font-size: 28px;
    line-height: 32px;
  }
  .content-contact__question {
    font-size: 16px;
    line-height: 22px;
    width: 720px;
  }
  .content-contact__input-mini {
    width: 343px;
  }
  .content-contact__input-maxi {
    width: 720px;
  }
}
@media (min-width: 1024px) and (max-width: 1279px) {
  .content-contact {
    width: 800px;
    min-height: 710px;
  }
  .content-contact__title {
    font-size: 28px;
    line-height: 32px;
    width: 393px;
  }
  .content-contact__question {
    font-size: 16px;
    line-height: 22px;
    width: 720px;
  }
  .content-contact__input-mini {
    width: 343px;
    font-size: 16px;
    line-height: 22px;
  }
  .content-contact__input-maxi {
    width: 720px;
    font-size: 16px;
    line-height: 22px;
  }
}
@media (min-width: 768px) and (max-width: 1023px) {
  .content-contact {
    width: 580px;
    min-height: 710px;
  }
  .content-contact__title {
    font-size: 26px;
    line-height: 30px;
    width: 365px;
  }
  .content-contact__question {
    width: 500px;
    font-size: 15px;
    line-height: 19px;
  }
  .content-contact__input-maxi {
    width: 500px;
    font-size: 15px;
    line-height: 19px;
  }
  .content-contact__input-mini {
    width: 230px;
    font-size: 15px;
    line-height: 19px;
  }
  .content-contact__button-next {
    width: 200px;
    height: 46px;
  }
  .personal-data {
    width: 270px;
    font-size: 11px;
    line-height: 13px;
  }
}
@media (min-width: 320px) and (max-width: 767px) {
  form {
    margin-top: 35px;
  }
  .content-contact {
    width: 290px;
    min-height: 666px;
  }
  .content-contact__title {
    font-size: 18px;
    line-height: 21px;
    width: 185px;
    margin-top: 15px;
    margin-left: 15px;
  }
  .content-contact__question {
    width: 260px;
    font-size: 13px;
    line-height: 16px;
    margin-top: 30px;
    margin-left: 15px;
  }
  .content-contact__input-mini {
    width: 260px;
    font-size: 13px;
    line-height: 16px;
    margin-top: 30px;
    margin-left: 15px;
  }
  .content-contact__input-maxi {
    width: 260px;
    font-size: 13px;
    line-height: 16px;
    margin-top: 30px;
    margin-left: 15px;
  }
  .content-contact__button-close {
    top: 20px;
    right: 20px;
  }
  .content-contact__button-next {
    width: 260px;
    height: 40px;
  }
  .content-contact__down-container {
    flex-direction: column;
    margin: 35px auto 15px auto;
  }
  .personal-data {
    width: 260px;
    font-size: 11px;
    line-height: 13px;
    margin: 10px 0 0 0;
  }
  .content-contact__container-form {
    flex-direction: column;
  }
}
</style>
