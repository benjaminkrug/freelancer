<template>
  <b-navbar class="nav" type="dark" variant="dark">
    <b-navbar-nav class="linkNav" v-bind:class="animation ? 'animated slideInLeft' : ''">
      <img src="https://placekitten.com/g/30/30" alt="Kitten" id="animated-img1">
      <b-nav-item href="/">Home</b-nav-item>
      <b-nav-item href="/CV">Lebenslauf</b-nav-item>
      <b-nav-item href="/Skills">Skills</b-nav-item>
      <b-nav-item href="/Offers">Offers</b-nav-item>
      <b-nav-item href="/Projects">Projects</b-nav-item>

    </b-navbar-nav>
    <b-navbar-nav class="userNav animated slideInRight" align="right">
      <b-nav-item href="#">Account</b-nav-item>
      <b-nav-item href="#">Settings</b-nav-item>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
export default {
  name: 'Nav',
  props: {
  },
  data(){
    return{
      animation: true
    }
  },
  async created() {
     this.animation = await new Promise(resolve => setTimeout(resolve, 2000))
     .then(() => {
       return false;
     })
  }
}
</script>

<style scoped>
.nav{
  display: flex;
  flex-flow: row;
  height: -webkit-fill-available;
}
.linkNav{
  width: 60%;
}
.userNav{
  width: -webkit-fill-available;
  align: right;
}
</style>
