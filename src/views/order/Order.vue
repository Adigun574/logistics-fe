<template>
  <div class="top-nav">
      <h4><i class="fa fa-arrow-left mr-4" @click="goToDashboard"></i> Details</h4>
  </div>
  <div class="sender-div">
      <p><b>Sender's Info:</b></p>
      <div class="wrap">
        <div class="email-div">
            <label for="saddress" class="text-muted">Pickup Address</label>
            <input id="saddress" type="text" class="cool">
        </div>
        <div class="email-div">
            <label for="sname" class="text-muted">Sender's Name</label>
            <input id="sname" type="text" class="cool">
        </div>
        <div class="email-div">
            <label for="sphone" class="text-muted">Sender's Phone Number</label>
            <input id="sphone" type="number" class="cool">
        </div>
      </div>
  </div>
  <div class="sender-div">
      <p><b>Receiver's Info:</b></p>
      <div class="wrap">
        <div class="email-div">
            <label for="raddress" class="text-muted">Drop-off Address</label>
            <input id="raddress" type="text" class="cool">
        </div>
        <div class="email-div">
            <label for="rname" class="text-muted">Receiver's Name</label>
            <input id="rname" type="text" class="cool">
        </div>
        <div class="email-div">
            <label for="rphone" class="text-muted">Receiver's Phone Number</label>
            <input id="rphone" type="number" class="cool">
        </div>
      </div>
  </div>
  <p class="continue"><b>CONTINUE</b></p>
</template>

<script>
import $ from 'jquery'

export default {
    methods:{
        goToDashboard() {
            this.$router.push("/dashboard")
        },
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

<style scoped>
.top-nav{
    padding:10px;
    border-bottom: 1px solid rgba(0,0,0,0.2);
}
.sender-div{
    box-shadow: 2px 2px 5px rgba(0,0,0,0.2);
    width: 95%;
    margin:auto;
    margin-top: 20px;
    padding-bottom: 1px;
}
.sender-div p{
    background-color: #dfdddd;
    padding: 10px;
    font-size: 18px;
}
.email-div button, .email-div input, .email-div optgroup, .email-div select, .email-div textarea{
    width: 95%;
    margin-left:auto;
    margin-right: auto;
    height: 50px;
    margin-bottom: 10px;
}
.continue{
    color:white;
    background-color: #111;
    width: 95%;
    margin: auto;
    margin-top: 20px;
    padding:10px;
    text-align: center;
    margin-bottom: 30px;
}

</style>