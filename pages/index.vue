<template>
  <div class="container">
    <div class="home">
      <h1 class="home__logo">
        Petnick
      </h1>
      <div class="home__box">
        <div class="petnick__textbox">
          <label>email</label>
          <input v-model="email" type="text" placeholder="digite o seu email">
        </div>
        <div class="petnick__textbox">
          <label>senha</label>
          <input v-model="password" type="password" placeholder="digite a sua senha">
        </div>
        <a class="petnick__button" @click="handleAuthenticate">
          Entrar
        </a>
        <span v-if="!this.$store.state.authenticate.loggedIn" class="home__box-alert">{{ this.$store.state.authenticate.message }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" src="./index.scss">
</style>

<script>

export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async handleAuthenticate () {
      await this.$store.dispatch('authenticate/fetchAuthentication', {
        email: this.email,
        password: this.password
      })

      if (this.$store.state.authenticate.loggedIn) {
        this.$router.replace({ path: 'dashboard' })
      }
    }
  }
}
</script>
