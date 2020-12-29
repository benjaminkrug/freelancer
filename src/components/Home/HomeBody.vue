<template>
  <div class="HomeBody" id="homeBody" @wheel="handleScroll">
    <div v-for="box in boxes" :key="box.id" v-bind:class="box.position > (columns * 1.5 - selectedDifference) && box.position < (columns * 1.5 + selectedDifference) ? 'circlebox selected' : 'circlebox'" v-bind:style="box.style" :id="box.id">
      <img v-if="box.src" class="image" :src="box.src" alt="pic">
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
      boxes:[{
        style: {
        },
        selected: false,
        src: require(`@/assets/Home/Vue.png`),
        id: 'circlebox0',
        key: 0,
        position: 0,
      }],
      selectedDifference: 3,
      globalPosition: 0,
      rows: 128,
      columns: 32,
    }
  },
  computed: {
    HomeBodyElement() {
      return document.getElementById('homeBody');
    },
    CircleboxElement() {
      return document.getElementById('circlebox0');
    },

  },
  methods: {
    handleScroll (value) {
      var next = value.deltaY > 0 ? -1 : +1;
      this.globalPosition += next;


      if(this.boxes[this.boxes.length - 1].position < 0 ){
        this.boxes.pop()
      }

      this.boxes.forEach(box => {
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
        var rotation = 20 * direction * steigung;
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
        console.log(w);
      });

    }
  },
  watch: {
    globalPosition (newVal) { // watch it
      if(newVal / this.columns * 1.15 > this.boxes.length)
      {
        var id = this.boxes[this.boxes.length - 1].key + 1
        this.boxes.push({
          style: {
            //backgroundImage:`url("https://placekitten.com/100/10${id}")`
          },
          selected: false,
          src: require(`@/assets/Home/Vue.png`),
          position: 0,
          key: id,
          id: 'circlebox' + id
        })
      }
    }
  },
  created() {

  }
}
</script>

<style scoped>
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
  transform: translateY(300px) rotate(-60deg);
  position: absolute;
  bottom: -100px;
  left: 0;
  height: 200px;
  width: 200px;
}
.selected{
  width: 300px;
  opacity: 1;
  z-index: 1;
}
.image:hover{
  transition: transform .5s;
  transform: scalex(-1);
}
.image{
  width: inherit;
}
</style>
