
<template>
  <a class="petnick__button" :class="{ blue: color == 'blue', transparent: color == 'transparent' }" @click="clicked">
    {{ text }}
  </a>
</template>

<style lang="scss" src="./index.scss">
</style>

<script>
export default {
  props: {
    text: { type: String, default: 'Button' },
    color: { type: String, default: '' },
    method: { type: String, default: '' }
  },
  methods: {
    clicked () {
      this.$emit('clicked')
    }
  }
}
</script>
