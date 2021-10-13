<template>
  <v-container>
    <v-card>
      <v-card-text>
        <v-text-field
          outlined
          label="Title"
          hint="Phrase your query in short"
        ></v-text-field>
        <v-textarea
          outlined
          label="Description"
          hint="Describe in a bit more details"
        ></v-textarea>
        <v-combobox
          multiple
          :items="items"
          :menu-props="{ top: true, offsetY: true }"
          label="Stack"
          hide-selected
          small-chips
          solo
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
          label="Type"
          :items="items1"
          :menu-props="{ top: true, offsetY: true }"
          solo
        >
        </v-combobox>
      </v-card-text>
    </v-card>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      items: ['Vue', 'Nuxt', 'Node', 'Python', 'Angular'],
      items1: ['Setup Issue', 'How to Setup', 'Debug', 'Code Improvement'],
    }
  },
}
</script>
