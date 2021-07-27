<template>
  <v-card class="elevation-12">
    <v-toolbar dark color="primary">
      <v-toolbar-title>Login form</v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      <v-form ref="form" lazy-validation @submit.prevent="userLogin">
        <v-text-field
          v-model="login.username"
          prepend-icon="mdi-home"
          name="login"
          label="Login"
          type="text"
          required
        ></v-text-field>
        <v-text-field
          id="password"
          v-model="login.password"
          prepend-icon="mdi-lock"
          name="password"
          label="Password"
          type="password"
          required
        ></v-text-field>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="primary" @click="userLogin()">Login</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  layout: 'center',
  auth: false,
  data() {
    return {
      login: {
        username: '',
        password: '',
      },
    }
  },
  created() {
    if (this.$auth.loggedIn) {
      this.$router.push('/admin')
    }
  },
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        // submit form to server/API here...
      }
    },
    reset() {
      this.$refs.form.reset()
    },
    resetValidation() {
      this.$refs.form.resetValidation()
    },

    async userLogin() {
      // if (!this.validate()) return
      try {
        const response = await this.$auth.loginWith('adminlogin', {
          data: this.login,
        })
        console.log(response)
        this.$auth.setUser(response.data.user)
        this.$router.push('/admin')
      } catch (err) {
        console.log(err)
      }
    },
  },
}
</script>