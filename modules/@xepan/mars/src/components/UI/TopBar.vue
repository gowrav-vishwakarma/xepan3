<template>
  <v-app-bar dense absolute app>
    <xEpanMarsUserVarificationBadge class="pr-2" />

    <v-toolbar-title>Welcome Frendy</v-toolbar-title>

    <v-spacer></v-spacer>
    <v-btn-toggle v-model="platform_selected" dense mandatory>
      <v-btn color="primary" x-small to="/">M Profile</v-btn>
      <v-btn color="primary" x-small to="/okrs/home">My OKRs</v-btn>
      <v-btn color="primary" x-small to="/hihr/home">Jobs</v-btn>
      <v-btn color="primary" x-small to="/solution-now/home">Solution Now</v-btn>
    </v-btn-toggle>
    <v-menu left bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon v-bind="attrs" v-on="on">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item v-for="n in 5" :key="n" @click="() => {}">
          <v-list-item-title>Option {{ n }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      platform_selected: 0,
    }
  },

  watch: {
    platform_selected(newVal) {
      const platforms = ['mars', 'okr', 'ethicalhr', 'solution-now']
      this.$store.commit('mars/platform/setActivePlatform', platforms[newVal])
    },
  },
}
</script>
