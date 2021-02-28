<template>
  <div class="top-nav">
      <h4><i class="fa fa-arrow-left" style="margin-right:50px" @click="goToDashboard"></i> Reset Password</h4>
  </div>
  <div class="data-div">
      <h5><b>Reset Password</b></h5>
      <div class="wrap">
        <div class="email-div">
            <label for="fname" class="text-muted">First Name</label>
            <input id="fname" type="text" class="cool">
        </div>
        <div class="email-div">
            <label for="email" class="text-muted">Email Address</label>
            <input id="email" type="text" class="cool">
        </div>
        <div class="email-div">
            <label for="phone" class="text-muted">Phone No</label>
            <input id="phone" type="text" class="cool">
        </div>
      </div>
        <p class="continue"><b>Reset Password</b></p>
  </div>
</template>

<script>
import $ from 'jquery'

export default {
    methods:{
        goToDashboard(){
            this.$router.push("/dashboard")
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