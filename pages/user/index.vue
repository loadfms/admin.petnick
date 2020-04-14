<template>
  <div class="internal">
    <Menu />
    <div class="internal__content">
      <div class="internal__content__header">
        <h1 class="internal__content__header-title">
          Usuario
        </h1>
        <div class="internal__content__header-find petnick__find">
          <label />
          <input v-model="find" type="text" placeholder="Buscar">
        </div>
        <nuxt-link
          class="internal__content__header-button petnick__button"
          to="user/0"
        >
          Novo Usuario
        </nuxt-link>
      </div>
      <div class="internal__content__page">
        <Table :content="this.$store.state.users.data" :filter="find" filterfield="Email" object="users" />
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
    this.handleGetUsers()
  },
  methods: {
    async handleGetUsers () {
      await this.$store.dispatch('users/fetchUsers')
    }
  }
}
</script>
