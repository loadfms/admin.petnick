const config = require('./../config.json')

export const state = () => ({
  loggedIn: ''
})

export const mutations = {
  ALLOW (state, response) {
    state.loggedIn = true
    state.data = response.response.token
    state.message = ''
  },
  DENY (state, error) {
    state.loggedIn = false
    state.data = {}
    state.message = 'Email ou senha invalidos'
  }
}

export const actions = {
  async fetchAuthentication ({ commit }, userData) {
    const _commit = commit
    await this.$axios.$post(config.base_url + config.auth.default_route, userData).then((response) => {
      _commit('ALLOW', { response })
    }).catch((error) => {
      _commit('DENY', { error })
    })
  }
}
