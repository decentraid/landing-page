/**
 * LibertyPie (https://libertypie.com)
 * @author LibertyPie <hello@libertypie.com>
 * @license MIT
 */

//import Loader from "../components/partials/Loader.vue";
import Http from '../classes/Http';

export default { 
    install(app, options) {

        Http.loadPolyfill();

        //register global component
        //app.component("Loader",Loader)
       
        let _globals = app.config.globalProperties;

    
        _globals.$httpGet = Http.get;
        _globals.$httpPost = Http.post;
        _globals.$getJson = Http.getJson;

    }  // install

 }