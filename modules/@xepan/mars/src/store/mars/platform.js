export default {
  namespaced: true,
  // module assets
  state: () => ({
    activePlatform: 'mars',
    preferance: {},
  }), // module state is already nested and not affected by namespace option
  getters: {
    activePlatform(state) {
      return state.activePlatform
    }, // -> getters['account/isAdmin']
  },
  actions: {
    // -> dispatch('account/login')
  },
  mutations: {
    setActivePlatform(state, platform) {
      state.activePlatform = platform
    },
  },
}
