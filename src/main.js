import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
//import store from './store'
import utils from "./mixins/utils"
import _Globals from "./plugins/_Globals"
import _I18n from "./plugins/_I18n"
import "./assets/js/commons"
import vueSvgImg from '@libertypie/vue-svg-img'

createApp(App)
    .use(_I18n)
    .use(_Globals)
    //.use(store)
    .use(router)
    .use(vueSvgImg)
    //.mixin(utils)
    .mount('#app')
