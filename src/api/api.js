// import request from '@/utils/request'
import Vue from 'vue'
import axios from "axios"

Vue.prototype.$axios = axios
axios.defaults.baseURL='http://jsonplaceholder.typicode.com'
axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'

export function getUsers(){
    // axios.get('/users')
    console.log(axios.defaults.baseURL);
}
