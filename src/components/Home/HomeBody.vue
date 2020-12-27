<template>
  <div class="HomeBody" id="homeBody" @wheel="handleScroll">
    <div v-for="box in boxes" :key="box.id" class="circlebox" :id="box.id">
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
          'background-color': 'red'
        },
        id: 'circlebox1'
      }],
      position: 0,
      rows: 128,
      columns: 32,
    }
  },
  computed: {
    HomeBodyElement() {
      return document.getElementById('homeBody');
    },
    CircleboxElement() {
      return document.getElementById('circlebox1');
    },

  },
  methods: {
    async handleScroll (value) {
      var next = value.deltaY > 0 ? -1 : +1;
      this.position += next;

      if(this.position < 0 ){
        this.position = 0
      }
      if(this.position > this.rows ){
        this.position = this.rows
      }
      var clientHeight = this.HomeBodyElement.clientHeight - this.CircleboxElement.clientHeight;
      var boxBottom = (-1) * this.position * clientHeight / this.rows;
      var clientWidth = this.HomeBodyElement.clientWidth - this.CircleboxElement.clientWidth;

      var rest = parseInt(this.position % (this.columns * 2)); //gibt 4 elemente links->mitte->rechts->mitte
      var referenzAbweichung = Math.abs(rest - this.columns); //rechts sind alle die die 2 als rest haben ( +- 1 sind die mitte/ +-2 sind links)
      var offsetIndex = Math.abs(referenzAbweichung- this.columns); // hier wird alles umgedreht links ist jetzt 0 abs(2-2) mitte ist 1 abs(1-2) rechts ist abs(0-2)
      var boxLeft = offsetIndex * clientWidth / this.columns;
      this.CircleboxElement.style.transform = 'translateY('+ boxBottom +'px)';
      this.CircleboxElement.style.transform += 'translateX('+ boxLeft +'px)';

    }
  },
  watch: {
    position (newVal) { // watch it
      console.log('Prop changed: ', newVal)

      if(newVal / this.columns > this.boxes.length-1)
      {
        this.boxes.push({
          style: {
            'background-color': 'blue'
          },
          id: 'circlebox' + this.boxes.length + 1
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
  height: 90%;
  width: 60%;
  position: relative;
  margin: auto;
}
.circlebox{
  transition: transform 1.5s;
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: red;
  height: 100px;
  width: 100px;
}
</style>
