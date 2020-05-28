import axios from 'axios';

export const state = () => ({
  infoStatics: [],
});

export const mutations = {
  setState(state, { value }) {
    return (state.infoStatics = value);
  },
};

export const getters = {
  getInfoStatics(state) {
    return state.infoStatics;
  },
};

export const actions = {
  fetchInfoStatics(state) {
    return axios.get(`${process.env.apiUrl}statistics`).then(res => {
      return state.commit('setState', { value: res.data });
    });
  },
};

const INFOSTATIC = [
  {
    title:
      'Каждый 3-й в стране уверен, что рак неизлечим. А это примерно 48 918 000 человек.',
    value: 1,
    maxValue: 3,
    source: 'Левада-Центр 2018',
    statNumbers: '1 из 3',
  },

  {
    title: '2,6% Россиян имеют онкозаболевания.',
    value: 2.6,
    maxValue: 100,
    source: 'Росстат 2018',
    statNumbers: '3 700 000',
  },

  {
    title:
      'На 28% выросла доля выявления заболеваний на ранней стадии за 10 лет.',
    value: 65,
    maxValue: 80,
    absValue: 100,
    source: 'МНИОИ Герцена 2018',
    statNumbers: '↑28%',
  },

  {
    title:
      'На 25% снизилась смертность в течение первого года после постановки диагноза.',
    value: 50,
    maxValue: 90,
    absValue: 67,
    source: 'МНИОИ Герцена 2018',
    statNumbers: '↓25%',
  },
];
