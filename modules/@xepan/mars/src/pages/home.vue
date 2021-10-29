<template>
  
    <v-row   justify="center"  class="mt-10">
      <v-col cols="12"
      sm="12"
      md="8"
      lg="6">
    <div>
      <v-row justify="center">
        <v-btn-toggle  v-model="loginMode"  dense mandatory>
      <v-btn color="primary" large>Login</v-btn>
      <v-btn color="primary" large>Registration</v-btn>
    </v-btn-toggle>
   </v-row>
    <!-- <XEpanMarsUserLogin v-if="loginMode == 0" /> -->
    <!-- <XEpanMarsUserRegister v-if="loginMode == 1" /> -->
    <XEpanMarsUserLogin v-if="loginMode == 0" class="ma-10"  />
  
    <XEpanMarsUserRegister v-if="loginMode == 1" class="ma-10"  />

  </div>
  </v-col>
</v-row>
  
</template>

<script>
export default {

  data(){

    return{
      loginMode:0,
    }
  }

}
</script>
