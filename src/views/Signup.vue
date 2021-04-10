<template>
  <FullScreenLoader v-if="showLoader"/>
  <div class="signup-form-body">
      <div>
          <img :src=images.gigLogo width="100px">
          <img src="@/assets/gig_logo.png" width="100px">
      </div>
    <div class="wrap cente">
        <div class="email-div">
            <label for="fname" class="text-muted">Name*</label>
            <input id="fname" type="text" class="cool" v-model="name">
        </div>
        <div class="password-div">
            <label for="password" class="text-muted">Email address*</label>
            <input type="email" class="cool" v-model="email">
        </div>
        <div class="phone-div">
            <div class="flag-ng-div">
                <p><span>&#127475;&#127468;</span> +234 <i class="fa fa-caret-down"></i></p>
            </div>
            <div class="password-div" style="flex:1">
                <label for="password" class="text-muted">Phone no*</label>
                <input type="number" class="cool" v-model="phone">
            </div>
        </div>
        <div class="password-div">
            <label for="password" class="text-muted">Password (min of six characters)*</label>
            <input type="password" class="cool" v-model="password">
        </div>
        <div class="password-div">
            <label for="password" class="text-muted">Re-enter Password*</label>
            <input type="password" class="cool" v-model="repassword">
        </div>
        <div class="password-div">
            <label for="password" class="text-muted">Referral-Code (Optional)</label>
            <input type="password" class="cool" v-model="referralcode">
        </div>

        <p class="login" @click="signup">PROCEED</p>
    </div>      
  </div>
</template>

<script>
import $ from 'jquery'
import FullScreenLoader from '../components/FullScreenLoader'
import { baseUrl } from '../utils/var';

export default {
    components:{FullScreenLoader},
    data() {
        return {
            name:"",
            email:"",
            phone:"",
            password:"",
            repassword:"",
            referralcode:"",
            images: {
                gigLogo: require('@/assets/gig_logo.png')
            },
            showLoader:false
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
    },
    methods:{
        signup(){
            let obj = {
                name:this.name,
                password:this.password,
                email:this.email,
                phone:this.phone,
                repassword:this.repassword,
                address:"",
                referral_code:this.referralcode,
            }
            if(obj.name == "" || obj.password == "" || obj.email == "" || obj.phone == "" || obj.repassword == ""){
                this.$toast.error('All fields marked * are required!')
            }
            else{
                if(obj.password.length<6){
                    this.$toast.error('Passwords must be at least six characters long!')
                }
                else{
                    if(obj.password != obj.repassword){
                        this.$toast.error('Passwords must match!')
                    }
                    else{
                        this.showLoader = true
                        fetch(`${baseUrl}/users/register`, {
                            method: 'POST',
                            headers: {
                            'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(obj),
                        })
                        .then(response => response.json())
                        .then(data => {
                            // console.log(data);
                            if(!data.success){
                                this.$toast.error(data.message)
                            }
                            else{
                                localStorage.setItem("giglogisticsuser",JSON.stringify(data.message))
                                this.$toast.success('Resgistration successful')
                                this.$router.push('/dashboard')
                            }
                            this.showLoader = false
                        })
                        .catch((error) => {
                            console.error(error);
                            this.showLoader = false
                            this.$toast.error('Registration failed')
                        });
                    }
                }
            }
        }
    }

}
</script>

<style scoped>
div.wrap div {
    position: relative;
  }
  
  label {
    position: absolute;
    top: 0;
    font-size: 14px;
    margin: 10px;
    padding: 0 10px;
    background-color: #FAFAFB;
    -webkit-transition: top .2s ease-in-out, 
                        font-size .2s ease-in-out;
    transition: top .2s ease-in-out, 
                font-size .2s ease-in-out;
  }
  
  .active {
    top:-20px;
    font-size: 14px;
    background-color: white;
    color:#020202 !important
  }
  
  input[type=number], input[type=text], input[type=email], input[type=password]{
    width: 100%;
    padding: 7px;
    border: 2px solid rgb(175, 175, 175);
    font-size: 20px;
    background-color: #FAFAFB;
    color: #020202;
    border-radius: 5px;
    height: 50px;
  } 
  
  input[type=number]:focus, input[type=text]:focus, input[type=email]:focus, input[type=password]:focus {
    outline: none;
    border: 2px solid #020202 !important;
  }

  /*----*/
  .signup-form-body{
      width:80%;
      margin: auto;
      margin-top: 30px;
  }
  .login{
    color:white;
    background-color: #020202;
    padding:5px;
    width:90%;
    margin: auto;
    text-align: center;
    font-size: 14px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .center{
    /* margin: 0;
    position: absolute;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%); */
    /* margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%); */
  }
  .email-div{
    margin-bottom: 15px;
  }
  .password-div{
    margin-bottom: 20px;
  }
  .phone-div{
      display: flex;
  }
  .flag-ng-div{
      flex: 1;
      font-size: 20px;
      display: flex;
      justify-content: space-between;
  }
  .flag-ng-div span{
      margin-right: 10px;
  }
  .flag-ng-div i{
      margin-left: 10px;
  }
</style>