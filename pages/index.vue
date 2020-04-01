<template>
  <div class="container">
    <div class="home">
      <h1 class="home__logo">
        Petnick
      </h1>
      <div class="home__box">
        <Textbox label="email" placeholder="digite o seu email" :input-data.sync="email" />
        <Password label="senha" placeholder="digite a sua senha" :input-data.sync="password" />
        <Button text="Entrar" @clicked="handleAuthenticate" />
        <span>{{ this.$store.state.authenticate.loggedIn }}</span>
        <span>{{ this.$store.state.authenticate.message }}</span>
        <span>{{ this.$store.state.authenticate.data }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" src="./index.scss">
</style>

<script>
import Textbox from '~/components/Textbox/'
import Button from '~/components/Button/'
import Password from '~/components/Password/'

export default {
  components: {
    Textbox,
    Button,
    Password
  },
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    handleAuthenticate () {
      this.$store.dispatch('authenticate/fetchAuthentication', { email: this.email, password: this.password })
    }
  }
}
</script>
