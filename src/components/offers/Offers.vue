<template>
  <div class="grid">
    <div class="grid2">

    </div>
    <div class="grid2">
      <div>
        Zur Zeit nehme ich keine Aufträge an.
        Sie Können mich gerne kontaktieren und Interessante Angebote anbieten.
      </div>
      <div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
  }
}
</script>

<style scoped>
.grid{
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 25% 25% 25% 25%;
  height: -webkit-fill-available;
  padding: 5%;

}
.grid2{
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 25% 25% 25% 25%;
  height: -webkit-fill-available;
  color: #141417;
}
</style>
