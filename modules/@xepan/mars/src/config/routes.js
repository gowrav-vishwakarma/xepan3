export default [
  {
    name: 'MarsHomePage',
    path: '/mars/home',
    component: () =>
      import('@xepan/mars/pages/home.vue').then((m) => m.default || m),
  },
]
