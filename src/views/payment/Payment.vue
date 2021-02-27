<template>
  <div class="top-nav">
      <h4><i class="fa fa-arrow-left mr-4" @click="goToDashboard"></i> Payment Options</h4>
  </div>
  <div class="text-center">
      <p class="you">you are about to make a payment of:</p>
      <h3 class="amount"><b>NGN1000</b></h3>
      <p class="select"><b>select a payment method</b></p>
  </div>
  <div>
      <p class="fintech"><b>paystack</b></p>
      <p class="fintech"><b>Flutterwave</b></p>
  </div>
</template>

<script>
export default {
    methods:{
        goToDashboard(){
            this.$router.push("/dashboard")
        }
    }

}
</script>

<style>
.top-nav{
    padding:10px;
    border-bottom: 1px solid rgba(0,0,0,0.2);
}
.you{
    margin-top: 30px;
}
.amount{
    padding:20px;
    border-radius: 10px;
    border:1px solid black;
    width:50%;
    margin:auto;
    margin-top: 30px;
    margin-bottom: 60px;
}
.fintech{
    padding:30px;
    width: 90%;
    margin:auto;
    border-radius: 10px;
    border:1px solid black;
    margin-bottom: 40px;
    background-color: #F7F7F7;
}

</style>