import Vue from 'vue';
import axios from 'axios';

import store from './store'
import {VIEW_LOADING} from '../store/types'

//数据请求时
axios.interceptors.request.use(function(config){
    store.dispatch(VIEW_LOADING,true)
    return config;
},function(error){
    return Promise.reject(error);
});

//数据回来时
axios.interceptors.response.use(function(response){
    store.dispatch(VIEW_LOADING,false)
    return response;
},function(error){
    return Promise.reject(error);
});



Vue.prototype.$axios=axios;
window.axios=axios;
export default axios;
