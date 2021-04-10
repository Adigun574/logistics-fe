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
        setTimeout(() => {
            this.$router.push('/login')
        },2000)
    }

}
</script>

<style scoped>
    .loading-body{
        /* width:100vw; */
        height: 100vh;
        padding: 0;
        margin: 0;
        /* background-image: url("../assets/logistics.jpg");
        background-size: contain;
        background-repeat: no-repeat; */
        background-color: rgba(0,0,0,0.3);
        /* overflow: hidden !important; */
        display: flex;
        justify-content: center;
        align-items: flex-end;
        padding-bottom: 100px;
    }
    .bottom-loader{
        /* position: fixed;
        bottom: 100px; */
        display: flex;
        justify-content: center;
    }

</style>