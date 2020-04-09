
<template>
  <table v-if="content[object] !== undefined" class="table-data" CELLSPACING="0">
    <tr>
      <th v-for="(item, index) in Object.keys(content[object][0])" :key="index">
        {{ item }}
      </th>
    </tr>

    <tr v-for="(item, index) in content[object]" :key="index" @click="goToDetail(item)">
      <td v-for="(key, z) in Object.keys(content[object][index])" :key="z">
        {{ item[key] }}
      </td>
    </tr>
  </table>
</template>

<style lang="scss" src="./index.scss">
</style>

<script>
export default {
  props: {
    content: { type: Object, default: () => { } },
    object: { type: String, default: '' }
  },
  methods: {
    goToDetail (e) {
      this.$router.push({ path: `${this.$router.currentRoute.path}/${e.Id}` })
    }
  }
}
</script>
