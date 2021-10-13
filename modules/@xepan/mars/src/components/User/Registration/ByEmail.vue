<template>
  <v-container>
    <v-card v-if="panel == 'register'">
      <v-card-text>
        <v-text-field outlined prepend-icon="email" label="Email">
        </v-text-field>
        <v-text-field outlined prepend-icon="lock" label="Password">
        </v-text-field>
        <v-text-field outlined prepend-icon="lock" label="Confirm Password">
        </v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" class="ml-10" @click="register">Register</v-btn>
      </v-card-actions>
    </v-card>
    <v-card v-else>
      <v-card-text>
        <v-text-field outlined prepend-icon="email" label="Verification Code">
        </v-text-field>
      </v-card-text>

      <v-card-actions>
        <v-btn color="primary" class="ml-10" flat>Verify</v-btn>
        <v-btn color="primary" class="ml-10" text>skips</v-btn>
      </v-card-actions>
    </v-card>
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
    register() {
      this.panel = 'verification'
    },
  },
}
</script>
