<template>
  <div class="internal">
    <Menu />
    <div class="internal__content">
      <div class="internal__content__header">
        <h1 class="internal__content__header-title">
          Novo Servico
        </h1>
      </div>

      <div class="internal__content__page">
        <form @submit="handleSave">
          <div class="petnick__boxes">
            <Box title="Servico" icon="scissor">
              <div class="petnick__textbox">
                <label>nome</label>
                <input v-model="item.Nome" type="text" placeholder="digite o nome do servico" required>
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
      item: { Nome: '' }
    }
  },
  created () {
    this.handleGetTask()
  },
  methods: {
    async handleGetTask () {
      await this.$store.dispatch('tasks/fetchSingleTask', { id: this.id })
      this.item.Nome = this.$store.state.tasks.singledata.Nome
    },
    async handleSave (e) {
      e.preventDefault()
      if (this.id > 0) {
        await this.$store.dispatch('tasks/updateTask', { id: this.id, name: this.item.Nome })
        this.$router.push({ path: `/${this.$router.currentRoute.path.split('/')[1]}` })
      } else {
        await this.$store.dispatch('tasks/newTask', { name: this.item.Nome })
        this.$router.push({ path: `/${this.$router.currentRoute.path.split('/')[1]}` })
      }
    },
    async handleDelete (e) {
      e.preventDefault()
      if (this.id > 0) {
        await this.$store.dispatch('tasks/deleteTask', { id: this.id })
        this.$router.push({ path: `/${this.$router.currentRoute.path.split('/')[1]}` })
      }
    }
  }
}
</script>
