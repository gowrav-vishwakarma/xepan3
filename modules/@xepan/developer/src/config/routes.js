export default [
  {
    name: 'DeveloperDashboard',
    path: '/admin/developer',
    component: () =>
      import('~/modules/@xepan/developer/src/pages/index.vue').then(
        (m) => m.default || m
      ),
  },
]
