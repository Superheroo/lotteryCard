import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const Store = new Vuex.Store({
    state: {
        pageSite:0,//默认首页
        pageType: 'main',//
        headerTitle:''
    },
    mutations:{
        changeMainPage(state, val) {
            state.pageSite = val
        },
        changeChildPage(state, val) {
            state.pageType = val
        },
        changeTitle(state, val) {
            state.headerTitle = val
        }
    }
})


export default Store