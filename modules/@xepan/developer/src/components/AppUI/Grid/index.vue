<template>
  <v-data-table
    :headers="headers"
    :items="data"
    class="elevation-1"
    item-key="_id"
  >
    <template v-for="(_, slot) of $scopedSlots" #[slot]="scope"
      ><slot :name="slot" v-bind="scope"
    /></template>
  </v-data-table>
</template>

<script>
export default {
  name: 'Grid',
  props: {
    headers: { type: Array, default: () => [] },
    mongooseModel: { type: String, default: () => '__temp' },
  },
  data() {
    return {
      data: [],
    }
  },

  async fetch() {
    await this.$axios
      .$get('/api/xepan/developer/v1/' + this.mongooseModel)
      .then((data) => (this.data = data))
  },
}
</script>
