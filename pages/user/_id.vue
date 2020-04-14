<template>
  <div class="internal">
    <Menu />
    <div class="internal__content">
      <div class="internal__content__header">
        <h1 class="internal__content__header-title">
          Novo Usuario
        </h1>
      </div>

      <div class="internal__content__page">
        <form @submit="handleSave">
          <div class="petnick__boxes">
            <Box title="Usuario" icon="user">
              <div class="petnick__textbox">
                <label>email</label>
                <input v-model="item.Email" type="text" placeholder="digite o email do usuario" required>
              </div>
              <div class="petnick__textbox">
                <label>senha</label>
                <input v-model="item.Password" type="password" placeholder="digite a senha do usuario" required>
              </div>
            </Box>
          </div>
          <div class="internal__content__footer">
            <a class="petnick__button internal__content__footer-delete" @click="handleDelete">Excluir</a>
            <input type="submit" class="petnick__button" value="Salvar">
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style lang="scss" src="./index.scss">
</style>

<script>
import Menu from '~/components/Menu/'
import Box from '~/components/Box'

export default {
  components: {
    Menu,
    Box
  },
  data () {
    return {
      id: this.$route.params.id,
      item: { Email: '' }
    }
  },
  created () {
    this.handleGetUser()
  },
  methods: {
    async handleGetUser () {
      await this.$store.dispatch('users/fetchSingleUser', { id: this.id })
      this.item.Email = this.$store.state.users.singledata.Email
    },
    async handleSave (e) {
      e.preventDefault()
      if (this.id > 0) {
        await this.$store.dispatch('users/updateUser', { id: this.id, password: this.item.Password })
        this.$router.push({ path: `/${this.$router.currentRoute.path.split('/')[1]}` })
      } else {
        await this.$store.dispatch('users/newUser', { email: this.item.Email, password: this.item.Password })
        this.$router.push({ path: `/${this.$router.currentRoute.path.split('/')[1]}` })
      }
    },
    async handleDelete (e) {
      e.preventDefault()
      if (this.id > 0) {
        await this.$store.dispatch('users/deleteUser', { id: this.id })
        this.$router.push({ path: `/${this.$router.currentRoute.path.split('/')[1]}` })
      }
    }
  }
}
</script>
