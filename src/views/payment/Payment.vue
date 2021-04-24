<template>
  <div class="top-nav">
      <h4><i class="fa fa-arrow-left mr-4" @click="goToDashboard"></i> Payment Options</h4>
  </div>
  <div class="text-center">
      <p class="you">you are about to make a payment of:</p>
      <h3 class="amount"><b>NGN{{fundAmount}}</b></h3>
      <p class="select"><b>select a payment method</b></p>
  </div>
  <div>
      <!-- <p class="fintech"><b>paystack</b></p> -->
      <p class="fintech" @click="makePayment"><b>Flutterwave</b></p>
      <div style="display:flex; justify-content:center">
        <button class="btn btn-secondary text-center" data-toggle="modal" data-target="#testcard">Show Test Card Details</button>
      </div>
  </div>

<!--modal-->
  <div class="modal fade" id="testcard" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
        <div class="test-card-modal">
            <p><b>Card number:</b> 5531 8866 5214 2950</p>
            <p><b>cvv:</b> 564</p>
            <p><b>Expiry:</b> 09/32</p>
            <p><b>Pin:</b> 3310</p>
            <p><b>OTP:</b> 12345</p>
            <small class="text-danger">This is just a dummy card for testing. Shingbain no dey inside!!!</small>
        </div>
        </div>
    </div>
   </div>
</template>

<script>
import { baseUrl } from '../../utils/var'

export default {
    data(){
        return {
            fundAmount:0,
        }
    },
    created(){
        this.getUserDetails()
    },
    methods:{
        getUserDetails() {
            this.fundAmount = JSON.parse(localStorage.getItem("giguserwalletamount"))
        },
        goToDashboard(){
            this.$router.push("/dashboard")
        },
        makePayment() {
            this.currentUser = JSON.parse(localStorage.getItem("giglogisticsuser"))
            FlutterwaveCheckout({
            public_key: "FLWPUBK_TEST-943a6aed6abf096df2cb105a0c2d8b3a-X",
            tx_ref: `logisticsapp${Date.now()}`,
            amount: this.fundAmount,
            currency: "NGN",
            country: "NG",
            payment_options: "card, mobilemoneyghana, ussd",
            // redirect_url: // specified redirect URL
            //     "https://callbacks.piedpiper.com/flutterwave.aspx?ismobile=34", 
            meta: {
                consumer_id: 23,
                consumer_mac: "92a3-912ba-1192a",
            },
            customer: {
                email: "adigunibrahim574@gmail.com",
                phone_number: "08165230739",
                name: "High Chief",
            },
            callback: function (data) {
                console.log(data);
                let obj = {
                    transaction_id:data.transaction_id,
                    amount:JSON.parse(localStorage.getItem("giguserwalletamount")),
                    user_id:JSON.parse(localStorage.getItem("giglogisticsuser")).id
                }
                fetch(`${baseUrl}/payments/verifypayment`, {
                    method: 'POST',
                    headers: {
                    'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(obj),
                })
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                })
                .catch(err=>{
                    console.log(err)
                })

            },
            onclose: function() {
                // close modal
            },
            customizations: {
                title: "My store",
                description: "Payment for items in cart",
                logo: "https://assets.piedpiper.com/logo.png",
            },
            });
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
.test-card-modal{
    padding: 30px;
}

</style>