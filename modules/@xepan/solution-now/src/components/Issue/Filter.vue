<template>
  <v-container>
    <v-text-field prepend-inner-icon="search" label="Search" outlined>
    </v-text-field>
    <v-combobox
      label="Select Stack"
      multiple
      :items="filter.stackList"
      outlined
      hide-selected
    >
      <template v-slot:selection="{ item, parent, selected }">
        <v-chip :input-value="selected" label small>
          <span class="pr-2">
            {{ item }}
          </span>
          <v-icon small @click="parent.selectItem(item)"> $delete </v-icon>
        </v-chip>
      </template>
    </v-combobox>
    <v-combobox
      label="Select Issue Type"
      :items="filter.issuetype"
      outlined
      hide-selected
    >
      <template v-slot:selection="{ item, parent, selected }">
        <v-chip :input-value="selected" label small>
          <span class="pr-2">
            {{ item }}
          </span>
          <v-icon small @click="parent.selectItem(item)"> $delete </v-icon>
        </v-chip>
      </template>
    </v-combobox>
    <v-subheader>Bid Range</v-subheader>
    <v-row>
      <v-col>
        <v-text-field label="Min" outlined></v-text-field> </v-col
      ><v-col>
        <v-text-field label="Max" outlined></v-text-field> </v-col
    ></v-row>
    <v-row justify="center" align="center">
      <v-btn x-large width="300" color="primary">Filter</v-btn>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    filter: Object,
  },
  data() {
    return {}
  },
}
</script>
