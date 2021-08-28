<template>
  <span @click.stop.prevent="portClicked($event)">
    <v-icon class="no-drag" :class="{ red: isSelected }">mdi-play</v-icon
    >{{ port.id }}
  </span>
</template>

<script>
/* eslint vue/no-mutating-props:0 */
export default {
  props: {
    port: Object,
    parent: Object,
    type: String,
  },

  data() {
    return {
      isClicked: false,
    }
  },

  computed: {
    isSelected() {
      return this.$store.getters['editor/selectedPorts'].find(
        (o) => o.id === this.port.id
      )
    },
  },

  methods: {
    portClicked(evt) {
      let mutation = 'editor/portSelect'
      if (this.isSelected) mutation = 'editor/portDeSelect'
      this.$store.commit(mutation, this.port)
      const selctedPorts = this.$store.getters['editor/selectedPorts']

      if (selctedPorts.length === 0) {
        this.$store.commit('editor/portDeSelectAll')
      }

      if (selctedPorts.length === 2) {
        let $p
        if (this.type.toLowerCase() === 'in') {
          $p = this.$parent.$parent.$parent.$parent.$parent
        } else if (this.type.toLowerCase() === 'out') {
          $p = this.$parent.$parent
        }
        $p.createConnection()
        this.$store.commit('editor/portDeSelectAll')
      }
      //   const anyInSelected = this.$store.getters['editor/clickedInPort']
      //   const anyOutSelected = this.$store.getters['editor/clickedOutPort']
      //   if (anyInSelected !== false && anyOutSelected !== false) {
      //     console.log('asd')
      //   }
    },
  },
}
</script>

// animation-name: color;
