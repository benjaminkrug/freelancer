<template>
  <div class="HomeBody" id="homeBody" @wheel="handleScroll">
    <div v-for="box in boxes" :key="box.id" class="circlebox" v-bind:style="box.style" :id="box.id">
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
          backgroundImage:'url("https://placekitten.com/100/100")'
        },
        id: 'circlebox1',
        position: 0,
      }],
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
      return document.getElementById('circlebox1');
    },

  },
  methods: {
    handleScroll (value) {
      var next = value.deltaY > 0 ? -1 : +1;
      this.globalPosition += next;

      this.boxes.forEach(box => {
        box.position += next;

        if(box.position < 0 ){
          box.position = 0
        }
        if(box.position > this.rows ){
          box.position = this.rows
        }
        var boxElement = document.getElementById(box.id);
        var clientHeight = this.HomeBodyElement.clientHeight - boxElement.clientHeight;
        var boxBottom = (-1) * box.position * clientHeight / this.rows;
        var clientWidth = this.HomeBodyElement.clientWidth - boxElement.clientWidth;

        var rest = parseInt(box.position % (this.columns * 2)); //gibt 4 elemente links->mitte->rechts->mitte
        var referenzAbweichung = Math.abs(rest - this.columns); //rechts sind alle die die 2 als rest haben ( +- 1 sind die mitte/ +-2 sind links)
        var offsetIndex = Math.abs(referenzAbweichung- this.columns); // hier wird alles umgedreht links ist jetzt 0 abs(2-2) mitte ist 1 abs(1-2) rechts ist abs(0-2)
        var boxLeft = offsetIndex * clientWidth / this.columns;
        boxElement.style.transform = 'translateY('+ boxBottom +'px)';
        boxElement.style.transform += 'translateX('+ boxLeft +'px)';
      });

    }
  },
  watch: {
    globalPosition (newVal) { // watch it
      console.log('Prop changed: ', newVal)

      if(newVal / this.columns * 1.65 > this.boxes.length)
      {
        var id = this.boxes.length + 1
        this.boxes.push({
          style: {
            backgroundImage:`url("https://placekitten.com/100/10${id}")`
          },
          position: 0,
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
  height: 100px;
  width: 100px;
}
</style>
