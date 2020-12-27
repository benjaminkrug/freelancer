<template>
  <div class="HomeBody" id="homeBody" @wheel="handleScroll">
    <div id="circlebox">
    </div>
  </div>
</template>

<script>

export default {
  name: 'HomeBody',
  props: {
  },
  data () {
    return {
      box:[{
        style: {
          'background-color': 'red'
        },
        id: 1
      }],
      boxHeight: 100,
      boxWidth: 100,
      boxBottom: 0,
      boxLeft: 0,
      directionRight: true,
      position: 0,
    }
  },
  computed: {
    circlebox() {
      return {
        style: {
          'transition-timing-function': 'linear',
          'transition': 'transform 2s',
          'position': 'absolute',
          'bottom': this.boxBottom + 'px',
          'left': this.boxLeft + 'px',
          'background-color': 'red',
          'height':this.boxHeight + 'px',
          'width': this.boxWidth + 'px',
        }
      }
    },
    HomeBodyElement() {
      return document.getElementById('homeBody');
    },
    CircleboxElement() {
      return document.getElementById('circlebox');
    }
  },
  methods: {
    async handleScroll (value) {
      var next = value.deltaY > 0 ? -1 : +1;
      this.position += next;

      if(this.position < 0 ){
        this.position = 0
      }
      if(this.position > 8 ){
        this.position = 8
      }
      var clientHeight = this.HomeBodyElement.clientHeight - this.CircleboxElement.clientHeight;
      var boxBottom = (-1) * this.position * clientHeight / 8;
      var clientWidth = this.HomeBodyElement.clientWidth - this.CircleboxElement.clientWidth;

      var rest = parseInt(this.position % 4); //gibt 5 elemente links->mitte->rechts->mitte->links
      var referenzAbweichung = Math.abs(rest - 2); //rechts sind alle die die 2 als rest haben ( +- 1 sind die mitte/ +-2 sind links)
      var offsetIndex = Math.abs(referenzAbweichung-2); // hier wird alles umgedreht links ist jetzt 0 abs(2-2) mitte ist 1 abs(1-2) rechts ist abs(0-2)
      var boxLeft = offsetIndex * clientWidth / 2;
      console.log(offsetIndex);
      this.CircleboxElement.style.transform = 'translateY('+ boxBottom +'px)';
      this.CircleboxElement.style.transform += 'translateX('+ boxLeft +'px)';

    }
  },
  created() {

  }
}
</script>

<style scoped>
.HomeBody{
  height: 90%;
  width: 60%;
  position: relative;
  margin: auto;
}
#circlebox{
  transition: transform 1.5s;
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: red;
  height: 100px;
  width: 100px;
}
</style>
