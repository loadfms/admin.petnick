const config = require('../config.json')

export const state = () => ({
  data: [],
  singledata: [],
  message: ''
})

export const mutations = {
  POPULATE (state, response) {
    state.data = response.response
    state.message = ''
  },
  POPULATE_SINGLE_USER (state, response) {
    state.singledata = response.response.users[0]
    state.message = ''
  },
  NEW_USER (state, response) {
    state.singledata = response.response.user
    state.message = ''
  },
  UPDATE_USER (state, response) {
    state.singledata = response.response.user
    state.message = ''
  },
  DELETED_USER (state, response) {
    state.message = ''
  },
  ERROR (state, error) {
    state.data = []
    state.message = error
  }
}

export const actions = {
  async fetchUsers ({ commit, rootState }) {
    const header = {
      headers: {
        'x-access-token': rootState.authenticate.token
      }
    }
    const _commit = commit
    await this.$axios.$get(config.base_url + config.users.default_route, header).then((response) => {
      _commit('POPULATE', { response })
    }).catch((error) => {
      _commit('ERROR', { error })
    })
  },

  async fetchSingleUser ({ commit, rootState }, { id }) {
    const header = {
      headers: {
        'x-access-token': rootState.authenticate.token
      }
    }
    const _commit = commit
    await this.$axios.$get(config.base_url + config.users.default_route + '/' + id, header).then((response) => {
      _commit('POPULATE_SINGLE_USER', { response })
    }).catch((error) => {
      _commit('ERROR', { error })
    })
  },

  async newUser ({ commit, rootState }, item) {
    const header = {
      headers: {
        'x-access-token': rootState.authenticate.token
      }
    }
    const _commit = commit
    await this.$axios.$post(config.base_url + config.users.default_route, item, header).then((response) => {
      _commit('NEW_USER', { response })
    }).catch((error) => {
      _commit('ERROR', { error })
    })
  },

  async updateUser ({ commit, rootState }, item) {
    const header = {
      headers: {
        'x-access-token': rootState.authenticate.token
      }
    }
    const _commit = commit
    await this.$axios.$put(config.base_url + config.users.default_route, item, header).then((response) => {
      _commit('NEW_USER', { response })
    }).catch((error) => {
      _commit('ERROR', { error })
    })
  },

  async deleteUser ({ commit, rootState }, item) {
    const header = {
      'x-access-token': rootState.authenticate.token
    }
    const _commit = commit
    await this.$axios.$delete(config.base_url + config.users.default_route, { data: item, headers: header }).then((response) => {
      _commit('DELETED_USER', { response })
    }).catch((error) => {
      _commit('ERROR', { error })
    })
  }
}
