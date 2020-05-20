export const state = () => ({
  popup: {
    popupShow: false,
    popupShowСontacts: false,
  },
});

export const mutations = {
  openPopup(state) {
    return (state.popup.popupShow = true);
  },

  closePopup(state) {
    return (state.popup.popupShow = false);
  },

  openPopupShowСontacts(state) {
    return (state.popup.popupShowСontacts = true);
  },

  closePopupShowСontacts(state) {
    return (state.popup.popupShowСontacts = false);
  },
};

export const getters = {
  getPopup(state) {
    return state.popup;
  },
};
