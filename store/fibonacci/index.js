/* eslint-disable eqeqeq */
export const state = () => ({
  fibonacciSequence: [],
  nextSequence: null
})

export const mutations = {
  setFibonacciSequence (state, data) {
    state.fibonacciSequence = data
  },
  setNextSequence (state, data) {
    state.nextSequence = data
  },
  addNextNumber (state, data) {
    state.fibonacciSequence = [...state.fibonacciSequence, data]
  }
}

export const actions = {
  generateFibonacci ({ commit }, data) {
    let result
    if (data == 1) {
      result = [0, 1]
      commit('setFibonacciSequence', result)
      return
    }

    const arr = [0, 1]
    for (let i = 2; i <= data + 2; i++) {
      if ((arr[i - 2] + arr[i - 1]) > data) {
        break
      }
      arr.push(arr[i - 2] + arr[i - 1])
    }
    result = arr
    commit('setFibonacciSequence', result)
  }
}
