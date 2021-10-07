export default [
  {
    name: 'HiHRHomePage',
    path: '/hihr/home',
    component: () =>
      import('@xepan/hihr/pages/home.vue').then((m) => m.default || m),
  },
]
