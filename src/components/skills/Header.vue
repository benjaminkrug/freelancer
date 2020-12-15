<template>
  <h2 class="header">
    {{ text }}
  </h2>
</template>

<script>

export default {
  data() {
    return {
      hover:false
    }
  },
  props: {
    text: {
      type: String,
      default: ''
    },
  }
}
</script>

<style lang="scss" scoped>
.header{
  color: #141417;
}
</style>
