<template>
  <div>
    <div class="tab-header">
      <p @click="activateShipmentTab" v-bind:class="{ 'active-tab-header': isShipment }">Shipments</p>
      <p @click="activateWalletTab" v-bind:class="{ 'active-tab-header': !isShipment }">Wallet</p>
    </div>
    <div class="tab-body">
      <div v-if="isShipment">
        <div>
          <div class="order-card" v-for="order in orders" :key="order.id" data-toggle="modal" data-target="#paymodal" @click="setOrderAmount(order)">
            <div class="order-card-id-status">
              <h3 class="order-number">G{{formatOrderNumber(order.id)}}</h3>
              <div class="order-received-div">
                <p v-if="order.delivery_status == 'Order Received'"><b>Status:</b> Initiated</p>
                <p v-if="order.delivery_status == 'Enroute'"><b>Status:</b> Enroute</p>
                <p class="text-muted"><i class="fa fa-calendar"></i> {{order.from_date}}</p>
              </div>
            </div>
            <p class="paid" v-if="order.payment_status == 1">Paid</p>
            <p class="unpaid" v-if="order.payment_status == 0">Unpaid</p>
          </div>
        </div>
      </div>
      <!--wallet tab-->
      <div v-if="!isShipment">
        <div>
          <div class="order-card" v-for="payment in payments" :key="payment.id">
            <div class="order-card-id-status">
              <h3 class="payment-amount-credit" v-if="payment.transaction_type == 'credit'">₦{{payment.amount}}</h3>
              <h3 class="payment-amount-debit" v-if="payment.transaction_type == 'debit'">₦{{payment.amount}}</h3>
              <div class="order-received-div">
                <p><b>Type:</b> {{payment.transaction_type}}</p>
                <p class="text-muted"><i class="fa fa-calendar"></i> 00/00/0000</p>
              </div>
            </div>
            <p class="paid" v-if="payment.transaction_type == 'credit'">Credit</p>
            <p class="unpaid" v-if="payment.transaction_type == 'debit'">Debit</p>
          </div>
        </div>
      </div>
    </div>
  </div>


  <!-- Modal -->
    <div class="modal fade" id="paymodal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
            <div class="pay-modal">
                <h5>Pay ₦{{selectedOrderAmount}} to complete transaction</h5>
                <div>
                  <button class="btn btn-danger mr-2" @click="dismissModal">Cancel</button>
                  <button class="btn btn-success" @click="payForOrder">Confirm</button>
                </div>
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
      isShipment:true,
      currentUser:null,
      orders:[],
      payments:[],
      selectedOrderAmount:0,
      walletBalance:0,
      selectedOrder:null
    }
  },
  mounted() {
    this.currentUser = JSON.parse(localStorage.getItem("giglogisticsuser"))
    this.getOrdersByUserID()
    this.getPaymentsByUserID()
    this.getWalletBalance()
  },
  methods:{
    activateShipmentTab(){
      this.isShipment = true
    },
    activateWalletTab(){
      this.isShipment = false
    },
    getOrdersByUserID(){
      fetch(`${baseUrl}/orders/getordersbyuserid/${this.currentUser.id}`)
      .then(res=>res.json())
      .then(data=>{
        // console.log(data)
        this.orders = data?.message
      })
      .catch(err=>{
        console.log(err)
      })
    },
    getPaymentsByUserID(){
      fetch(`${baseUrl}/payments/getpaymentsbyuserid/${this.currentUser.id}`)
      .then(res=>res.json())
      .then(data=>{
        // console.log(data)
        this.payments = data?.message
      })
      .catch(err=>{
        console.log(err)
      })
    },
    formatOrderNumber(order){
      if(+order<10) return `00${order}`
      if(+order>9<100) return `0${order}`
      if(+order>99) return `${order}`
      else{
        return order
      }
    },
    getWalletBalance(){
      fetch(`${baseUrl}/payments/getuserwalletbalance/${this.currentUser.id}`)
      .then(res=>res.json())
      .then(data=>{
          // console.log(data)
          this.walletBalance = data.message?.balance
      })
      .catch(err=>{
          console.log(err)
      })
    },
    setOrderAmount(order){
      this.selectedOrderAmount = order.total_amount
      this.selectedOrder = order
    },
    dismissModal() {
      document.querySelector('#paymodal').style.display = 'none'
      document.querySelector('.modal-backdrop').style.display = 'none'
    },
    payForOrder() {
      if(this.walletBalance < this.selectedOrderAmount){
        this.$toast.error('Insufficicent funds!')
        return
      }
      let obj = {
        order_id:this.selectedOrder.order_id,
        amount:this.selectedOrder.total_amount,
        user_id:this.selectedOrder.user_id
      }
      fetch(`${baseUrl}/payments/makepayment`, {
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
    }
  }
}
</script>

<style scoped>
.tab-header{
  display: flex;
  justify-content: space-evenly;
  margin-top: 20px;
  width: 100%;
}
.active-tab-header{
  border-bottom: 3px solid black;
  padding-bottom: 10px;
}
.tab-body{
  padding:10px;
}
.order-card{
  display: flex;
  justify-content: space-between;
  border-radius: 5px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  padding:10px;
  margin-bottom: 20px;
}
.order-card-id-status{
  display: flex;
}
.order-number{
  align-self: center;
  margin-right: 10px;  
  color:white;
  background-color: #39BC7A;
  padding:10px;
  border-radius: 3px;
}
.order-received-div{
  align-self: center;
  line-height: 5px;
}
.paid{
  background-color: green;
  color:white;
  padding:3px 20px;
  align-self: flex-start;
  border-radius: 5px;
}
.unpaid{
  background-color: red;
  color:white;
  padding:3px 20px;
  align-self: flex-start;
  border-radius: 5px;
}
.payment-amount-credit{
  align-self: center;
  margin-right: 10px;  
  color: #39BC7A;
  width:100px
}
.payment-amount-debit{
  align-self: center;
  margin-right: 10px;  
  color: red;
  width:100px
}

.pay-modal{
  padding:30px;
  text-align: center;
}

</style>


