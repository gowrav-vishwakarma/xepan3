<template>
  <div>
    <v-card-title primary-title> Login </v-card-title>
    <v-container>
      <v-text-field
        v-model="username"
        prepend-icon="person"
        filled
        label="username"
      ></v-text-field>
      <v-text-field
        v-model="password"
        prepend-icon="lock"
        filled
        label="password"
      ></v-text-field>
      <v-btn class="ma-10" color="primary">Login</v-btn>
      <v-btn text color="primary" class="ma-10"> Registration</v-btn>
      <v-btn text class="ma-10" color="primary">Forgot Password</v-btn>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
    }
  },
  methods: {},
}
</script>
