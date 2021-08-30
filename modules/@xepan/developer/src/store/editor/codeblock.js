export default {
  namespaced: true,
  // module assets
  state: () => ({
    selectedPorts: [],
  }), // module state is already nested and not affected by namespace option
  getters: {
    selectedPorts(state) {
      return state.selectedPorts
    }, // -> getters['account/isAdmin']
  },
  actions: {
    // -> dispatch('account/login')
  },
  mutations: {
    portSelect(state, port) {
      state.selectedPorts.push(port)
    },
    portDeSelect(state, port) {
      const i = state.selectedPorts.findIndex((o) => o.id === port.id)
      state.selectedPorts.splice(i, 1)
    },
    portDeSelectAll(state) {
      state.selectedPorts = []
    },
  },
}
