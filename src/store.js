import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        user: {
            name: ''
        }
    },

    getters: {
        user(state) {
            return state.user
        }
    },

    actions: {
        user(context, data) {
            context.commit('user', data)
        }
    },

    mutations: {
        user(state, data) {
            state.user = data
        }
    }
})

export default store