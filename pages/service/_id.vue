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
        <div class="petnick__boxes">
          <Box title="Servico" icon="scissor">
            <div class="petnick__textbox">
              <label>nome</label>
              <input v-model="nome" type="text" placeholder="digite o nome do servico">
            </div>
          </Box>
        </div>
      </div>
      <div class="internal__content__footer">
        <a class="petnick__button">
          Cadastrar
        </a>
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
      servico: ''
    }
  }
}
</script>
