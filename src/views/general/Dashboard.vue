<template>
  <!-- <button class="openbtn nav-btn" @click="openNav">&#9776;</button> -->
  <h3 class="openhamburger nav-btn" @click="openNav">&#9776;</h3>
  <div class="top-div" @click="closeNav">
    <h3>GIG</h3>
    <h5 class="hello">Hello, Curtis</h5>
    <div class="input-track-div">
      <input type="text" placeholder="Waybill Number">
      <p>TRACK</p>
    </div>
    <p class="view-profile">View Profile</p>
  </div>
  <div id="mySidebar" class="sidebar">
    <a href="javascript:void(0)" class="closebtn" @click="closeNav">&times;</a>
    <a href="#">About</a>
    <a href="#">Services</a>
    <a href="#">Clients</a>
    <a href="#">Contact</a>
  </div>

<div id="main" @click="closeNav">
  <!-- <button class="openbtn" @click="openNav">&#9776; Open Sidebar</button> -->
  <div class="main-body">
    <div class="wallet-div">
      <div class="wallet-div-1">
        <p>Wallet Balance</p>
        <div>
          <h3><i class="fa fa-wallet"></i></h3>
          <h5>₦0</h5>
        </div>
      </div>
      <div>
        <p class="fund">Fund Wallet</p>
      </div>
    </div>

    <div class="boxes">
      <div class="box-row" style="margin-bottom:5px">
        <div class="single-box">
          <div class="single-inner-box single-box-inner-left">
            <div class="box">
              <h1><i class="fa fa-shipping-fast"></i></h1>
              <h6><b>Ship Now</b></h6>
              <p>Request a pickup</p>
            </div>
          </div>
        </div>
        <div class="single-box">
          <div class="single-inner-box single-box-inner-right">
            <div class="box">
              <h1><i class="fa fa-truck"></i></h1>
              <h6><b>Xpress Drop-off</b></h6>
              <p>Fast track shipment drop-off</p>
            </div>
          </div>
        </div>
      </div>
      <div class="box-row">
        <div class="single-box">
         <div class="single-inner-box single-box-inner-left">
            <div class="box">
              <h1><i class="fa fa-wallet"></i></h1>
              <h6><b>Transactions</b></h6>
              <p>Customer dashboard</p>
            </div>
          </div>
        </div>
        <div class="single-box">
          <div class="single-inner-box single-box-inner-right">
            <div class="box">
              <h1><i class="fa fa-plane"></i></h1>
              <h6><b>Oversea Shipping</b></h6>
              <p>Ship from USA to Nigeria</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  methods:{
          openNav() {
            document.getElementById("mySidebar").style.width = "250px";
            document.getElementById("main").style.marginLeft = "250px";
          },
          closeNav() {
            document.getElementById("mySidebar").style.width = "0";
            document.getElementById("main").style.marginLeft = "0";
          }
  }


}
</script>

<style>
.top-div{
  /* background-color: rgba(0,0,0,0.8); */
  background-image: linear-gradient(to bottom, rgba(0,0,0,0.5) , black);
  color: white;
  height:250px;
  text-align: center;
  padding-top:30px
}
.nav-btn{
  position: absolute;
}
.hello{
  margin-bottom: 30px;
}
.input-track-div{
  display: flex;
  justify-content: center;
}
.input-track-div input{
  height: 50px;
}
.input-track-div p{
  background-color: #474747;
  height: 50px;
  font-size: 10px;
  padding: 20px;
  margin-left: 10px;
  display: flex;
  align-items: center;
}
.view-profile{

}

#main{

}
.main-body{
  background-color: white;
  border-radius: 20px 20px 0 0;
  margin-top: -20px;
  padding-top: 20px;
}

.wallet-div{
  display: flex;
  justify-content: space-between;
  padding: 15px;
  background-color: #F7F7F7;
  width:90%;
  margin: auto;
  /* margin-top: 20px; */
  border-radius: 10px;
  align-items: center;
}
.wallet-div-1 p{
  margin-bottom: 0px;
}
.wallet-div-1 div{
  display: flex;
  align-items: center;
}
.wallet-div-1 h3{
  color:#39BC7A;
  border-radius: 50%;
  padding: 10px;
  background-color: #DEEEE9;
  margin-right: 5px;
}
.fund{
  color:white;
  background-color: #39BC7A;
  padding: 10px;
  border-radius:5px;
  font-size: 12px;
}

.boxes{
  width:90%;
  margin: auto;
  margin-top: 15px;
}
.box-row{
  display: flex;
  justify-content: space-between;
}
.single-box{
  /* border: 1px solid red; */
  width:100%;
}
.single-inner-box{
  background-color: #F7F7F7;
  border-radius: 5px;
  height: 100%;
}
.single-box-inner-left{
  width: 95%;
}
.single-box-inner-right{
  width: 95%;
  margin-left: auto;
}
.box{
  padding: 30px 15px 5px 15px;
}
.box p{
  font-size: 12px;
}







/* The sidebar menu */
.sidebar {
  height: 100%; /* 100% Full-height */
  width: 0; /* 0 width - change this with JavaScript */
  position: fixed; /* Stay in place */
  z-index: 1; /* Stay on top */
  top: 0;
  left: 0;
  background-color: #111; /* Black*/
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 60px; /* Place content 60px from the top */
  transition: 0.5s; /* 0.5 second transition effect to slide in the sidebar */
}

/* The sidebar links */
.sidebar a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  transition: 0.3s;
}

/* When you mouse over the navigation links, change their color */
.sidebar a:hover {
  color: #f1f1f1;
}

/* Position and style the close button (top right corner) */
.sidebar .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}

/* The button used to open the sidebar */
/* .openbtn {
  font-size: 20px;
  cursor: pointer;
  background-color: #111;
  color: white;
  padding: 10px 15px;
  border: none;
} */
.openhamburger{
  color: white;
  margin-left: 10px;
  margin-top: 10px;
}

.openbtn:hover {
  background-color: #444;
}

/* Style page content - use this if you want to push the page content to the right when you open the side navigation */
#main {
  transition: margin-left .5s; /* If you want a transition effect */
  /* padding: 20px; */
}

/* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */
@media screen and (max-height: 450px) {
  .sidebar {padding-top: 15px;}
  .sidebar a {font-size: 18px;}
}


</style>