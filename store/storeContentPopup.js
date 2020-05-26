export const state = () => ({
  quiz: {
    currentQustion: 1,
    answers: {},
    infoContent: INFOCONTENT,
  },
});

export const mutations = {
  saveAnswer(state, { answer, currentQustion }) {
    state.quiz.answers[currentQustion] = answer;
  },

  setCurrentQustion(state, { currentQustion }) {
    state.quiz.currentQustion = currentQustion;
  },

  setInfoContent(state, { infoContent }) {
    state.infoContent = infoContent;
  },

  setCurrentQustionStart(state) {
    state.quiz.currentQustion = 1;
  },
};

export const actions = {
  async nextButton({ commit, state }, { answer }) {
    const { currentQustion } = state.quiz;
    if (currentQustion === 13) {
      return;
    }
    await commit('saveAnswer', { answer, currentQustion });
    await console.log(state.quiz.answers);
    await commit('setCurrentQustion', { currentQustion: currentQustion + 1 });
  },

  async prevButton({ commit, state }) {
    const { currentQustion } = state.quiz;
    if (currentQustion === 1) {
      return;
    }
    await commit('setCurrentQustion', { currentQustion: currentQustion - 1 });
  },
};

export const getters = {
  getQuiz(state) {
    return state.quiz;
  },
};

const INFOCONTENT = {
  1: {
    title: 'Шаг 1 из 12',
    question: 'Как вас зовут?',
    explanation: '',
  },

  2: {
    title: 'Шаг 2 из 12',
    question: 'Было ли у вас онкологическое заболевание? ',
    explanation:
      'Если да – расскажите, пожалуйста, кратко, какой диагноз и текущий статус. Если нет — приглашаем Вас поделиться своей историей неизлечимых привычек в Инстаграм с хештегами #раклечится и #этонелечится.',
  },

  3: {
    title: 'Шаг 3 из 12',
    question: 'Какие занятия приносят Вам наибольшее удовольствие? ',
    explanation:
      'Расскажите о ваших неизлечимых привычках, чего Вы боитесь или без чего не можете жить.',
  },

  4: {
    title: 'Шаг 4 из 12',
    question: 'На что, кроме семьи, быта и работы, Вы тратите свое время?',
    explanation: '',
  },

  5: {
    title: 'Шаг 5 из 12',
    question: 'Какие сильные увлечения у Вас есть? ',
    explanation:
      'Расскажите о занятии, хобби или спорте, которые увлекают Вас с головой.',
  },

  6: {
    title: 'Шаг 6 из 12',
    question:
      'Ваши близкие, друзья или коллеги замечали за вами какие-нибудь необычные привычки или особенности?',
    explanation: '',
  },

  7: {
    title: 'Шаг 7 из 12',
    question:
      'Существуют ли какие-то ритуалы/действия, которые Вы совершаете регулярно? ',
    explanation: 'Кроме необходимых, таких, как чистка зубов.',
  },

  8: {
    title: 'Шаг 8 из 12',
    question:
      'Если вам выдался свободный день/вечер в одиночестве, чем вы займетесь? ',
    explanation: '',
  },

  9: {
    title: 'Шаг 9 из 12',
    question: 'Что Вас успокаивает/умиротворяет лучше всего? ',
    explanation: '',
  },

  10: {
    title: 'Шаг 10 из 12',
    question:
      'Какие события/ситуации или действия других людей обычно выводят Вас из себя? ',
    explanation: '',
  },

  11: {
    title: 'Шаг 11 из 12',
    question: 'Как вы обычно проводите выходные? ',
    explanation: '',
  },

  12: {
    title: 'Шаг 12 из 12',
    question: 'Почта или телефон для связи. ',
    explanation:
      'Укажите удобный для вас формат связи. После обработки анкеты координатор проекта свяжется с Вами для размещения Вашей истории на сайте.',
  },

  13: {
    title: 'Спасибо что приняли участие!',
    question: '',
    explanation: '',
  },
};
