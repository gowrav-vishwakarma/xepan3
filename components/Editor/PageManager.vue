<template>
  <span>
    <v-btn color="success" x-small dark @click="dialog = true">
      Open Dialog
    </v-btn>
    <v-dialog v-model="dialog" persistent max-width="50%">
      <v-card>
        <v-card-title>
          <span class="headline">Pages</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <vnatk-crud v-if="dialog" :options="crudoptions" />
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click.native="dialog = false">
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </span>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      crudoptions: {
        service: this.$axios,
        basepath: '/api/web-editor/vnatk',
        model: 'User',
        read: {
          modeloptions: {
            attributes: ['username'],
          },
          serversidepagination: true,
        },
        actions: true,
        defaultActionPlacement: 'buttonGroup',

        override: {},
      },
    }
  },
}
</script>