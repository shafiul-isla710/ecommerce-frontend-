import api from "@/axios/https.js";
import {ref} from "vue";
import {defineStore} from "pinia";
import cogoToast from "cogo-toast";


const authStore = defineStore("authStore", ()=>{
   async function sentOpt(credential){
       try{
           const res = await api.post('sent-otp',credential);
           return true
       }
       catch(error){
            if(error.status === 422){
                cogoToast.error(error.response.data.messages,{
                    position:"top-right",
                    size:"small"
                });
            }else{
                cogoToast.error(error.response.data.messages,{
                    position:"top-right",
                    size:"small"
                })
            }
            return false;
       }
   }
   async function login(otp){
       try{
           const res = await api.post('login',otp);
           localStorage.setItem("token",res.data.data.token);
           return true
       }
       catch(error){
           if(error.status === 422){
               cogoToast.error(error.response.data.messages,{
                   position:"top-right",
                   size:"small"
               })
           }
           else{
               cogoToast.error('Something went wrong',{
                   position:"top-right",
                   size:"small"
               })
           }
           return false;
       }
   }


   return {
       sentOpt,
       login,
   }

})

export default authStore;