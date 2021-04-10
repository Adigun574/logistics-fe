<template>
  <FullScreenLoader v-if="showLoader"/>
<!-- <div v-if="!showLoader"> -->
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
            <input id="raddress" type="text" class="cool" v-model="from">
        </div>
        <div class="email-div">
            <label for="rname" class="text-muted">Destination (To)</label>
            <input id="rname" type="text" class="cool" v-model="to">
        </div>
        <div class="row">
            <div class="col-6">
                <div class="email-div">
                    <label for="rphone" class="text-muted">Weight (Kg)</label>
                    <input id="rphone" type="number" class="cool" v-model="weight">
                </div>
            </div>
            <div class="col-6">
                <div class="email-div">
                    <label for="rvalue" class="text-muted">Value (₦)</label>
                    <input id="rvalue" type="number" class="cool" v-model="value">
                </div>
            </div>
        </div>
        <!-- <div class="email-div">
            <label for="rquantity" class="text-muted">Destination (To)</label>
            <input id="rquantity" type="text" class="cool">
        </div>         -->
      </div>
        <p class="continue" @click="getQuickQuote"><b>PROCEED</b></p>

        <!--modal-->
        <button type="button" class="btn btn-primary modal-open-btn d-none" data-toggle="modal" data-target=".bd-example-modal-sm">Small modal</button>

        <div class="modal fade bd-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-sm">
            <div class="modal-content">
                <div class="order-modal">
                    <h3>This order will cost you ₦{{quotePrice}}</h3>
                    <div style="margin-top:30px">
                        <button class="btn btn-primary close-modal-btn" data-dismiss="modal">Okay</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
  </div>
<!-- </div> -->
</template>

<script>
import $ from 'jquery'
import { baseUrl } from '../../utils/var'
import FullScreenLoader from '../../components/FullScreenLoader'


export default {
    components:{FullScreenLoader},
    data(){
        return{
            from:'',
            to:'',
            weight:'',
            value:'',
            quotePrice:0,
            showLoader:false
        }
    },
    methods:{
        goToDashboard(){
            this.$router.push("/dashboard")
        },
        getQuickQuote(){
            if(!this.from || !this.to || !this.weight || !this.value){
                this.$toast.error('All fields are required')
                return
            }
            this.showLoader = true
            fetch(`${baseUrl}/orders/quickquote`, {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify({}),
            })
            .then(response => response.json())
            .then(data => {
                // console.log(data)
                this.quotePrice = data.message
                this.showLoader = false
                document.querySelector('.modal-open-btn').click()
            })
            .catch(err=>{
                console.log(err)
            })
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

.order-modal{
    padding:30px;
    text-align: center;
}

</style>