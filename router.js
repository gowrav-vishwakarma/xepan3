  import Vue from 'vue';
  import Router from 'vue-router';

  import localRouter from './router.local.js';

  import {
      extendRoutes,
      setLocalMiddlewares,
  } from '~/.nuxt/routerHelper.modules';


  Vue.use(Router);

  export function createRouter() {
      const router = new Router({
          mode: 'history',
          base: '/',
          routes: extendRoutes(localRouter),
      });

      router.beforeEach(
          (to, from, next) => setLocalMiddlewares({
              to,
              from,
              next,
          }),
      );

      return router;
  }