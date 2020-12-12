<template>
  <div class="nav">
    <b-navbar class="linkNav" type="dark" variant="dark">
      <b-navbar-nav>
        <b-nav-item href="/">Home</b-nav-item>
        <b-nav-item href="/CV">Lebenslauf</b-nav-item>
        <b-nav-item href="#">Offers</b-nav-item>

      </b-navbar-nav>
    </b-navbar>
    <b-navbar class="userNav" type="dark" variant="dark">
      <b-navbar-nav>
        <!-- Navbar dropdowns -->
        <b-navbar type="light">
          <b-nav-form>
            <b-form-input class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button variant="outline-success" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>
        </b-navbar>

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
