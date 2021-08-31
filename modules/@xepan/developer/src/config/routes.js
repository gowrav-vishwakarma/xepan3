import DeveloperPage from '@xepan/developer/pages/index.vue'

export default [
  {
    name: 'DeveloperDashboard',
    path: '/admin/developer',
    component: DeveloperPage,
  },
  {
    name: 'DeveloperProjectManagement',
    path: '/admin/developer/project/management',
    component: () =>
      import('@xepan/developer/pages/project/management.vue').then(
        (m) => m.default || m
      ),
  },
]
