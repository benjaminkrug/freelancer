<template>
  <div
    class="icon"
    @mouseover="hover = true"
    @mouseleave="hover = false"
  >
      <slot />
      <div v-if="hover">
        {{ hovertext }}
      </div>
  </div>
</template>

<script>

export default {
  name: 'skillIcon',
  data() {
    return {
      hover:false
    }
  },
  props: {
    hovertext: {
      type: String,
      default: ''
    },
  }
}
</script>

<style>
</style>
