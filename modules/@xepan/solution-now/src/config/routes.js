export default [
  {
    name: 'SolutionHomePage',
    path: '/solution-now/home',
    component: () =>
      import('@xepan/solutionnow/pages/home.vue').then((m) => m.default || m),
  },
]
