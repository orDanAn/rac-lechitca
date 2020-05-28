import axios from 'axios';

export const state = () => ({
  stories: [],
});

export const getters = {
  getStories(state) {
    return state.stories;
  },
};

export const mutations = {
  setStories(state, value) {
    return (state.stories = value);
  },
};

export const actions = {
  fetchStories(state) {
    return axios.get(`${process.env.apiUrl}stories`).then(res => {
      return state.commit('setStories', res.data);
    });
  },
};
