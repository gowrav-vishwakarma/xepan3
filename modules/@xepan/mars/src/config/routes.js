export default [
  {
    name: 'MarsHomePage',
    path: '/',
    component: () =>
      import('@xepan/mars/pages/home.vue').then((m) => m.default || m),
  },
]
