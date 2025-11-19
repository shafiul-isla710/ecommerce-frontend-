<style scoped>

</style>

<template>

  <!-- START SECTION BREADCRUMB -->
  <div class="breadcrumb_section bg_gray page-title-mini">
    <div class="container"><!-- STRART CONTAINER -->
      <div class="row align-items-center">
        <div class="col-md-6">
          <div class="page-title">
            <h1>Login</h1>
          </div>
        </div>
        <div class="col-md-6">
          <ol class="breadcrumb justify-content-md-end">
            <li class="breadcrumb-item"><router-link :to="{name:'Home'}">Home</router-link></li>
            <li class="breadcrumb-item"><a href="#">Pages</a></li>
            <li class="breadcrumb-item active">Login</li>
          </ol>
        </div>
      </div>
    </div><!-- END CONTAINER-->
  </div>
  <!-- END SECTION BREADCRUMB -->

  <!-- START LOGIN SECTION -->
  <div class="login_register_wrap section">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xl-6 col-md-10">
          <div class="login_wrap">
            <div class="padding_eight_all bg-white">
              <div class="heading_s1">
                <h3>Login</h3>
              </div>
                <div class="form-group mb-3">
                  <input type="text" v-model="otp" class="form-control" name="email" placeholder="Enter OTP">
                  <div v-if="error.otp" class="text-danger">{{error.otp}}</div>
                </div>
                <div class="form-group mb-3">
                  <button @click="login" type="submit" class="btn btn-fill-out btn-block" name="login">Log in</button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- END LOGIN SECTION -->
</template>

<script setup>
import authStore from "@/store/authStore.js";
import {reactive, ref} from "vue";
import {useRouter} from "vue-router";
import cogoToast from "cogo-toast";

const otp = ref('');
const router = useRouter();
const error = reactive({

})
const login = async () => {
  Object.keys(error).forEach((key)=>{
    delete error[key];
  })
  if(!otp.value){
    error.otp = 'Enter Valide OTP'
  }
  else{
    const result = await authStore().login({
      otp: otp.value,
    });
  }


}

</script>