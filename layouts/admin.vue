<template>
  <v-app dark>
    <v-navigation-drawer v-model="drawer" dark :clipped="clipped" fixed app>
      <v-list v-if="drawermenus.length">
        <v-list-item
          v-for="(item, i) in drawermenus[0].items"
          :key="i"
          :to="item.path"
          router
          exact
          @click="drawer = false"
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app dense>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
      <v-toolbar-items class="hidden-sm-and-down text--caption">
        <v-menu
          v-for="(menu, index) in topmenus"
          :key="index"
          :close-on-content-click="false"
          open-on-hover
          bottom
          offset-y
        >
          <template #activator="{ on }">
            <v-btn text v-on="on"> {{ menu.title }} </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="(item, b) in menu.items"
              :key="b"
              link
              router
              :to="item.path"
            >
              <v-list-item-content style="align-self: left">
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-toolbar-items>
      <v-spacer />
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import _ from 'lodash'

export default {
  name: 'AdminLayout',
  middleware: ['auth'],

  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      drawermenus: [],
      topmenus: [],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'SaaSaaS',
    }
  },

  async mounted() {
    console.log(this.$nuxt)
    const menusFromApi = (
      await this.$axios.get('/api/xepan/core/admin/menus').catch((err) => console.log(err))
    ).data

    // topmenu populate
    const sortedTopMenu = []
    Object.entries(menusFromApi.topmenu).forEach(([key, m]) => {
      const existingMenu = sortedTopMenu.findIndex((e) => e.title === m.title)
      if (existingMenu === -1) {
        sortedTopMenu.push(m)
      } else {
        sortedTopMenu[existingMenu] = _.merge(existingMenu, m)
      }
    })
    this.topmenus = sortedTopMenu

    const sortedDrawerMenu = []
    Object.entries(menusFromApi.drawer).forEach(([key, m]) => {
      const existingMenu = sortedDrawerMenu.findIndex(
        (e) => e.title === m.title
      )
      if (existingMenu === -1) {
        sortedDrawerMenu.push(m)
      } else {
        sortedDrawerMenu[existingMenu] = _.merge(existingMenu, m)
      }
    })

    this.drawermenus = sortedDrawerMenu

    console.log(menusFromApi)
  },
}
</script>
