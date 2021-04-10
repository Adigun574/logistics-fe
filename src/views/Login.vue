<template>
  <FullScreenLoader v-if="showLoader"/>
  <div style="display:flex; align-item:center; height:100vh">
    <div class="login-form-body">
      <div class="wrap cente">
          <div class="password-div">
              <label for="fname" class="text-muted">email</label>
              <input id="fname" type="email" class="cool" v-model="email" @input="validateEmail">
          </div>
          <div class="password-div">
              <label for="password" class="text-muted">password</label>
              <input id="password" type="password" class="cool" v-model="password" @input="validatePassword">
          </div>
          <p class="login" @click="login">Login</p>
          <div class="bottom-text">
            <p class="forgot">Forgot password</p>
            <p class="dont">Don't have an account? <span class="sign"><router-link to="/signup">Sign up</router-link></span></p>
          </div>
      </div>      
    </div>
  </div>
</template>


<script>
import $ from 'jquery'
import FullScreenLoader from '../components/FullScreenLoader'
import { baseUrl } from '../utils/var';



export default {
    components:{FullScreenLoader},
    data(){
      return{
        email:"",
        password:"",
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
      login(){
        let obj = {
          email:this.email,
          password:this.password
        }
        if(obj.email == "" && obj.password == ""){
          document.querySelector('input[type="email').style.border = "2px solid rgb(196, 18, 18)"
          document.querySelector('input[type="password').style.border = "2px solid rgb(196, 18, 18)"
          
        }
        else if(obj.email == ""){
          document.querySelector('input[type="email').style.border = "2px solid rgb(196, 18, 18)"
        }
        else if(obj.password == ""){
          document.querySelector('input[type="password').style.border = "2px solid rgb(196, 18, 18)"
        }
        else{
          this.showLoader = true
          fetch(`${baseUrl}/users/authenticate`, {
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
              this.$toast.success('Login successful')
              localStorage.setItem("giglogisticsuser",JSON.stringify(data.message))
              this.$store.dispatch('setUserDetailsAction',data.message)
              this.$router.push('/dashboard')
            }
            this.showLoader = false
          })
          .catch((error) => {
            console.error(error);
            this.showLoader = false
            this.$toast.error('Verification failed')
          });
        }
      },
      validateEmail(){
        if(this.email == ""){
          document.querySelector('input[type="email').style.border = "2px solid rgb(196, 18, 18)"
        }
        else{
          document.querySelector('input[type="email').style.border = "2px solid rgb(175, 175, 175)"
        }
      },
      validatePassword(){
        if(this.password == ""){
          document.querySelector('input[type="password').style.border = "2px solid rgb(196, 18, 18)"
        }
        else{
          document.querySelector('input[type="password').style.border = "2px solid rgb(175, 175, 175)"
        }
      }
    }
    

}
</script>

<style>
div.wrap div {
    position: relative;
    /* margin: 50px 0; */
    /* width: 90%;
    margin: auto; */
  }
  
  label {
    position: absolute;
    top: 0;
    font-size: 14px;
    margin: 10px;
    padding: 0 10px;
    /* background-color: #FAFAFB; */
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
  
  input[type=email], input[type=password]{
    width: 100%;
    padding: 7px;
    border: 2px solid rgb(175, 175, 175);
    font-size: 20px;
    /* background-color: #FAFAFB; */
    color: #020202;
    border-radius: 5px;
    height: 50px;
  } 
  
  input[type=email]:focus, input[type=password]:focus {
    outline: none;
    border: 2px solid #020202 !important;
  }

  /*----*/
  .login-form-body{
      width:80%;
      margin: auto;
      /* display: flex;
      justify-content: center; */
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
    margin: 0;
    position: absolute;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
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
  .forgot{
    margin-top: 20px;
    margin-bottom: 30px;
  }
  .dont{
    color: #02020288;
  }
  .sign{
    color: #020202;
    margin-left: 20px;
  }
  .bottom-text{
    text-align: center;
    font-size: 12px;
    color: #020202;
  }
  a{
    text-decoration: none;
    color:#020202;
  }

</style>