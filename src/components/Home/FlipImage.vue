<template>
  <div v-if="src" class="FlipImage">
    <div v-if="!selected" class="FlipImage">
      <h1>{{ info.header }}</h1>
      <img class="image" :src="src" alt="pic">
    </div>
    <div v-else class="flip-box-inner">
      <div class="flip-box-front">
        <img class="image" :src="src" alt="pic">
      </div>
      <div class="flip-box-back">
        <div class="link" v-on:click="testFunction">
          <h2>{{ info.header }}</h2>
        </div>
        <h6>
           {{ info.body}}
        </h6>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
    }
  },
  props: {
    src: {
      type: String,
      default: ''
    },
    selected: {
      type: Boolean,
      default: false
    },
    info: {
      type: Object,
      default: null
    },
    link: {
      type: String,
      default: ''
    }
  },
  methods: {
    testFunction () {
      this.$router.push(this.link);
    }
  }
}
</script>

<style scss scoped>
.FlipImage{
  width: 100%;
  height: 100%;
  background-color: transparent;
  perspective: 1000px;
}
.image{
  width: inherit;
}
/* This container is needed to position the front and back side */
.flip-box-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: 10px;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

/* Do an horizontal flip when you move the mouse over the flip box container */
.FlipImage:hover .flip-box-inner {
  transform: rotateY(180deg);
}

/* Position the front and back side */
.flip-box-front, .flip-box-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
}

/* Style the front side (fallback if image is missing) */
.flip-box-front {
  color: black;
}

/* Style the back side */
.flip-box-back {
  color: white;
  transform: rotateY(180deg);
}

.link:hover{
  text-decoration: underline;
}
h1{
  font-weight: 700;
}
</style>
