<template>
  <div class="popup__conteiner">
    <title-popup class="title_popup">
      {{ title }}
    </title-popup>
    <p class="popup__question">
      {{ question }} <span class="popup__explanation"> {{ explanation }}</span>
    </p>
    <form>
      <input-popup />
      <div class="button__container">
        <button-back>
          Назад
        </button-back>
        <button-next class="button-next">
          Далее
        </button-next>
      </div>
    </form>
    <button-close class="button-close" />
  </div>
</template>

<script>
import ButtonClose from '@/components/ui/ButtonClose';
import Title_section from '@/components/Title_section';
import ButtonSmoll from '@/components/ui/ButtonSmoll';
import ButtonBack from '@/components/ui/ButtonBack';
import InputPopup from '@/components/ui/InputPopup';

export default {
  props: {
    title: {
      requerd: true,
      type: String,
    },
    question: {
      requerd: true,
      type: String,
    },
    explanation: {
      requerd: true,
      type: String,
    },
  },

  components: {
    'title-popup': Title_section,
    'button-close': ButtonClose,
    'button-next': ButtonSmoll,
    'button-back': ButtonBack,
    'input-popup': InputPopup,
  },
};
</script>

<style scoped>
.popup__conteiner {
  width: 920px;
  padding-bottom: 40px;
  background-color: #ffffff;
  position: relative;
}

.title_popup {
  margin-top: 40px;
  margin-left: 40px;
}

.popup__question {
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  margin-top: 40px;
  margin-left: 40px;
}

.popup__explanation {
  color: #666666;
}

.button__container {
  display: flex;
  align-items: center;
  margin-top: 200px;
  margin-left: 40px;
}

.button-next {
  margin: 0 0 0 30px;
}
</style>
