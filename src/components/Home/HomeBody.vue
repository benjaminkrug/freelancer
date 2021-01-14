<template>
  <div class="HomeBody" id="homeBody" @wheel="handleScroll">
    <div v-for="box in boxes" :key="box.id" v-bind:class="box.position > (columns * 1.5 - selectedDifference) && box.position < (columns * 1.5 + selectedDifference) ? 'circlebox selected' : 'circlebox'" v-bind:style="box.style" :id="box.id">
      <FlipImage :src="box.src" :selected="box.selected" :info="box.info" :link="box.link"/>
    </div>
    <div
      class="scrollDown"
      @mouseover="scrollup"
      @mouseleave="hover = false"
    >
    <div v-if="hover">
      <i class="fas fa-angle-double-up"></i>
    </div>
    </div>
  </div>
</template>

<script>
import FlipImage from './FlipImage'
import CircleData from './CircleData'

export default {
  name: 'HomeBody',
  components: {
    FlipImage
  },
  props: {
  },
  data () {
    return {
      hover: false,
      boxes:[{
        style: {
        },
        selected: false,
        info: {
          header: 'CV',
          body: 'Hier können sie mehr über meinen bisherigen Lebensgang erfahren.'
        },
        src: require(`@/assets/Profilbild2020V2.png`),
        link: '/CV',
        id: 'circlebox0',
        key: 0,
        position: 0,
      }],
      selectedDifference: 7,
      globalPosition: 0,
      rows: 64,
      columns: 16,
    }
  },
  computed: {
    HomeBodyElement() {
      return document.getElementById('homeBody');
    },
    CircleboxElement() {
      return document.getElementById('circlebox0');
    },
    Data () {
      return CircleData;
    }
  },
  methods: {
    scrollup () {
      this.hover = true
      this.handleScroll({deltaY: 1})
      while (this.hover) {
        setTimeout(() => {
            this.handleScroll({deltaY: 1})
        }, 1100);
      }
    },
    handleScroll (value) {

      var next = value.deltaY > 0 ? 1 : -1;
      this.globalPosition += next;

      if(this.globalPosition < 1){
        this.globalPosition = 0;
        return;
      }

      if(this.boxes[this.boxes.length - 1].position < 0 ){
        this.boxes.pop()
      }

      this.boxes.forEach(box => {
        if(box.position > this.rows- 1) {
          box.style.opacity = 0.3;
        }
        if(box.position > this.rows) {
          box.style.opacity = 0;
        }

        box.position += next;
        box.selected = box.position > (this.columns * 1.5 - this.selectedDifference) && box.position < (this.columns * 1.5 + this.selectedDifference);

        var boxElement = document.getElementById(box.id);
        var clientHeight = this.HomeBodyElement.clientHeight - boxElement.clientHeight;
        var boxBottom = (-1) * box.position * clientHeight / this.rows;
        var clientWidth = this.HomeBodyElement.clientWidth - boxElement.clientWidth;

        var rest = parseInt(box.position % (this.columns * 2)); //gibt 4 elemente links->mitte->rechts->mitte
        var referenzAbweichung = Math.abs(rest - this.columns); //rechts sind alle die die 2 als rest haben ( +- 1 sind die mitte/ +-2 sind links)
        var offsetIndex = Math.abs(referenzAbweichung - this.columns); // hier wird alles umgedreht links ist jetzt 0 abs(2-2) mitte ist 1 abs(1-2) rechts ist abs(0-2)
        var boxLeft = offsetIndex * clientWidth / this.columns;
        boxElement.style.transform = 'translateY('+ boxBottom +'px)';
        boxElement.style.transform += 'translateX('+ boxLeft +'px)';

        // rotation

        // rest > this.columns => frontside => meaning change rotation vorzeichen
        var direction = rest > this.columns ? 1 : -1;
        // Math.abs(referenzAbweichung - (this.columns / 2)) => 0 ist mitte (steigung klein) this.columns / 2 is außen (steigung groß)
        var steigung = (Math.abs(referenzAbweichung - (this.columns / 2))) / (this.columns / 2);
        var rotation = 10 * direction * steigung;
        if(!box.selected) {
          boxElement.style.transform += 'rotate('+ rotation + 'deg)';
        }
        var w = 1 - steigung;
        w = w < 0.02 ? 0 : w;
        //var width = 1 / w;
        boxElement.style.transform += 'scalex(' + w + ')';
        if(direction == -1)
        {
          boxElement.style.transform += 'scalex(-1)';
        }
        if(box.selected){
          boxElement.style.transform += 'scale(2)';
        }

      });

    }
  },
  watch: {
    globalPosition (newVal) { // watch it
      if(newVal / this.columns * 1.25 > this.boxes.length)
      {
        var id = this.boxes[this.boxes.length - 1].key
        var box = this.Data[id];
        if(box){
          box.position = 0;
          this.boxes.push(box)
        }
      }
    }
  },
  created() {

  }
}
</script>

<style scoped scss>
.HomeBody{
  height: 100%;
  width: 60%;
  overflow: hidden;
  position: relative;
  margin: auto;
}
.circlebox{
  opacity: 0.4;
  transition: transform 1.1s;
  transform: translateY(100px) rotate(-40deg);
  position: absolute;
  bottom: 0px;
  left: 0;
  height: 200px;
  width: 200px;
}
.selected{
  opacity: 1;
  z-index: 1;
}
.scrollDown{
  position: absolute;
  width: 100%;
  height: 5%;
  bottom: 0px;
  left: 0;
}
.scrollDown:hover{
  position: absolute;
  width: 100%;
  height: 5%;
  bottom: 0px;
  left: 0;
  background-color: rgba(52, 58, 64,0.3);
}
</style>
