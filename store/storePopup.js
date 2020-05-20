export const state = () => ({
  popup: {
    popupShow: false,
  },
});

export const mutations = {
  openPopup(state) {
    return (state.popup.popupShow = true);
  },

  closePopup(state) {
    return (state.popup.popupShow = false);
  },
};

export const getters = {
  getPopup(state) {
    return state.popup;
  },
};
