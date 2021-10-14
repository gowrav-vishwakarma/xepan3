<template>
  <v-container>
    <v-card v-if="createMode == 'basic'">
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
          outlined
          :items="stackList"
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
          multiple
          hide-selected
          :items="issueType"
          :menu-props="{ top: true, offsetY: true }"
          solo
          outlined
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

        <v-checkbox
          v-model="attachMedia"
          label="Attach Video recording/Screen Recording"
        >
        </v-checkbox>

        <v-card-actions class="ml-10">
          <v-btn
            class="ml-10 center"
            width="200px"
            color="primary"
            @click="createIssue"
            >Create</v-btn
          >
        </v-card-actions>
      </v-card-text>
    </v-card>
    <v-card v-if="createMode == 'AudioVideo'">
      <v-row align="center" justify-center>
        <v-col cols="6">
          <v-container fluid>
            <v-checkbox
              v-model="avOptions"
              value="screenRecording"
              label="Screen Recording"
            ></v-checkbox>
            <v-checkbox
              v-model="avOptions"
              value="recordAudio"
              label="Record audio with Mic"
            ></v-checkbox>
            <v-checkbox
              v-model="avOptions"
              value="videoRecording"
              label="Video Recording"
            ></v-checkbox>
            <v-checkbox
              v-model="avOptions"
              value="recordSystemSound"
              label="Record System Sound"
            ></v-checkbox>
            <v-btn color="primary"> Start Recording</v-btn>
          </v-container>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      stackList: ['Vue', 'Nuxt', 'Node', 'Python', 'Angular'],
      issueType: ['Setup Issue', 'How to Setup', 'Debug', 'Code Improvement'],
      avOptions: ['screenRecording', 'recordAudio'],
      createMode: 'basic',
      attachMedia: 0,
    }
  },
  methods: {
    createIssue() {
      if (this.attachMedia) this.createMode = 'AudioVideo'
    },
  },
}
</script>
