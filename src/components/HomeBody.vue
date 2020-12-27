<template>
  <div class="HomeBody" @wheel="handleScroll">
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
    fooElement() {
      return document.getElementById('circlebox');
    }
  },
  methods: {
    async handleScroll (value) {
      var height = -700;
      var length = 1170;
      var proportion = Math.abs(length / height);

      var botOffset = value.deltaY/10;
      var leftOffset = value.deltaY/10 * proportion;

      var bottResult = this.boxBottom + botOffset;
      var leftResult = this.boxLeft - leftOffset;

      this.boxBottom = bottResult < 0
        ? bottResult < height
          ? height
          : bottResult
        : 0;
        this.boxLeft = leftResult > 0
          ? leftResult > length
            ? length
            : leftResult
          : 0;

      this.fooElement.style.transform = 'translateY('+ this.boxBottom +'px)';
      this.fooElement.style.transform += 'translateX('+ this.boxLeft +'px)';

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
