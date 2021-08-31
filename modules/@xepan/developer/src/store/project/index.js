export default {
  namespaced: true,
  state: () => ({
    selectedProject: null,
  }), // module state is already nested and not affected by namespace option
  getters: {
    selectedProject(state) {
      return state.selectedProject
    },
  },
  actions: {},
  mutations: {
    setSelctedProject(state, project) {
      state.selectedProject = project
    }, // -> commit('account/login')
    deselectProject(state) {
      state.selectedProject = false
    }, // -> commit('account/login')
  },
  modules: {},
}
