import Vue from 'vue'
import Vuex from 'vuex'
import note from './modules/note'
import auth from './modules/auth'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    note,
    auth
  },
  strict: false
})
