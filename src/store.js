import {
    createStore
} from "vuex";
import axios from 'axios'
const store = createStore({
    state: {
        user: null,
        repositories: null,
        url: 'https://api.github.com/users/',
        error: null,
        currentSort: 'name'
    },
    mutations: {
        changeSort(state, payload){
            state.currentSort = payload
        },
        userInfo(state, data){
            state.user = data
            state.error = null
        },
        resetInfo(state){
            state.user = null
            state.error = null
            state.repositories = null
        },
        errorInfo(state, error){
            state.error = error.response.data.message
        },
        reposInfo(state, repos){
            state.repositories = repos
        }
    },
    actions: {
        async userInfo({commit, state}, search){
            try {
              const res = await axios.get(`${state.url}${search}`)  
              const repos = await axios.get(`${state.url}${search}/repos`)  
              commit('userInfo', res.data)
              commit('reposInfo', repos.data)
            } catch (error) {
                commit('errorInfo', error)
                console.log('Произошла ошибка');
                state.user = null
                state.repositories = null
            }
        }
    },
    getters: {
        getReposSort(state) {
            if (state.repositories != null) {
                return state.repositories.sort((prev, next) => {
                    let mod = 1
                    if (prev[state.currentSort] < next[state.currentSort]) {
                        return -1 * mod
                    }
                })
            }
        }
    }
})

export default store