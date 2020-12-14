<template>
  <div class="cv">
    <div class="grid">
        <div class="first">
          Diese Seite ist mit VueJs/Route aufgesetzt.
        </div>

        <div class="second">
          <i class="image fab fa-vuejs fa-9x"></i>
          <i class="image fab fa-js fa-9x"></i>
          <i class="image fab fa-html5 fa-9x"></i>
        </div>
        <div class="third">
          <img class="image" src="@/assets/Skills/asp_net.png" id="asp_net" width="126" height="144">
          <img class="image" src="@/assets/Skills/atom.png" id="atom" width="126" height="144">
          <img class="image" src="@/assets/Skills/bootstrap.png" id="bootstrap" width="126" height="144">
        </div>
        <div class="fourd">
          <img class="image" src="@/assets/Skills/css.png" id="css" width="126" height="144">
          <img class="image" src="@/assets/Skills/postgresql.png" id="postgresql" width="126" height="144">
          <img class="image" src="@/assets/Skills/Visual_Studio.png" id="Visual_Studio" width="126" height="144">
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Skills',
  props: {
  },
  data() {
    return {

    }
  }
}
</script>

<style scoped>
.grid{
  display: grid;
  grid-template-columns: 20% auto 20%;
  grid-template-rows: 25% 160px 160px auto;
}
.first{
  grid-column-start: 2;
}
.second{
  grid-column-start: 2;
  grid-row-start: 2;
}
.third{
  grid-column-start: 2;
  grid-row-start: 3;
}
.fourd{
  grid-column-start: 2;
  grid-row-start: 4;
}
.image{
  padding: 10px 10px
}
img {
  filter: grayscale(100%);
}
</style>
