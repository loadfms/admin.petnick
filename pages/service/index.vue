<template>
  <div class="internal">
    <Menu />
    <div class="internal__content">
      <div class="internal__content__header">
        <h1 class="internal__content__header-title">
          Servico
        </h1>
        <div class="internal__content__header-find petnick__find">
          <label />
          <input v-model="email" type="text" placeholder="Busca de clientes">
        </div>
        <nuxt-link class="internal__content__header-button petnick__button" to="service/0">
          Novo Servico
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss" src="./index.scss">
</style>

<script>
import Menu from '~/components/Menu/'

export default {
  components: {
    Menu
  }
}
</script>
