
<template>
  <table v-if="content[object] !== undefined && content[object].length > 0" class="table-data" CELLSPACING="0">
    <tr>
      <th v-for="(item, index) in Object.keys(content[object][0])" :key="index">
        {{ item }}
      </th>
    </tr>

    <tr v-for="(item, index) in content[object].filter((e)=>{return e[filterfield].toLowerCase().includes(filter.toLowerCase())})" :key="index" @click="goToDetail(item)">
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
    filter: { type: String, default: '' },
    object: { type: String, default: '' },
    filterfield: { type: String, default: '' }
  },
  methods: {
    goToDetail (e) {
      this.$router.push({ path: `${this.$router.currentRoute.path}/${e.Id}` })
    }
  }
}
</script>
