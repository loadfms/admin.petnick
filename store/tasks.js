const config = require('./../config.json')

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
  POPULATE_SINGLE_TASK (state, response) {
    state.singledata = response.response.tasks[0]
    state.message = ''
  },
  NEW_TASK (state, response) {
    state.singledata = response.response.task
    state.message = ''
  },
  UPDATE_TASK (state, response) {
    state.singledata = response.response.task
    state.message = ''
  },
  DELETED_TASK (state, response) {
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
      _commit('ERROR', { error })
    })
  },

  async fetchSingleTask ({ commit, rootState }, { id }) {
    const header = {
      headers: {
        'x-access-token': rootState.authenticate.token
      }
    }
    const _commit = commit
    await this.$axios.$get(config.base_url + config.tasks.default_route + '/' + id, header).then((response) => {
      _commit('POPULATE_SINGLE_TASK', { response })
    }).catch((error) => {
      _commit('ERROR', { error })
    })
  },

  async newTask ({ commit, rootState }, item) {
    const header = {
      headers: {
        'x-access-token': rootState.authenticate.token
      }
    }
    const _commit = commit
    await this.$axios.$post(config.base_url + config.tasks.default_route, item, header).then((response) => {
      _commit('NEW_TASK', { response })
    }).catch((error) => {
      _commit('ERROR', { error })
    })
  },

  async updateTask ({ commit, rootState }, item) {
    const header = {
      headers: {
        'x-access-token': rootState.authenticate.token
      }
    }
    const _commit = commit
    await this.$axios.$put(config.base_url + config.tasks.default_route, item, header).then((response) => {
      _commit('NEW_TASK', { response })
    }).catch((error) => {
      _commit('ERROR', { error })
    })
  },

  async deleteTask ({ commit, rootState }, item) {
    const header = {
      'x-access-token': rootState.authenticate.token
    }
    const _commit = commit
    await this.$axios.$delete(config.base_url + config.tasks.default_route, { data: item, headers: header }).then((response) => {
      _commit('DELETED_TASK', { response })
    }).catch((error) => {
      _commit('ERROR', { error })
    })
  }
}
