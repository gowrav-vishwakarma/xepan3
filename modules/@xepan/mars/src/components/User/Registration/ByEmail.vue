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
          v-model="verifycode"
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
      verifycode:'',
      ecode:''
    }
  },
  methods: {
    register() {
      this.$axios
        .$post('/api/xepan/mars/users/registration', {
          useremail: this.useremail,
          userpassword: this.userpassword,
          verifycode: this.verifycode,
        })
        .then((response) => {
          console.log(response)
           
          console.log(this.useremail, this.userpassword,this.verifycode)
          this.panel = 'verification'
        })

        
    },
    verify() {

     
      this.$axios
        .$post('/api/xepan/mars/users/verifycode', {
          useremail: this.useremail,
          verifycode: this.verifycode,
          
        })
        .then(async(Response)=>{
          window.location.reload();
          await console.log(Response)
        }).catch((e) => {
          console.log(e)
         alert('message:"invalid OTP"')
        })
    },  
  },
}
</script>
