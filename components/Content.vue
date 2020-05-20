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
      <input-popup name="answer" v-model="answer" value="answer" />
      <div class="content__button-container">
        <button-back @clickButtonBack="prevQustion">
          Назад
        </button-back>
        <button-next class="content__button-next" @clicBtnSmoll="nextQustion">
          Далее
        </button-next>
      </div>
    </form>
    <button-close class="content__button-close" @clickBtnClose="popupClose" />
  </div>
</template>

<script>
import ButtonClose from '@/components/ui/ButtonClose';
import Title_section from '@/components/Title_section';
import ButtonSmall from '@/components/ui/ButtonSmall';
import ButtonBack from '@/components/ui/ButtonBack';
import InputPopup from '@/components/ui/InputPopup';

export default {
  data() {
    return {
      answer: '',
    };
  },

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

  computed: {
    initAnswer() {
      const { quiz } = this.$store.state['storeContentPopup'];
      const { currentQustion, answers } = quiz;
      return answers[currentQustion] || '';
    },
  },

  methods: {
    async nextQustion() {
      await this.$store.dispatch('storeContentPopup/nextButton', {
        answer: this.answer,
      });
      this.answer = this.initAnswer;
    },

    async prevQustion() {
      await this.$store.dispatch('storeContentPopup/prevButton');
      this.answer = this.initAnswer;
    },

    popupClose() {
      this.$store.commit('storePopup/closePopup');
    },
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
