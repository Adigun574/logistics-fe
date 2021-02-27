<template>
  <h6 class="openhamburger nav-btn" @click="goToDashboard"><i class="fa fa-arrow-left"></i></h6>
  <div class="top-div" @click="closeNav">
    <h5 class="hello"><b>Hello Curtis,</b></h5>
    <p>Please select the most suitable vehicle to pick up your item(s)</p>
  </div>

<div id="main">
  <div class="main-body">
    

    <div class="boxes">
        <div class="single-box" @click="goToOrderDetails">
            <div class="vehicle-div">
                <h1><i class="fa fa-motorcycle"></i></h1>
            </div>
            <div class="description-div">
                <h6><b>Motor Bike</b></h6>
                <p>Ideal for light weight items:<br>
                    International passport, human hair, mobile phones, medicine etc.
                </p>
            </div>
        </div>
        <div class="single-box" @click="goToOrderDetails">
            <div class="vehicle-div">
                <h1><i class="fa fa-car"></i></h1>
            </div>
            <div class="description-div">
                <h6><b>Car</b></h6>
                <p>Ideal for light weight items:<br>
                    International passport, human hair, mobile phones, medicine etc.
                </p>
            </div>
        </div>
        <div class="single-box" @click="goToOrderDetails">
            <div class="vehicle-div">
                <h1><i class="fa fa-truck"></i></h1>
            </div>
            <div class="description-div">
                <h6><b>Mini Van</b></h6>
                <p>Ideal for light weight items:<br>
                    International passport, human hair, mobile phones, medicine etc.
                </p>
            </div>
        </div>
        <div class="single-box" @click="goToOrderDetails">
            <div class="vehicle-div">
                <h1><i class="fa fa-truck"></i></h1>
            </div>
            <div class="description-div">
                <h6><b>Truck</b></h6>
                <p>Ideal for light weight items:<br>
                    International passport, human hair, mobile phones, medicine etc.
                </p>
            </div>
        </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
    methods: {
        goToDashboard() {
            this.$router.push("/dashboard")
        },
        goToOrderDetails() {
            this.$router.push("/order-details")
        }
    }

}
</script>

<style scoped>
.top-div{
  /* background-color: rgba(0,0,0,0.8); */
  background-image: linear-gradient(to bottom, rgba(0,0,0,0.5) , black);
  color: white;
  height:250px;
  padding-top:70px;
  padding-left: 10px;
}
.nav-btn{
  position: absolute;
}
.hello{
  margin-bottom: 30px;
}

.main-body{
  background-color: white;
  border-radius: 20px 20px 0 0;
  margin-top: -20px;
  padding-top: 20px;
}

.openhamburger{
  color: white;
  margin-left: 10px;
  margin-top: 10px;
}

.single-box{
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    width:90%;
    margin: auto;
    overflow:hidden;
    /* padding:10px; */
    box-shadow: 2px 2px 5px rgba(0,0,0,0.3);
    height: 100px;
    margin-bottom: 20px;
}
.vehicle-div{
    background-color: #E5E5E5;
    flex:3;
    padding:10px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.description-div{
    background-color: #F6F6F6;
    flex: 7;
    padding:10px;
    font-size: 12px;
}
.description-div p{
    line-height: 17px;
    color:#888888
}

</style>