export const state = () => ({
  variant: {
    varOne: true,
    varTwo: false,
  },
});

export const mutations = {
  onVarOne(state) {
    state.variant = {
      varOne: true,
      varTwo: false,
    };

    return state.variant;
  },

  onVarTwo(state) {
    state.variant = {
      varOne: false,
      varTwo: true,
    };

    return state.variant;
  },
};

export const getters = {
  getVar(state) {
    return state.variant;
  },
};
