<template>
  <div>
    <v-toolbar>
      <v-toolbar-title> {{ mongooseModel }} </v-toolbar-title>
      <v-btn class="ml-2">
        <v-icon>mdi-plus</v-icon>
        Add
      </v-btn>
      <v-spacer></v-spacer>
    </v-toolbar>
    <grid :headers="headers" :mongoose-model="mongooseModel">
      <template v-for="(_, slot) of $scopedSlots" #[slot]="scope">
        <slot :name="slot" v-bind="scope" />
      </template>
    </grid>
  </div>
</template>

<script>
import grid from '../Grid'

export default {
  name: 'Crud',
  components: { grid },
  props: {
    allowCreate: Boolean,
    allowEdit: Boolean,
    allowDelete: Boolean,
    mongooseModel: { type: String, default: () => '__temp' },
    headers: { type: Array, default: () => [] },
  },
  mounted() {},
}
</script>
