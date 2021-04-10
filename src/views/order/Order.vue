<template>
  <FullScreenLoader v-if="showLoader"/>
<div v-if="!showLoader">
  <div class="top-nav">
      <h4><i class="fa fa-arrow-left mr-4" @click="goToDashboard"></i> Details</h4>
  </div>
  <div class="sender-div">
      <p><b>Sender's Info:</b></p>
      <div class="wrap">
        <div class="email-div">
            <label for="saddress" class="text-muted">Pickup Address</label>
            <input id="saddress" type="text" class="cool" v-model="order.from_location">
        </div>
        <div class="email-div">
            <label for="sname" class="text-muted">Sender's Name</label>
            <input id="sname" type="text" class="cool" v-model="order.sname">
        </div>
        <div class="email-div">
            <label for="sphone" class="text-muted">Sender's Phone Number</label>
            <input id="sphone" type="number" class="cool" v-model="order.sphone">
        </div>
        <div class="email-div">
            <label for="sdate" class="text-muted">Pickup Date</label>
            <input id="sdate" type="date" class="cool" v-model="order.from_date">
        </div>
      </div>
  </div>
  <div class="sender-div">
      <p><b>Receiver's Info:</b></p>
      <div class="wrap">
        <div class="email-div">
            <label for="raddress" class="text-muted">Drop-off Address</label>
            <input id="raddress" type="text" class="cool" v-model="order.to_location">
        </div>
        <div class="email-div">
            <label for="rname" class="text-muted">Receiver's Name</label>
            <input id="rname" type="text" class="cool" v-model="order.rname">
        </div>
        <div class="email-div">
            <label for="rphone" class="text-muted">Receiver's Phone Number</label>
            <input id="rphone" type="number" class="cool" v-model="order.rphone">
        </div>
        <div class="email-div">
            <label for="rdate" class="text-muted">Preferred Delivery Date</label>
            <input id="rdate" type="date" class="cool" v-model="order.to_date">
        </div>
      </div>
  </div>
  <div class="sender-div">
      <p><b>Package Info:</b></p>
      <div class="wrap">
        <div class="email-div">
            <label for="weight" class="text-muted">Weight (Kg)</label>
            <input id="weight" type="number" class="cool" v-model="order.weight">
        </div>
        <div class="email-div">
            <label for="length" class="text-muted">Length (inch)</label>
            <input id="length" type="number" class="cool" v-model="order.length">
        </div>
        <div class="email-div">
            <label for="width" class="text-muted">Width (inch)</label>
            <input id="width" type="number" class="cool" v-model="order.width">
        </div>
      </div>
  </div>
  <p class="continue" @click="checkPrice"><b>CONTINUE</b></p>

    <button type="button" class="btn btn-primary modal-open-btn d-none" data-toggle="modal" data-target=".bd-example-modal-sm">Small modal</button>

    <div class="modal fade bd-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-sm">
        <div class="modal-content">
            <div class="order-modal">
                <h3>This order will cost you ₦{{orderPrice}}</h3>
                <div class="order-modal-btn-div">
                    <button class="btn btn-success mr-2" @click="placeOrder">Proceed</button>
                    <button class="btn btn-danger close-modal-btn" data-dismiss="modal">Cancel</button>
                </div>
            </div>
        </div>
    </div>
    </div>
</div>
</template>

<script>
import $ from 'jquery'
import { baseUrl } from '../../utils/var';
import FullScreenLoader from '../../components/FullScreenLoader'



export default {
    components:{FullScreenLoader},
    data(){
        return{
            currentUser:null,
            orderPrice:0,
            showLoader:false,
            order:{
                from_location:'',
                from_date:'',
                to_location:'',
                to_date:'',        
                transport_mode:'bike',
                length:'',
                width:'',
                weight:'',
                sphone:'',
                sname:'',
                rphone:'',
                rname:'',
                price:0,
                user_id:null
            }
            // order:{
            //     from_location:'1, orita fogo',
            //     from_date:'2021-04-11',
            //     to_location:'1, Igbobi',
            //     to_date:'2021-04-15',        
            //     transport_mode:'bike',
            //     length:'10',
            //     width:'5',
            //     weight:'12',
            //     //
            //     sphone:'',
            //     sname:'',
            //     rphone:'09012345678',
            //     rname:'Com Mukaila',
            //     price:0,
            //     user_id:null
            // }
        }
    },
    methods:{
        goToDashboard() {
            this.$router.push("/dashboard")
        },
        checkPrice() {
            // $('#myModal').modal('show')
            //VALIDATING ALL FIELDS
            if(
                this.order.from_location==''||
                this.order.from_date==''||
                this.order.to_location==''||
                this.order.to_date==''||        
                this.order.transport_mode==''||
                this.order.length==''||
                this.order.width==''||
                this.order.weight==''||
                this.order.sphone==''||
                this.order.sname==''||
                this.order.rphone==''||
                this.order.rname==''
            ){
                this.$toast.error('All fields are required!')
            }
            else{
                this.orderPrice = Math.floor(Math.random() * 10000)
                this.order.price = this.orderPrice
                document.querySelector('.modal-open-btn').click()
            }

        },
        placeOrder(){
            document.querySelector('.close-modal-btn').click()
            this.showLoader = true            
            fetch(`${baseUrl}/orders/create`, {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify(this.order),
            })
            .then(response => response.json())
            .then(data => {
                // console.log(data)
                this.resetFields()
                this.showLoader = false
                if(data.success){
                    this.$toast.success(data.message)
                }
                else{
                    this.$toast.error(data.message)
                }
            })
            .catch((error) => {
                console.log(error)
                this.resetFields()
                this.showLoader = false
                this.$toast.error('something went wrong!')
            });
        },
        resetFields(){
            this.order = {
                from_location:'',
                from_date:'',
                to_location:'',
                to_date:'',        
                transport_mode:'bike',
                length:'',
                width:'',
                weight:'',
                sphone:'',
                sname:'',
                rphone:'',
                rname:'',
                price:0,
                user_id:null
            }
            this.order.sphone = this.currentUser.phone
            this.order.sname = this.currentUser.name
            this.order.user_id = this.currentUser.id
            this.handleInputFieldAnimations()
        },
        handleInputFieldAnimations(){
            //HANDLE INPUT FIELD ANIMATION IF VALUE EXISTS
            if(this.order.sname){
                $('#sname').parent().find('label').addClass('active');
            }
            if(this.order.sphone){
                $('#sphone').parent().find('label').addClass('active');
            }
            $('#rdate').parent().find('label').addClass('active');
            $('#sdate').parent().find('label').addClass('active');
        }
    },
    mounted() {
        //GET CURRENT USERS DETAILS
        this.currentUser = JSON.parse(localStorage.getItem("giglogisticsuser"))
        //AUTO POPULATE USER'S FIELDS
        this.order.sphone = this.currentUser.phone
        this.order.sname = this.currentUser.name
        this.order.user_id = this.currentUser.id
        this.handleInputFieldAnimations()
        //
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

.order-modal{
    padding:30px;
    text-align: center;
}
.order-modal-btn-div{
    display: flex;
    justify-content: center;
    margin-top: 20px;
}

</style>