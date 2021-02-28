<template>
  <div class="top-nav">
      <h4><i class="fa fa-arrow-left" style="margin-right:50px" @click="goToDashboard"></i> Quick Quotes</h4>
  </div>
  <div class="disclaimer-div">
      <h3><i class="fa fa-exclamation-circle"></i></h3>
      <p>This is just an estimated price, the actual price when you create a 
          shipment may be a little more or a little less.
      </p>
  </div>
  <div class="divider-div">
  </div>
  <div class="data-div">
      <div class="wrap">
        <div class="email-div">
            <label for="raddress" class="text-muted">Origin (From)</label>
            <input id="raddress" type="text" class="cool">
        </div>
        <div class="email-div">
            <label for="rname" class="text-muted">Destination (To)</label>
            <input id="rname" type="text" class="cool">
        </div>
        <div class="row">
            <div class="col-6">
                <div class="email-div">
                    <label for="rphone" class="text-muted">Weight (Kg)</label>
                    <input id="rphone" type="number" class="cool">
                </div>
            </div>
            <div class="col-6">
                <div class="email-div">
                    <label for="rvalue" class="text-muted">Value (₦)</label>
                    <input id="rvalue" type="number" class="cool">
                </div>
            </div>
        </div>
        <div class="email-div">
            <label for="rquantity" class="text-muted">Destination (To)</label>
            <input id="rquantity" type="text" class="cool">
        </div>        
      </div>
        <p class="continue"><b>PROCEED</b></p>
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

<style scoped>
.top-nav{
    padding:10px;
    border-bottom: 1px solid rgba(0,0,0,0.2);
}
.disclaimer-div{
    display: flex;
    width:85%;
    margin:auto;
    margin-top: 40px;
}
.disclaimer-div h3{
    color:red;
    margin-right: 10px;
}
.disclaimer-div p{
    font-size: 14px;
}
.divider-div{
    width:100%;
    height:70px;
    background-color: #DEEEE9;
}

.email-div button, .email-div input, .email-div optgroup, .email-div select, .email-div textarea{
    width: 95%;
    margin-left:auto;
    margin-right: auto;
    height: 50px;
    margin-bottom: 10px;
}
.data-div{
    width:90%;
    margin:auto;
    margin-top: 30px;
}
.continue{
    color:white;
    background-color: #111;
    /* width: 95%;
    margin: auto; */
    margin-top: 20px;
    padding:10px;
    text-align: center;
    margin-bottom: 30px;
}

</style>