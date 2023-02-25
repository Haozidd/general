import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
export default new Router({
    routes:[
        {
            path: '/login',
            component: () => import ("@/components/Login")
        },
        {
            path: '/home',
            name:'home',
            component: () => import ("@/components/Home"),
            children:[
                {
                    path: '/home/students',
                    name:'学生管理',
                    iconClass: 'iconfont icon-zaijixueshengguanli',
                    component: () => import ("@/pages/Students"),
                    children:[
                        {
                            path: '/home/students/studentList',
                            name:'学生列表',
                            component: () => import ("@/pages/Students/StudentList"),
                        },
                        {
                            path: '/home/students/infoList',
                            name:'信息列表',
                            component: () => import ("@/pages/Students/InfoList"),
                        },
                        {
                            path: '/home/students/workList',
                            name:'作业列表',
                            component: () => import ("@/pages/Students/WorkList"),
                        }
                    ]
                },
                {
                    path: '/home/dataAnalysis',
                    name:'数据分析',
                    iconClass:'iconfont icon-shujufenxi',
                    component: () => import ("@/pages/DataAnalysis"),
                    children:[
                        {
                            path: '/home/dataAnalysis/dataView',
                            name:'数据概览',
                            component: () => import ("@/pages/DataAnalysis/DataView"),
                        },
                        {
                            path: '/home/dataAnalysis/mapView',
                            name:'地图概览',
                            component: () => import ("@/pages/DataAnalysis/MapView"),
                        },
                        {
                            path: '/home/dataAnalysis/scoreMap',
                            name:'分数概览',
                            component: () => import ("@/pages/DataAnalysis/ScoreMap"),
                        },
                        {
                            path: '/home/dataAnalysis/travelMap',
                            name:'旅游管理',
                            component: () => import ("@/pages/DataAnalysis/TravelMap"),
                        },
                    ]
                },
                {
                    path: '/home/users',
                    name:'用户中心',
                    iconClass: 'iconfont icon-yonghuzhongxin',
                    component: () => import ("@/pages/Users"),
                },
            ]
        },
        {
            path:'*',
            redirect:"/login"
        }
    ],
    mode:'history'
})