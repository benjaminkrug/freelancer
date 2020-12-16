<template>
  <b-navbar class="nav" type="dark" variant="dark">
    <b-navbar-nav class="linkNav">
      <b-nav-item href="#">Help</b-nav-item>
    </b-navbar-nav>
    <b-navbar-nav class="userNav" align="right">
      <b-nav-item href="#">Impressum</b-nav-item>
      <b-nav-item href="#">Tipps</b-nav-item>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
export default {
  name: 'footerNav',
  props: {
  }
}
</script>

<style scoped>
.nav{
  height: 100%;
  display: flex;
  flex-flow: row;
}
.linkNav{
  width: 60%;
}
.userNav{
  flex-direction: row-reverse;
  width: -webkit-fill-available;
  padding-right: 30px;
  padding-left: 30px;
}
</style>
