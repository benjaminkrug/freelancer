<template>
  <div class="mainpage">
    <div class="header">
      <Nav/>
    </div>
    <div class="body">
      <router-view></router-view>
    </div>
    <div class="foot">
      <Footer/>
    </div>
  </div>
</template>

<script>
import Nav from './Nav/Nav.vue'
import Footer from './footerComponents/Footer.vue'

export default {
  name: 'Home',
  components: {
    Nav,
    Footer
  },
  props: {
    msg: String
  },
  computed: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mainpage{
  height: 100%;
}
.header{
  height: 10%;
  overflow-x: hidden;
}
.body{
  height: 83%;
  overflow-y: auto;
  overflow-x: hidden;
}
.foot{
  height: 7%;
  background-color: #343a40;
  overflow: hidden;
}
</style>
