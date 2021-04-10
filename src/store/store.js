import { createStore } from 'vuex'

const store = createStore({
    state:{
        name: "Vuex",
        user: null
    },
    getters: {
        getNameLength : state => {
            return state.name.length
        },
        getUserDetails : state => {
            return state.user
        }
    },
    mutations: {
        test (state, payload) {
            console.log({...state,mutatedValue:payload})
        },
        setUserDetails (state, payload) {
            state.user = payload
        }
    },
    actions: {
        testAction ({commit}, actionPayload) {
            commit('test', actionPayload)
        },
        setUserDetailsAction ({commit}, actionPayload) {
            commit('setUserDetails', actionPayload)
        }
    }
})

export default store





// this.userDisplayName = this.$store.state.name
            // // this.nameLength = this.$store.getters.getNameLength
            // console.log(this.$store.getters.getNameLength)
            // console.log(this.$store.state.user)
            // this.$store.commit('test', 'hello')
            // this.$store.dispatch('testAction', 'yes!!!')
            // this.userDetails = this.$store.getters.getUserDetails
            // this.$store.dispatch('setUserDetailsAction',"oh!!")