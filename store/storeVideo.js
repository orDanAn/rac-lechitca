import axios from 'axios';

export const state = () => ({
  textVideoFromApi: [],
});

export const mutations = {
  setState(state, { name, value }) {
    return (state[name] = value);
  },
};

export const actions = {
  fetchTextVideoFromApi(state) {
    return axios.get('https://strapi.kruzhok.io/blocks').then(response => {
      return state.commit('setState', {
        name: 'textVideoFromApi',
        value: response.data,
      });
    });
  },
};

export const getters = {
  getText(state) {
    return state.textVideoFromApi;
  },
};
