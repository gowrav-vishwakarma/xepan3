<template>
  <v-container>
    <div v-if="panel == 'register'">
      <v-card-text>
        <v-text-field outlined label="Mobile Number"></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" @click="Register">Register</v-btn>
      </v-card-actions>
    </div>
    <div v-else>
      <v-card-text>
        <v-text-field outlined label="OTP"></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary">Verity</v-btn>
      </v-card-actions>
    </div>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      panel: 'register',
    }
  },
  methods: {
    Register() {
      console.log('Success')
      this.panel = 'Verification'
    },
  },
}
</script>
