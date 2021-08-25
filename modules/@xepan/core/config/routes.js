export default [
    {
        name: 'AdminLogin',
        path: '/admin/login',
        component: ()=>import('~/modules/@xepan/core/pages/admin/login.vue').then(m=>m.default || m)
    },
    {
        name: 'AdminCacheAll',
        path: '/admin',
        component: ()=>import('~/modules/@xepan/core/pages/admin/index.vue').then(m=>m.default || m)
    },
]