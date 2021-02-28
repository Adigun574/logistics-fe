<template>
  <div class="top-nav">
      <h4><i class="fa fa-arrow-left" style="margin-right:50px" @click="goToDashboard"></i> Help</h4>
  </div>
  <h1 class="question-icon"><i class="fa fa-question-circle"></i></h1>
  <p class="we-would">We would like to hear from you. Choose from the options below</p>
  <div class="contact-box">
      <h5><i class="fa fa-phone"></i> Contact Us</h5>
  </div>
  <div class="contact-box">
      <h5><i class="fa fa-file"></i> Report an issue</h5>
  </div>
  <div class="contact-box">
      <h5><i class="fa fa-comments"></i> FAQ</h5>
  </div>
  <div class="contact-box">
      <h5><i class="fa fa-info-circle"></i> About App</h5>
  </div>
</template>

<script>
export default {
    methods:{
        goToDashboard(){
            this.$router.push("/dashboard")
        }
    },

}
</script>

<style scoped>
.top-nav{
    padding:10px;
    border-bottom: 1px solid rgba(0,0,0,0.2);
    margin-bottom: 20px;
}
.question-icon{
    font-size: 70px;
    text-align: center;
}
.we-would{
    text-align: center;
    border-bottom: 1px solid rgba(0,0,0,0.1);
    padding-bottom: 30px;
}
.contact-box{
    padding:20px;
    border-bottom: 1px solid rgba(0,0,0,0.5);
}
.contact-box i{
    margin-right: 20px;
}

</style>