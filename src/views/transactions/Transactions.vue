<template>
  <div class="top-nav">
      <h4><i class="fa fa-arrow-left mr-4" @click="goToDashboard"></i> Transactions</h4>
  </div>
  <div class="top-box">
      <div>
          <p>Order</p>
          <h6><b>0</b></h6>
      </div>
      <div style="width:1px; border:1px solid white; height:50px">

      </div>
      <div>
          <p>Total Balance</p>
          <h6><b>₦0</b></h6>
          <p class="fund" data-toggle="modal" data-target="#exampleModalCenter">Fund Wallet</p>
      </div>
  </div>
  <div class="date-search">
      <p>Search by date</p>
      <p><i class="fa fa-calendar"></i></p>
  </div>
  <TransactionsTab />
    <!-- Modal -->
    <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
        <div class="fund-modal">
            <h5><b>FUND WALLET</b></h5>
            <input type="number" class="fund-input" placeholder="Enter amount" v-model="fundAmount">
            <div class="fund-wallet-footer">
            <h5 @click="dismissModal"><b>CANCEL</b></h5>
            <h5 @click="fundWallet"><b>FUND</b></h5>
            </div>
        </div>
        </div>
    </div>
    </div>
</template>

<script>
import TransactionsTab from './TransactionsTab.vue'
export default {
    data(){
        return {
        fundAmount:null
        }
    },
    components:{TransactionsTab},
    methods:{
        goToDashboard(){
            this.$router.push("/dashboard")
        },
        dismissModal() {
            document.querySelector('#exampleModalCenter').style.display = 'none'
            document.querySelector('.modal-backdrop').style.display = 'none'
        },
        fundWallet() {
            if(!this.fundAmount){
              this.$toast.error('Enter a valid amount')
              return
            }
            else{
              document.querySelector('#exampleModalCenter').style.display = 'none'
              document.querySelector('.modal-backdrop').style.display = 'none'
              this.$router.push("/payment")
            }
        }
    }

}
</script>

<style scoped>
.top-nav{
    padding:10px;
    border-bottom: 1px solid rgba(0,0,0,0.2);
}
.top-box{
    background-color: black;
    color: white;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    margin: auto;
    justify-content: space-around;
    margin-top: 20px;
    text-align: center;
    padding: 10px;
}
.fund{
    background-color: #39BC7A;
    padding: 5px;
    border-radius: 5px;
    font-size: 12px;
}
.date-search{
    display: flex;
    justify-content: space-around;
    align-items: center;
    border:1px solid #555;
    border-radius: 30px;
    /* padding: 5px; */
    width:80%;
    margin:auto;
    color:rgb(124, 124, 124);
    margin-top: 20px;
    height:50px;
}

/*FUND WALLET MODAL*/
.fund-modal{
  padding:40px;
}
.fund-input{
  border:none;
  border-bottom: 1px solid black;
  width:100%;
  margin-top: 30px;
}
.fund-wallet-footer{
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
}
</style>