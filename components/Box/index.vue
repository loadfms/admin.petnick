
<template>
  <div class="petnick__boxes__box">
    <h2 class="petnick__boxes__box-title" :class="calculateClass(icon)">
      {{ title }}
    </h2>
    <slot />
  </div>
</template>

<style lang="scss" src="./index.scss">
</style>

<script>
export default {
  props: {
    title: { type: String, default: '' },
    icon: { type: String, default: '' }
  },
  methods: {
    calculateClass (icon) {
      if (icon !== undefined) {
        return 'petnick__boxes__box-title-icon-' + icon
      }

      return ''
    }
  }
}
</script>
