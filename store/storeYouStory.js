export const state = () => ({
  variant: {
    variantOne: true,
    variantTwo: false,
  },
});

export const mutations = {
  onVariantOne(state) {
    state.variant = {
      variantOne: true,
      variantTwo: false,
    };
    return state.variant;
  },

  onVariantTwo(state) {
    state.variant = {
      variantOne: false,
      variantTwo: true,
    };
    return state.variant;
  },
};

export const getters = {
  getVariant(state) {
    return state.variant;
  },
};
