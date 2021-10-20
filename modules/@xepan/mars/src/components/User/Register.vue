<template>
  <div>
    <v-btn-toggle v-model="loginMode" dense mandatory>
      <v-btn color="primary" x-small>By Email</v-btn>
      <v-btn color="primary" x-small>By Mobile</v-btn>
    </v-btn-toggle>
    <xEpanMarsUserRegistrationByEmail v-if="loginMode == 0" />
    <xEpanMarsUserRegistrationByMobile v-if="loginMode == 1" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginMode: 1,
    }
  },
}
</script>
