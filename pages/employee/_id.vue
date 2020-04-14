<template>
  <div class="internal">
    <Menu />
    <div class="internal__content">
      <div class="internal__content__header">
        <h1 class="internal__content__header-title">
          Novo Funcionario
        </h1>
      </div>

      <div class="internal__content__page">
        <form @submit="handleSave">
          <div class="petnick__boxes">
            <Box title="Funcionario" icon="user">
              <div class="petnick__textbox">
                <label>nome</label>
                <input v-model="item.Nome" type="text" placeholder="digite o nome do Funcionario" required>
              </div>
            </Box>
            <Box title="Servicos" icon="scissor">
              <div class="petnick__checkboxlist">
                <ul>
                  <li v-for="task in this.$store.state.tasks.data.tasks" :key="task.id">
                    <input :id="task.Id" v-model="selectedTasks" type="checkbox" :value="task.Id">
                    <label :for="task.Id">{{ task.Nome }}</label>
                  </li>
                </ul>
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
      item: { Nome: '' },
      selectedTasks: []
    }
  },
  created () {
    this.handleGetEmployee()
    this.handleGetTasks()
  },
  methods: {
    async handleGetTasks () {
      await this.$store.dispatch('tasks/fetchTasks')
      console.log(this.$store.state.tasks.data)
    },
    async handleGetEmployee () {
      await this.$store.dispatch('employees/fetchSingleEmployee', { id: this.id })
      this.item.Nome = this.$store.state.employees.singledata.Nome
    },
    async handleSave (e) {
      e.preventDefault()
      if (this.id > 0) {
        await this.$store.dispatch('employees/updateEmployee', { id: this.id, name: this.item.Nome })
        this.$router.push({ path: `/${this.$router.currentRoute.path.split('/')[1]}` })
      } else {
        await this.$store.dispatch('employees/newEmployee', { name: this.item.Nome })
        this.$router.push({ path: `/${this.$router.currentRoute.path.split('/')[1]}` })
      }
    },
    async handleDelete (e) {
      e.preventDefault()
      if (this.id > 0) {
        await this.$store.dispatch('employees/deleteEmployee', { id: this.id })
        this.$router.push({ path: `/${this.$router.currentRoute.path.split('/')[1]}` })
      }
    }
  }
}
</script>
