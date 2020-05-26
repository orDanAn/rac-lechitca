import axios from 'axios';

export const state = () => ({
  blocks: [],
});

export const mutations = {
  setBlocks(state, value) {
    return (state.blocks = value);
  },
};

export const actions = {
  fetchBlocks(state) {
    return axios('https://strapi.kruzhok.io/blocks').then(res => {
      return state.commit('setBlocks', res);
    });
  },
};

export const getters = {
  getBlocks(state) {
    return state.blocks.data;
  },
};
