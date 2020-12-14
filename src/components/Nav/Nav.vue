<template>
  <b-navbar class="nav" type="dark" variant="dark">
    <b-navbar-nav class="linkNav" animated slideInLeft slow>
      <img src="https://placekitten.com/g/30/30" alt="Kitten" id="animated-img1">
      <b-nav-item href="/">Home</b-nav-item>
      <b-nav-item href="/CV">Lebenslauf</b-nav-item>
      <b-nav-item href="/Skills">Skills</b-nav-item>
      <b-nav-item href="/Offers">Offers</b-nav-item>

    </b-navbar-nav>
    <b-navbar-nav class="userNav" animated slideInRight slow align="right">
      <!-- Navbar dropdowns -->
      <b-nav-form>
        <b-form-input class="mr-sm-2" placeholder="Search"></b-form-input>
        <b-button variant="outline-success" class="my-2 my-sm-0" type="submit">Search</b-button>
      </b-nav-form>

      <b-nav-item-dropdown text="Lang" right>
        <b-dropdown-item href="#">EN</b-dropdown-item>
        <b-dropdown-item href="#">ES</b-dropdown-item>
        <b-dropdown-item href="#">RU</b-dropdown-item>
        <b-dropdown-item href="#">FA</b-dropdown-item>
      </b-nav-item-dropdown>

      <b-nav-item-dropdown text="User" right>
        <b-dropdown-item href="#">Account</b-dropdown-item>
        <b-dropdown-item href="#">Settings</b-dropdown-item>
      </b-nav-item-dropdown>

    </b-navbar-nav>
  </b-navbar>
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
