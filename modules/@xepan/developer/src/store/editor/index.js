export default {
  namespaced: true,
  // module assets
  state: () => ({
    selectedTool: false,
    selectedPorts: [],
  }), // module state is already nested and not affected by namespace option
  getters: {
    selectedTool(state) {
      return state.selectedTool
    },
    selectedPorts(state) {
      return state.selectedPorts
    }, // -> getters['account/isAdmin']
  },
  actions: {
    login() {
      return true
    }, // -> dispatch('account/login')
  },
  mutations: {
    setSelctedTool(state, tool) {
      state.selectedTool = tool
    }, // -> commit('account/login')
    deselectTool(state) {
      state.selectedTool = false
    }, // -> commit('account/login')

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

  // nested modules
  modules: {
    // inherits the namespace from parent module
    myPage: {
      namespaced: true,
      state: () => ({ x: 10 }),
      getters: {
        profile() {
          return true
        }, // -> getters['account/profile']
      },
    },

    // further nest the namespace
    posts: {
      namespaced: true,

      state: () => ({ x: 10 }),
      getters: {
        popular() {
          return true
        }, // -> getters['account/posts/popular']
      },
    },
  },
}
