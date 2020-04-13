<template>
  <div class="internal">
    <Menu />
    <div class="internal__content">
      <div class="internal__content__header">
        <h1 class="internal__content__header-title">
          Funcionario
        </h1>
        <div class="internal__content__header-find petnick__find">
          <label />
          <input v-model="find" type="text" placeholder="Buscar">
        </div>
        <nuxt-link
          class="internal__content__header-button petnick__button"
          to="employee/0"
        >
          Novo Funcionario
        </nuxt-link>
      </div>
      <div class="internal__content__page">
        <Table :content="this.$store.state.employees.data" :filter="find" object="employees" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" src="./index.scss">
</style>

<script>
import Menu from '~/components/Menu/'
import Table from '~/components/Table/'

export default {
  components: {
    Menu,
    Table
  },
  data () {
    return {
      find: ''
    }
  },
  created () {
    this.handleGetEmployees()
  },
  methods: {
    async handleGetEmployees () {
      await this.$store.dispatch('employees/fetchEmployees')
    }
  }
}
</script>
