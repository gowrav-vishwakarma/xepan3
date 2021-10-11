export default [
  {
    name: 'WebPages',
    path: '/admin/web/page-manager',
    component: () =>
      import('@xepan/webbuilder/pages/admin/pageManager.vue').then(
        (m) => m.default || m
      ),
  },
  {
    name: 'WebCacheAll',
    path: '*',
    component: () =>
      import('@xepan/webbuilder/pages/Website.vue').then((m) => m.default || m),
  },
]
