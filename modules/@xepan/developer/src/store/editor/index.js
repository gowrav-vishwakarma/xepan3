import codeblock from './codeblock'

export default {
  namespaced: true,
  state: () => ({
    selectedTool: false,
    tabs: [],
  }), // module state is already nested and not affected by namespace option
  getters: {
    selectedTool(state) {
      return state.selectedTool
    },
    tabs(state) {
      return state.tabs
    },
  },
  actions: {
    resetEditor({ commit }) {
      commit('deselectTool')
      commit('removeAllTabs')
      commit('codeblock/portDeSelectAll')
    },
  },
  mutations: {
    setSelctedTool(state, tool) {
      state.selectedTool = tool
    }, // -> commit('account/login')
    deselectTool(state) {
      state.selectedTool = false
    }, // -> commit('account/login')
    addTab(state, tab) {
      state.tabs.push(tab)
    },
    removeTab(state, index) {
      state.tabs.splice(index, 1)
    },
    removeAllTabs(state) {
      state.tabs = []
    },
  },
  modules: {
    codeblock,
  },
}
