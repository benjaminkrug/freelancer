<template>
  <div class="cv">
    <div class="grid">
        <div class="second innerGrid">
          <div>
            <Header text="PRIMARY SKILLS"/>
            <hr>
          </div>
          <div class="iconblock">
            <SkillIcon hovertext='VUE'>
              <i class="fab fa-vuejs fa-9x" />
            </SkillIcon>
            <SkillIcon hovertext='.NET'>
              <img class="image" src="@/assets/Skills/asp_net.png" id="asp_net" width="126" height="144">
            </SkillIcon>
            <SkillIcon hovertext='POSTGRESQL'>
              <img class="image" src="@/assets/Skills/postgresql.png" id="postgresql" width="126" height="144">
            </SkillIcon>
          </div>
        </div>
        <div class="third innerGrid">
          <div>
            <Header text="SECONDARY SKILLS"/>
            <hr>
          </div>
          <div class="secondImages iconblock">
            <SkillIcon hovertext='HTML'>
              <i class="fab fa-html5 fa-9x"></i>
            </SkillIcon>
            <SkillIcon hovertext='JAVASCRIPT'>
              <i class="fab fa-js fa-9x"></i>
            </SkillIcon>
            <SkillIcon hovertext='CSS'>
              <img class="image" src="@/assets/Skills/css.png" id="css" width="126" height="144">
            </SkillIcon>
          </div>
      </div>
        <div class="fourd innerGrid">
          <div>
            <Header text="FAMILIAR TOOLS"/>
            <hr>
          </div>
          <div class="iconblock">
            <SkillIcon hovertext='BOOTSTRAP'>
              <img class="image" src="@/assets/Skills/bootstrap.png" id="bootstrap" width="126" height="144">
            </SkillIcon>
            <SkillIcon hovertext='ATOM'>
              <img class="image" src="@/assets/Skills/atom.png" id="atom" width="126" height="144">
            </SkillIcon>
            <SkillIcon hovertext='VISUAL STUDIO'>
              <img class="image" src="@/assets/Skills/Visual_Studio.png" id="Visual_Studio" width="126" height="144">
            </SkillIcon>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import SkillIcon from './skillIcon.vue'
import Header from './Header.vue'
export default {
  name: 'Skills',
  components:{
    SkillIcon,
    Header
  },
  props: {
  },
  data() {
    return {
      accentColor: '#f00',

    }
  }
}
</script>

<style lang="scss" scoped>
.grid{
  display: grid;
  grid-template-columns: 40% auto 40%;
  grid-template-rows: 5% 250px 250px 250px;
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
svg { //vor all i elements
  padding: 5px;
}
svg:hover { //vor all i elements
  padding: 15px;
}
.image{
  padding: 10px 10px;
}
img {
  filter: grayscale(100%);
}
img:hover { //vor all i elements
  padding: 15px;
}
.innerGrid{
  display: grid;
  grid-template-rows: 65px;
}
.secondImages{
}
.iconblock{
    display: flex;
  //background-color: AliceBlue;
}
</style>
