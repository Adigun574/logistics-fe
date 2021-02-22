<template>
  <div class="loading-body">
      <div class="bottom-loader">
        <FlightLoader />   
      </div>
  </div>
</template>

<script>

import FlightLoader from '../components/FlightLoader';
export default {
    components:{FlightLoader},
    created() {
        // console.log('yes')
        setTimeout(() => {
            this.$router.push('/login')
        },2000)
    }

}
</script>

<style scoped>
    .loading-body{
        width:100vw;
        height: 100vh;
        padding: 0;
        margin: 0;
        /* background-image: url("../assets/logistics.jpg");
        background-size: cover;
        background-repeat: no-repeat; */
        background-color:red;
        /* overflow: hidden !important; */
    }
    .bottom-loader{
        position: fixed;
        bottom: 100px;
    }

</style>