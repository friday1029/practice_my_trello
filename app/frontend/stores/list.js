import Vue from 'vue/dist/vue.esm'
import Vuex from 'vuex'
import Rails from '@rails/ujs'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lists: []
  },
  getters: {
    lists: state => state.lists
  },
  mutations: {
    UPDATE_LISTS( state, lists){
      state.lists = lists;
    }
  },
  actions: {
    loadList({ commit }){
      Rails.ajax({
        url: '/lists.json',
        type: 'get',
        dataType: 'json',
        success: resp => {
          commit("UPDATE_LISTS",resp)
        },
        error: err => {
          console.log(err)
        }
      })
    }
  }
})