const config = require('./../config.json')

export const state = () => ({
  data: [],
  message: ''
})

export const mutations = {
  POPULATE (state, response) {
    state.data = response.response
    state.message = ''
  },
  ERROR (state, error) {
    state.data = []
    state.message = error
  }
}

export const actions = {
  async fetchTasks ({ commit, rootState }) {
    const header = {
      headers: {
        'x-access-token': rootState.authenticate.token
      }
    }
    const _commit = commit
    await this.$axios.$get(config.base_url + config.tasks.default_route, header).then((response) => {
      _commit('POPULATE', { response })
    }).catch((error) => {
      _commit('DENY', { error })
    })
  }
}
