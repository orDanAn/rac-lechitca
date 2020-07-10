import axios from 'axios';

export const state = () => ({
  video: [],
});

export const mutations = {
  setVideo(state, value) {
    return (state.video = value);
  },
};

export const actions = {
  fetchVideo(state) {
    return axios.get(`${process.env.apiUrl}videos`).then(res => {
      return state.commit('setVideo', res.data);
    });
  },
};

export const getters = {
  getVideo(state) {
    return state.video;
  },
};
