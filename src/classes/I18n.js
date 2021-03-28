/**
 * LibertyPie (https://libertypie.com)
 * @license MIT
 */

import * as _langData from "@/locales/en.js"

export default class I18n {
    
    langData= _langData;
    loadedLangs = {en: _langData};
    defaultLang = "en";
    supportedLangs = ["en"];

    async initialize(){
        this.setLang()
    }

    translate (key,params = null){
    
        let langData = this.langData || {}

        if(!langData.hasOwnProperty(key)){
            //console.log(langData)
            return key
        }

        let str =  this.langData[key]

        
        if(str == key){ return str}
        
       // console.log(langData)

        if(Array.isArray(params) && params.length > 0){
           
            str = str.replace(/\{[0-9]+\}/g, function(match) {
                match = match.replace(/[\{\}]+/g,"")
                return params[match] || match;
            });
        }

        return str
    }
    
    async setLang(lang = null){

        if(!lang || lang == null) {
           lang = await this.getLang()
        }

        if(this.loadedLangs.hasOwnProperty(lang)){
            return;
        }
        
        let _this = this;

        //return (new Promise(async (resolve, reject) => {
    
        //if in format en-US or en-GB
        if(lang.indexOf("-") !== -1){
            lang = lang.split("-")[0]
        }

        if(!_this.supportedLangs.includes(lang)){
            lang = _this.defaultLang
        }
                
        import("@/locales/"+lang+".js").then((result)=>{
            _this.langData = result.default;
            _this.loadedLangs[lang] = _this.langData;
            window.dispatchEvent(new Event("lang-load"));
        })

        //}))
    }

    getLang(){
        let browserLang = navigator.language || navigator.userLanguage;
        let userLang = sessionStorage.getItem("lang") || browserLang || "en"
        return userLang
    }
    
}