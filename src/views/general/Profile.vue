<template>
  <div class="top-nav">
      <h4><i class="fa fa-arrow-left" style="margin-right:50px" @click="goToDashboard"></i> Profile</h4>
  </div>
  <h1 class="question-icon"><i class="fa fa-user"></i></h1>
  <p class="text-center"><b>Individual User Account</b></p>
  <div class="change-password-div">
      <p><router-link to="/reset-password"> change password </router-link></p>
      <h3><i class="fa fa-pencil-square-o"></i></h3>
  </div>
  
  <div class="data-div">
      <p><b><span class="mr-2">Referral code:</span><span class="mr-2">xyz12</span><span><i class="fa fa-exclamation-circle exclamation-icon"></i></span></b></p>
      <div class="wrap">
        <div class="email-div">
            <label for="fname" class="text-muted">Name</label>
            <input id="fname" type="text" class="cool" v-model="name" disabled>
        </div>
        <div class="email-div">
            <label for="email" class="text-muted">Email Address</label>
            <input id="email" type="text" class="cool" v-model="email" disabled>
        </div>
        <div class="email-div">
            <label for="phone" class="text-muted">Phone No</label>
            <input id="phone" type="text" class="cool" v-model="phone" disabled>
        </div>
      </div>
  </div>
  <p class="logout">LOGOUT</p>

</template>

<script>
import $ from 'jquery'


export default {
    data(){
        return {
            name:'',
            email:'',
            phone:''
        }
    },
    methods:{
        goToDashboard(){
            this.$router.push("/dashboard")
        },
        handleInputFieldAnimations(){
            //HANDLE INPUT FIELD ANIMATION IF VALUE EXISTS
            $('#fname').parent().find('label').addClass('active');
            $('#email').parent().find('label').addClass('active');
            $('#phone').parent().find('label').addClass('active');
        }
    },
    mounted() {
        //GET CURRENT USERS DETAILS
        this.currentUser = JSON.parse(localStorage.getItem("giglogisticsuser"))
        //AUTO POPULATE USER'S FIELDS
        this.name = this.currentUser.name
        this.email = this.currentUser.email
        this.phone = this.currentUser.phone
        this.handleInputFieldAnimations()

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

<style scoped>
.top-nav{
    padding:10px;
    border-bottom: 1px solid rgba(0,0,0,0.2);
    margin-bottom: 20px;
}
.question-icon{
    font-size: 70px;
    text-align: center;
}
.change-password-div{
    display: flex;
    justify-content: space-evenly;
}
/* .change-password-div p{
    color:blue;
    text-decoration: underline;
} */
.exclamation-icon{
    color:steelblue;
}
.data-div{
    width:90%;
    margin:auto;
}
.email-div button, .email-div input, .email-div optgroup, .email-div select, .email-div textarea{
    width: 90%;
    margin-left:auto;
    margin-right: auto;
    margin: auto;
    height: 50px;
    margin-bottom: 10px;
}
.logout{
    text-align: right;
    margin-top: 30px;
    margin-right: 50px;
    color: rgba(0,0,0,0.5);
}

</style>