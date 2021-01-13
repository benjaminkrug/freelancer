<template>
  <b-navbar class="nav" type="dark" variant="dark">
    <b-navbar-nav class="linkNav animated slideInLeft">
      <img src="../../assets/BKICON.png" alt="Kitten" id="animated-img1" height="40">
      <b-nav-item href="/">Home</b-nav-item>
      <b-nav-item href="/CV">Lebenslauf</b-nav-item>
      <b-nav-item href="/Skills">Skills</b-nav-item>
      <b-nav-item href="/Offers">Offers</b-nav-item>
      <b-nav-item href="/Projects">Projects</b-nav-item>

    </b-navbar-nav>
    <b-navbar-nav class="userNav animated slideInRight" align="right">
      <div v-if="$auth.isAuthenticated">
        <b-nav-item @click.prevent="login">Account</b-nav-item>
        <b-nav-item @click.prevent="logout">Logout</b-nav-item>
      </div>
      <div v-else>
        <b-nav-item @click.prevent="login">Login</b-nav-item>
        <b-nav-item>Nothing</b-nav-item>
      </div>
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
    }
  },
  methods: {
    login() {
      this.$auth.loginWithRedirect();
    },
    logout() {
      this.$auth.logout();
      this.$router.push({ path: "/" });
    }
  },
  async created() {
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
