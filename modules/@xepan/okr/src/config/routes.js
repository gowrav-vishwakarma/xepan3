export default [
  {
    name: 'OKRHomePage',
    path: '/okrs/home',
    component: () =>
      import('@xepan/okr/pages/home.vue').then((m) => m.default || m),
  },
]
