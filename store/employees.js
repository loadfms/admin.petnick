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
  POPULATE_SINGLE_EMPLOYEE (state, response) {
    state.singledata = response.response.employees[0]
    state.message = ''
  },
  NEW_EMPLOYEE (state, response) {
    state.singledata = response.response.employee
    state.message = ''
  },
  UPDATE_EMPLOYEE (state, response) {
    state.singledata = response.response.employee
    state.message = ''
  },
  DELETED_EMPLOYEE (state, response) {
    state.message = ''
  },
  ERROR (state, error) {
    state.data = []
    state.message = error
  }
}

export const actions = {
  async fetchEmployees ({ commit, rootState }) {
    const header = {
      headers: {
        'x-access-token': rootState.authenticate.token
      }
    }
    const _commit = commit
    await this.$axios.$get(config.base_url + config.employee.default_route, header).then((response) => {
      _commit('POPULATE', { response })
    }).catch((error) => {
      _commit('ERROR', { error })
    })
  },

  async fetchSingleEmployee ({ commit, rootState }, { id }) {
    const header = {
      headers: {
        'x-access-token': rootState.authenticate.token
      }
    }
    const _commit = commit
    await this.$axios.$get(config.base_url + config.employee.default_route + '/' + id, header).then((response) => {
      _commit('POPULATE_SINGLE_EMPLOYEE', { response })
    }).catch((error) => {
      _commit('ERROR', { error })
    })
  },

  async newEmployee ({ commit, rootState }, item) {
    const header = {
      headers: {
        'x-access-token': rootState.authenticate.token
      }
    }
    const _commit = commit
    await this.$axios.$post(config.base_url + config.employee.default_route, item, header).then((response) => {
      _commit('NEW_EMPLOYEE', { response })
    }).catch((error) => {
      _commit('ERROR', { error })
    })
  },

  async updateEmployee ({ commit, rootState }, item) {
    const header = {
      headers: {
        'x-access-token': rootState.authenticate.token
      }
    }
    const _commit = commit
    await this.$axios.$put(config.base_url + config.employee.default_route, item, header).then((response) => {
      _commit('NEW_EMPLOYEE', { response })
    }).catch((error) => {
      _commit('ERROR', { error })
    })
  },

  async deleteEmployee ({ commit, rootState }, item) {
    const header = {
      'x-access-token': rootState.authenticate.token
    }
    const _commit = commit
    await this.$axios.$delete(config.base_url + config.employee.default_route, { data: item, headers: header }).then((response) => {
      _commit('DELETED_EMPLOYEE', { response })
    }).catch((error) => {
      _commit('ERROR', { error })
    })
  }
}
