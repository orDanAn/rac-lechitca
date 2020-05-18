<template>
  <div class="content">
    <title-popup class="content__title">
      {{ title }}
    </title-popup>
    <p class="content__question">
      {{ question }}
      <span class="content__explanation"> {{ explanation }}</span>
    </p>
    <form @submit.prevent="">
      <input-popup />
      <div class="content__button-container">
        <button-back>
          Назад
        </button-back>
        <button-next class="content__button-next">
          Далее
        </button-next>
      </div>
    </form>
    <button-close
      class="content__button-close"
      @clickBtnClose="$emit('clickBtnClose')"
    />
  </div>
</template>

<script>
import ButtonClose from '@/components/ui/ButtonClose';
import Title_section from '@/components/Title_section';
import ButtonSmall from '@/components/ui/ButtonSmall';
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
    'button-next': ButtonSmall,
    'button-back': ButtonBack,
    'input-popup': InputPopup,
  },
};
</script>

<style scoped>
.content {
  max-width: 920px;
  padding-bottom: 40px;
  background-color: #ffffff;
  position: relative;
}

.content__title {
  margin-top: 40px;
  margin-left: 40px;
}

.content__question {
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  margin-top: 40px;
  margin-left: 40px;
  width: 840px;
}

.content__explanation {
  color: #666666;
}

.content__button-container {
  display: flex;
  align-items: center;
  margin-top: 200px;
  margin-left: 40px;
}

.content__button-next {
  margin: 0 0 0 10px;
}
</style>
