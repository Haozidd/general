import Vue from "vue";
import Vuex from "vuex"
import studentList from "@/store/studentList";

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        studentList
    }
})