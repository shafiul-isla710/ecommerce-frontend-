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
                <h3>Send OTP</h3>
              </div>

                <div class="form-group mb-3">
                  <input type="text"  v-model="name" class="form-control" name="name" placeholder="Your Name">
                  <div v-if="error.name" class="text-danger">{{error.name}}</div>
                </div>

                <div class="form-group mb-3">
                  <input class="form-control" v-model="email"  type="email" name="email" placeholder="Your Email">
                  <div v-if="error.email" class="text-danger">{{error.email}}</div>
                </div>
                <div class="login_footer form-group mb-3">
                  <div class="chek-form">
                    <div class="custome-checkbox">
                      <input class="form-check-input" type="checkbox" name="checkbox" id="exampleCheckbox1" value="">
                      <label class="form-check-label" for="exampleCheckbox1"><span>Remember me</span></label>
                    </div>
                  </div>
                  <a href="#">Forgot password?</a>
                </div>
                <div class="form-group mb-3">
                  <button @click="sentOpt" class="btn btn-fill-out btn-block" >Sent OTP</button>
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


const router = useRouter();
const name = ref('')
const email = ref('')

const error = reactive({})

const sentOpt = async()=>{
  Object.keys(error).forEach((key)=>{
    delete error[key]
  })
  if(!name.value){
    error.name = 'Enter Your Name'
  }
  if(!email.value){
    error.email = 'Enter Your Email'
  }
  if(name.value.length > 0 && email.value.length > 0){
    const result = await authStore().sentOpt({
      'name': name.value,
      'email': email.value,
    })

    if(result === true){
      cogoToast.success('sent OTP',{
        position:"top-right",
        size:"small",
      })
      setTimeout(()=>{
        router.push('/login')
      },1000)
    }
  }

}


</script>