<template>
  <div class="petnick__textbox">
    <label :for="{id}">{{ label }} </label>
    <input :id="{id}" v-model="inputData" type="text" :placeholder="[[placeholder]]" @keyup="$emit('update:inputData', inputData);">
  </div>
</template>

<style lang="scss" src="./index.scss">
</style>

<script>
export default {
  props: {
    id: { type: String, default: '' },
    label: { type: String, default: '' },
    placeholder: { type: String, default: '' },
    inputData: { type: String, default: '' }
  }
}
</script>
