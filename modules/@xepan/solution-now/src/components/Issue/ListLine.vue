<template>
  <v-container>
    <v-card>
      <v-row justify="space-between">
        <v-col class="pa-0" cols="12" sm="12" md="3" lg="3">
          <v-list-item>
            <v-list-item-avatar class="ml-5" tile size="150" color="grey" right>
              <v-icon> play_circle_filled </v-icon>
            </v-list-item-avatar>
          </v-list-item>
          <v-list-item>
            <v-chip
              x-small
              v-for="(lang, index) in issue.languages"
              :key="index"
              >{{ lang }}
            </v-chip>
          </v-list-item>
        </v-col>
        <v-col cols="12" sm="12" md="9" lg="9" class="pa-0">
          <v-list-item-content>
            <p class="font heading font-weight-bold">{{ issue.title }}</p>
          </v-list-item-content>
          <v-list-item-content class="font-weight-light">
            {{ issue.description }}
          </v-list-item-content>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="pa-0" cols="3">
          <v-list-item>
            <v-list-item-content>
              <span class="font-weight-light font caption"
                ><XEpanMarsUserVarificationBadge
                  :status="issue.user.verification"
                />
                {{ issue.user.fullname }}</span
              ></v-list-item-content
            >
          </v-list-item>
        </v-col>
        <v-col class="pa-0" cols="9">
          <v-list-item>
            <v-chip label v-for="(stacks, index) in issue.stack" :key="index">{{
              stacks
            }}</v-chip>
            <v-list-item-content>
              <span class="text-end font caption">3 Days Ago</span>
            </v-list-item-content>
          </v-list-item>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>
<script>
export default {
  components: {},
  props: {
    issue: Object,
  },
}
</script>
