<template>
  <div class="content">
    <title-popup
      :class="{ content__title: question, content__title_center: !question }"
    >
      {{ title }}
    </title-popup>
    <p class="content__question" v-if="question">
      {{ question }}
      <span class="content__explanation" v-if="explanation">
        {{ explanation }}</span
      >
    </p>
    <form v-if="question" @submit.prevent="" name="form">
      <input-popup name="answer" v-model="answer" value="answer" />
      <div class="content__button-container">
        <button-back @clickButtonBack="prevQustion">
          Назад
        </button-back>
        <button-next
          class="content__button-next"
          @clicBtnSmoll="nextQustion"
          :disabled="answer.length > 1 ? false : true"
        >
          {{ isLastQuestion ? 'Далее' : 'Отправить' }}
        </button-next>
        <p class="personal-data" v-if="!isLastQuestion" @click="popupClose">
          Нажимая на кнопку «отправить», вы даете согласие на
          <nuxt-link to="/policy" class="policy-link"
            >обработку персональных данных</nuxt-link
          >
        </p>
      </div>
    </form>
    <button-next
      class="content__button-finish"
      v-if="!question"
      @clicBtnSmoll="popupCloseFinish"
      >Закрыть</button-next
    >
    <button-close
      class="content__button-close"
      v-if="question"
      @clickBtnClose="popupClose"
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
    quiz() {
      const { quiz } = this.$store.state['storeContentPopup'];
      return quiz;
    },
    isLastQuestion() {
      const { quiz } = this.$store.state['storeContentPopup'];
      const { currentQustion, infoContent } = quiz;
      const lengthQustion = Object.keys(quiz.infoContent).length;

      if (quiz.currentQustion < lengthQustion - 1) {
        return true;
      }
      return false;
    },
  },

  methods: {
    async nextQustion() {
      await this.$store.dispatch('storeContentPopup/nextButton', {
        answer: this.answer,
      });
      if (this.answer === '') {
        console.log('pusto');
      }
      this.answer = this.initAnswer;
      this.disabled = false;
    },

    async prevQustion() {
      await this.$store.dispatch('storeContentPopup/prevButton');
      this.answer = this.initAnswer;
    },

    popupClose() {
      this.$store.commit('storePopup/closePopup');
    },

    popupCloseFinish() {
      this.$store.commit('storeContentPopup/setCurrentQustionStart');
      this.$store.commit('storePopup/closePopup');
    },
  },
};
</script>

<style scoped>
form {
  position: absolute;
  top: 274px;
}
.content {
  min-width: 920px;
  min-height: 600px;
  background-color: #ffffff;
  position: relative;
}

.content__title {
  margin-top: 40px;
  margin-left: 40px;
}

.content__title_center {
  margin: 0 auto;
  width: auto;
  text-align: center;
  margin-top: 40px;
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

.content__button-next {
  margin: 0 0 0 10px;
  width: 226px;
  height: 52px;
}

.content__button-finish {
  display: block;
  margin: 0 auto;
  margin-top: 432px;
}

@media screen and (max-width: 1280px) {
  form {
    top: 232px;
  }
  .content {
    min-width: 800px;
    min-height: 520px;
  }
  .content__button-next {
    width: 200px;
    height: 48px;
  }
  .content__question {
    font-size: 16px;
    line-height: 22px;
    width: 720px;
  }
  .content__button-container {
    margin-top: 165px;
  }
  .content__button-close {
    top: 27px;
    right: 28px;
  }
}

@media screen and (max-width: 1024px) {
  form {
    top: 230px;
  }
  .content__question {
    font-size: 15px;
  }
  .content__button-next {
    height: 46px;
  }
}

@media screen and (max-width: 850px) {
  form {
    top: 230px;
  }
  .content {
    min-width: 580px;
    min-height: 520px;
  }
  .personal-data {
    width: 210px;
    font-size: 11px;
    line-height: 13px;
  }
  .content__title {
    text-align: left;
  }
  .content__button-container {
    margin-top: 172px;
  }

  .content__question {
    line-height: 19px;
    width: 500px;
  }
}

@media screen and (max-width: 590px) {
  form {
    top: 186px;
  }
  .content {
    min-width: 290px;
    width: 290px;
  }
  .content__title {
    margin: 15px 0 0 15px;
  }
  .content__button-next {
    width: 206px;
    height: 40x;
  }

  .content__question {
    font-size: 13px;
    line-height: 16px;
    width: 260px;
    margin: 30px 0 0 15px;
  }
  .content__button-container {
    margin-left: 15px;
  }
  .content__button-close {
    top: 10px;
    right: 9px;
  }
  .content__button-container {
    margin-top: 250px;
  }
  .personal-data {
    position: absolute;
    bottom: 55px;
    right: 0;
    width: 206px;
  }
}
</style>
