import codeblock from './codeblock'

export default {
  namespaced: true,
  state: () => ({
    selectedTool: false,
  }), // module state is already nested and not affected by namespace option
  getters: {
    selectedTool(state) {
      return state.selectedTool
    },
  },
  actions: {},
  mutations: {
    setSelctedTool(state, tool) {
      state.selectedTool = tool
    }, // -> commit('account/login')
    deselectTool(state) {
      state.selectedTool = false
    }, // -> commit('account/login')
  },
  modules: {
    codeblock,
  },
}
