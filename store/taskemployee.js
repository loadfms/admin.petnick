const config = require('../config.json')

export const state = () => ({
  data: [],
  singledata: [],
  message: ''
})

export const mutations = {
  POPULATE (state, response) {
    console.log(response)
    state.data = response.response
    state.message = ''
  },
  NEW_TASKEMPLOYEE (state, response) {
    state.singledata = response.response.taskEmployee
    state.message = ''
  },
  UPDATE_TASKEMPLOYEE (state, response) {
    state.singledata = response.response.taskEmployee
    state.message = ''
  },
  DELETED_TASKEMPLOYEE (state, response) {
    state.message = ''
  },
  ERROR (state, error) {
    state.data = []
    state.message = error
  }
}

export const actions = {
  async fetchTaskEmployees ({ commit, rootState }, { employeeId }) {
    const header = {
      headers: {
        'x-access-token': rootState.authenticate.token
      }
    }
    const _commit = commit
    await this.$axios.$get(config.base_url + config.taskemployee.default_route + '/' + employeeId, header).then((response) => {
      _commit('POPULATE', { response })
    }).catch((error) => {
      _commit('ERROR', { error })
    })
  },

  async newTaskEmployee ({ commit, rootState }, item) {
    const header = {
      headers: {
        'x-access-token': rootState.authenticate.token
      }
    }
    const _commit = commit
    await this.$axios.$post(config.base_url + config.taskemployee.default_route, item, header).then((response) => {
      _commit('NEW_TASKEMPLOYEE', { response })
    }).catch((error) => {
      _commit('ERROR', { error })
    })
  },

  async deleteTaskEmployee ({ commit, rootState }, item) {
    const header = {
      'x-access-token': rootState.authenticate.token
    }
    const _commit = commit
    await this.$axios.$delete(config.base_url + config.taskemployee.default_route, { data: { employeeId: item }, headers: header }).then((response) => {
      _commit('DELETED_TASKEMPLOYEE', { response })
    }).catch((error) => {
      _commit('ERROR', { error })
    })
  }
}
