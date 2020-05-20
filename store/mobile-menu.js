export const state = () => ({
  menuOpen: false,
});

export const mutations = {
  SelectMenuState(state) {
    return (state.menuOpen = !state.menuOpen);
  },
  closeMenu(state) {
    return (state.menuOpen = false);
  },
};

export const getters = {
  getMenuState(state) {
    return state.menuOpen;
  },
};
