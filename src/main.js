import Vue from 'vue'
import Vuex from "vuex"
import App from './App.vue'

import router from "@/router";
import store from "@/store";

import VueFluent from "vfluentdesign";
import "vfluentdesign/lib/index.css";
import "@/style/global.scss";

Vue.use(VueFluent, Vuex);

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
