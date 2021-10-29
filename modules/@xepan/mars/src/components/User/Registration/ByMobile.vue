<template>
  <v-container>
    <div v-if="panel == 'register'">
      <v-card-text>
        <v-text-field v-model="mobilenumber" outlined label="Mobile Number"></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" @click="Registermobilenumber">Register</v-btn>
      </v-card-actions>
    </div>
    <div v-else>
      <v-card-text>
        <v-text-field v-model="otp" outlined label="OTP"></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-btn @click="Verify" color="primary">Verity</v-btn>
      </v-card-actions>
    </div>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      panel: 'register',
      mobilenumber:"",
      otp:''
    }
  },
  methods: {
    Registermobilenumber() {
      console.log('Success')
      this.panel = 'Verification'

 this.$axios.$post('/api/xepan/mars/users/registermobile',{
    otp:this.otp,
    mobilenumber:this.mobilenumber
 }).then((Response)=>{
   console.log(Response)
 })

      
    },
     Verify(){
       this.$axios.$post('/api/xepan/mars/users/verifyotp',{
         mobilenumber:this.mobilenumber,
         otp:this.otp,
         
       }).then(async(Response)=>{
         
         window.location.reload();
         await console.log(Response)

       }).catch((error)=>{
         console.log(error)
         alert("Message: invalid otp")
       })

 }
  },
}
</script>
