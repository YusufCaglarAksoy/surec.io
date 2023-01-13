import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import SecureLS from "secure-ls";
var ls = new SecureLS({ isCompression: false });

export default createStore({
    state:{
        user: null,
        units:null,
        boards:null,
        tokenTime:null,
    },
    mutations:{
        setUser(state, data){
            state.user = data;
            let dt = new Date();
            dt.setMinutes(dt.getMinutes() + 30)
            state.tokenTime = dt;
        },
        logoutUser(state) {
            state.user = null;
        },
    },
    getters:{
        _isAuthenticated: state => state.user !== null,
        _getCurrentUser(state) {
            const user = state.user;
            delete user?.password;
            return user;
        },
        _currentUserId: state => state?.tokenTime > new Date(),
        _tokenTime: state => state?.tokenTime,
        _saltKey: state => state.saltKey
    },
    plugins: [
        createPersistedState({
            storage: {
                getItem: key => ls.get(key),
                setItem: (key, value) => ls.set(key, value),
                removeItem: key => ls.remove(key)
            }
        })
    ]
})
