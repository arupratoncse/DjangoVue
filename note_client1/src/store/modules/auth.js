import axios from 'axios'
import setAuthToken from '../../setAuthToken'

const BASE_URL = 'http://localhost:8000'

const state = {
    token: localStorage.getItem('auth_token')? localStorage.getItem('auth_token') : null,
    user: {}
}

const getters = {
    loggedIn(state){
        return state.token !== null
    }
}

const actions = {
    getUser({commit}){
        return new Promise((resolve, reject) => {
            axios.get(`${BASE_URL}/api/auth/user`)
            .then(res => {
                commit('setUser', res.data)
                resolve()
            })
            .catch(error => {
                console.log(error)
                reject()
            })
        })
    },
    register({commit}, user){
        return new Promise((resolve, reject) => {
            axios.post(`${BASE_URL}/api/auth/register`, user)
                .then(res => {
                    localStorage.setItem('auth_token', res.data.token)
                    setAuthToken(res.data.token)
                    commit('saveLoginInfo', res.data)
                    resolve()
                })
                .catch(err =>{
                    console.log(err)
                    reject(err)
                })
        })
    },
    login({commit}, user){
        return new Promise((resolve, reject) => {
            axios.post(`${BASE_URL}/api/auth/login`, user)
                .then(res => {
                    localStorage.setItem('auth_token', res.data.token)
                    setAuthToken(res.data.token)
                    commit('saveLoginInfo', res.data)
                    resolve()
                })
                .catch(err =>{
                    console.log(err)
                    reject(err)
                })
        })
    },
    logout({commit}){
        return new Promise((resolve, reject) => {
            axios.post(`${BASE_URL}/api/auth/logout`)
                .then(() => {
                    localStorage.removeItem('auth_token')
                    setAuthToken(false)
                    commit('logoutInfo')
                    resolve()
                })
                .catch(err =>{
                    console.log(err)
                    reject(err)
                })
        })
    }
}

const mutations = {
    setUser(state, user){
        state.user = user
    },
    saveLoginInfo(state, result){
        state.token = result.token
        state.user = result.user
    },
    logoutInfo(state){
        state.token = null
        state.user = {}
    }

}

export default {
  state,
  getters,
  actions,
  mutations
}
