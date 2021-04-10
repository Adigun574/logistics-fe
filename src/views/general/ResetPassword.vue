<template>
  <FullScreenLoader v-if="showLoader"/>
  <div class="top-nav">
      <h4><i class="fa fa-arrow-left" style="margin-right:50px" @click="goToDashboard"></i> Reset Password</h4>
  </div>
  <div class="data-div">
      <h5><b>Reset Password</b></h5>
      <div class="wrap">
        <div class="email-div">
            <label for="fname" class="text-muted">Old Password</label>
            <input id="fname" type="password" class="cool" v-model="old_password">
        </div>
        <div class="email-div">
            <label for="email" class="text-muted">New Password</label>
            <input id="email" type="password" class="cool" v-model="new_password">
        </div>
        <div class="email-div">
            <label for="phone" class="text-muted">New Password</label>
            <input id="phone" type="password" class="cool" v-model="new_password2">
        </div>
      </div>
        <p class="continue" @click="resetPassword"><b>Reset Password</b></p>
  </div>
</template>

<script>
import $ from 'jquery'
import { baseUrl } from '../../utils/var'


export default {
    data(){
        return {
            old_password:'',
            new_password:'',
            new_password2:'',
            showLoader:false
        }
    },
    methods:{
        goToDashboard(){
            this.$router.push("/dashboard")
        },
        resetPassword(){
            this.currentUser = JSON.parse(localStorage.getItem("giglogisticsuser"))
            if(!this.old_password || !this.new_password || !this.new_password2){
                this.$toast.error('All fields are required')
                return
            }
            if(this.new_password != this.new_password2){
                this.$toast.error('New passwords do not match')
                return
            }
            this.showLoader = true
            let obj = {
                old_password:this.old_password,
                new_password:this.new_password,
                new_password2:this.new_password2,
                user_id:this.currentUser.id
            }
            fetch(`${baseUrl}/users/resetpassword`, {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify(obj),
            })
            .then(response => response.json())
            .then(data => {
                // console.log(data)
                this.showLoader = false
                this.resetFields()
                if(data.success){
                    this.$toast.success(data.message)
                }
                else{
                    this.$toast.error(data.message)
                }
            })
            .catch(err=>{
                console.log(err)
                this.resetFields()
                this.showLoader = false
                this.$toast.error('something wnet wrong')
            })
        },
        resetFields(){
            this.old_password = '',
            this.new_password = '',
            this.new_password2 = ''
        }
    },
    mounted() {
        $('input').on('focusin', function() {
        $(this).parent().find('label').addClass('active');
        });
        
        $('input').on('focusout', function() {
        if (!this.value) {
            $(this).parent().find('label').removeClass('active');
        }
        });
    }
}
</script>

<style>
.top-nav{
    padding:10px;
    border-bottom: 1px solid rgba(0,0,0,0.2);
    margin-bottom: 20px;
}
.data-div{
    width:90%;
    margin:auto;
}
.data-div h5{
    margin-bottom: 40px;
}
.email-div button, .email-div input, .email-div optgroup, .email-div select, .email-div textarea{
    width: 90%;
    margin-left:auto;
    margin-right: auto;
    margin: auto;
    height: 50px;
    margin-bottom: 30px;
}
.continue{
    color:white;
    background-color: #111;
    margin-top: 20px;
    padding:10px;
    text-align: center;
    margin-bottom: 30px;
}


</style>