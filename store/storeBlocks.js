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
    return axios.get(`${process.env.apiUrl}blocks`).then(res => {
      return state.commit('setBlocks', res.data);
    });
  },
};

export const getters = {
  getBlocks(state) {
    return state.blocks;
  },
};
