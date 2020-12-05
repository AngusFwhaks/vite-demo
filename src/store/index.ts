import { createStore } from 'vuex'

export default createStore({
  state: {
    isShow: true
  },
  mutations: {
    change(state) {
      state.isShow = !state.isShow
    }
  }
})
