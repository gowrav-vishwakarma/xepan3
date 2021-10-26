<template>
  <v-container>
    <div v-if="panel == 'register'">
      <v-card-text>
        <v-text-field
          v-model="useremail"
          outlined
          prepend-icon="email"
          label="Email"
        >
        </v-text-field>
        <v-text-field
          v-model="userpassword"
          outlined
          prepend-icon="lock"
          label="Password"
        >
        </v-text-field>
        <v-text-field outlined prepend-icon="lock" label="Confirm Password">
        </v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" class="ml-10" @click="register">Register</v-btn>
      </v-card-actions>
    </div>
    <div v-else>
      <v-card-text>
        <v-text-field
          v-model="emailcode"
          outlined
          prepend-icon="email"
          label="Verification Code"
        >
        </v-text-field>
      </v-card-text>

      <v-card-actions>
        <v-btn color="primary" class="ml-10" flat @click="verify">Verify</v-btn>
        <v-btn color="primary" class="ml-10" text>skips</v-btn>
      </v-card-actions>
    </div>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      panel: 'register',
      useremail: '',
      userpassword: '',
      emailcode: '',
    }
  },
  methods: {
    register() {
      this.$axios
        .$post('/api/xepan/mars/users/registration', {
          useremail: this.useremail,
          userpassword: this.userpassword,
        })
        .then((response) => {
          console.log(response)
          console.log(this.useremail, this.userpassword)
          this.panel = 'verification'
        })
    },
    verify() {
      this.$axios
        .$post('/api/xepan/mars/users/verifycode', {
          useremail: this.useremail,
          emailcode: this.emailcode,
        }).then(async(Response)=>{

         await console.log(Response.data) 
        }).catch((e) => {
         alert('message:"invalid code"')
        })
      if (this.emailcode === "1234") {
        
        this.$router.push("/").catch(()=>{});

      }else {
           alert('message:"invalid code"')
       }
    },  
  },
}
</script>
