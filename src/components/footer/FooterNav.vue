<template>
  <div class="nav">
    <b-navbar class="linkNav" type="dark" variant="dark">
      <b-navbar-nav>
        <b-nav-item href="#">Help</b-nav-item>
      </b-navbar-nav>
    </b-navbar>
    <b-navbar class="userNav" type="dark" variant="dark">
      <b-navbar-nav>
        <b-nav-item href="#">Impressum</b-nav-item>
        <b-nav-item href="#">Tipps</b-nav-item>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  props: {
  }
}
</script>

<style scoped>
.nav{
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
