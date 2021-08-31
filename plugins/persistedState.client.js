import createPersistedState from 'vuex-persistedstate'

export default ({ store }) => {
  createPersistedState({
    key: 'xepan3',
    paths: ['project'],
  })(store)
}
