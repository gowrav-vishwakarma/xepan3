export default [
    {
        name: 'WebCacheAll',
        path: '*',
        component: ()=>import('~/modules/@xepan/webbuilder/pages/Website.vue').then(m=>m.default || m)
    }
]