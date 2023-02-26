import Vue from 'vue'
import Router from 'vue-router'
import routes from "@/router/routes";
import {getToken} from "@/utils/getToken";
import {NetworkError} from "core-js/internals/dom-exception-constants";
Vue.use(Router)

let router = new Router({
    routes,
    mode:'history'
})
router.beforeEach((to,from,next)=>{
    let token = getToken('token')
    if (token){
        if (to.path ==='/login') next('/home')
        next()
    }else {
        if (to.path !== '/login') next('/login')
        next()
    }
})

export default router
