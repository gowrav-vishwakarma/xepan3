import codeblock from './codeblock'

export default {
  namespaced: true,
  state: () => ({
    selectedTool: false,
    tabs: [],
    selectedTab: undefined,
  }), // module state is already nested and not affected by namespace option
  getters: {
    selectedTool(state) {
      return state.selectedTool
    },
    tabs(state) {
      return state.tabs
    },
    selectedTab(state) {
      return state.selectedTab
    },
  },
  actions: {
    resetEditor({ commit }) {
      commit('deselectTool')
      commit('removeAllTabs')
      commit('codeblock/portDeSelectAll')
    },
    removeTab({ commit, gatters }, tabNumber) {
      const totalTabs = gatters.tabs.length
      commit('removeTab', tabNumber)
      if (tabNumber === totalTabs && totalTabs > 0)
        commit('selectTab', totalTabs - 1)
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
    selectTab(state, tabNo) {
      state.selectedTab = tabNo
    },
  },
  modules: {
    codeblock,
  },
}
