import platform from './platform'

export default {
  namespaced: true,
  state: () => ({}), // module state is already nested and not affected by namespace option
  getters: {},
  actions: {},
  mutations: {},
  modules: {
    platform,
  },
}
