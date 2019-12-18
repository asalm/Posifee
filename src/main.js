import Vue from 'vue';
import App from './App.vue';
import router from './router';

//npm packages
import Buefy from 'buefy';
import VueModalTor from 'vue-modaltor';
import VDragged from 'v-dragged';
import UniqueId from 'vue-unique-id';
import vuescroll from 'vuescroll';
import VueTour from 'vue-tour';
import VueCookies from 'vue-cookies'

//styles
require('vue-tour/dist/vue-tour.css');
import './../node_modules/bulma/css/bulma.css';
import './../node_modules/bulma-divider/dist/css/bulma-divider.min.css';
import 'buefy/dist/buefy.css';
import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';

//icons
import {faReply} from '@fortawesome/free-solid-svg-icons';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
library.add(faReply,faArrowLeft);

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false

//tell Vue to use stuff!
Vue.use(vuescroll, {
  ops: {
  },
  name: 'myScroll' // customize component name, default -> vueScroll
});
Vue.use(Buefy);
Vue.use(VueModalTor);
Vue.use(VDragged);
Vue.use(UniqueId);
Vue.use(VueTour);
Vue.use(VueCookies)

Vue.$cookies.config('7d');

router.replace('/login');


var _vm;
var url = new URL(window.location.href);
var usr_tkn = url.searchParams.get("token");

document.addEventListener('reset_user_connect', function (e) {

  //console.log(e, _vue.$dbConnector);
  // var _mainLogin = document.getElementById('loginModal');

  var _mainLogin = document.getElementById('loginModal');
  var _mainApp = document.getElementById('app');

  if(e.detail.user.success){

      // document.body.innerHTML = "";
      // var _appMain = document.createElement('div');
      // _appMain.id = 'appMain';
      // document.body.appendChild(_appMain);
      //_vm.$destroy();
      // console.log(e.detail.user);

      _mainApp.style.display = 'block';
      _mainLogin.style.display = "none";
      //Default Routing to Login!
      usr_tkn = e.detail.user.token;
      Vue.prototype.$api.usr = e.detail.user;
      initVue();
      // 


  }else{
      _mainApp.style.display = 'none';
      _mainLogin.style.display = "block";
      _vm.prototype.$api.usr = "undefined";
      // alert(e.detail.user.message);
  }

}, false);



document.addEventListener('reset_user_invalid_token', function (e) {

    // eslint-disable-next-line no-console
    console.log("reset_user_invalid_token ", e);
    if(e.detail.event.code === "invalid_token"){
      // eslint-disable-next-line no-console
      console.log("invalid token ", e.detail);
      var _mainLogin = document.getElementById('loginModal');
      var _mainApp = document.getElementById('app');


      _mainLogin.style.display = "block";
      if(_mainApp){
          // _mainApp.innerHTML = "";
          // _mainApp.id = 'app';
          _mainApp.style.display = 'none';
      }
    }
});

initVue();

async function initVue() {
  await initScript().then(async function(r) {
    Vue.prototype.$api = r;
    Vue.prototype.$tkn = "ae46dd6cae25683f56985cc96b626cd81664cc76cf9be33975866e587a016603181d1604513edacab5bbe5db0fbf5cb906a911c09076e253aa794073e8ffc4ed"

    _vm = new Vue({
      router,
      render: h => h(App)
    }).$mount('#app')
    }, function(){
      //on rejected!
      // eslint-disable-next-line no-console
      console.log("I dont have a token :((( ");
    }
  );
}

function initScript(){
  return new Promise(async function(res, rej){

    var config = {
      "host":"https://www.impact-lab.tools",
      "socket_host": "wss://impact-lab.tools",
      "user_token": usr_tkn,
      "app_token": "ae46dd6cae25683f56985cc96b626cd81664cc76cf9be33975866e587a016603181d1604513edacab5bbe5db0fbf5cb906a911c09076e253aa794073e8ffc4ed",
      "schemaName": "posi"
    };
    // eslint-disable-next-line no-undef
    var _r = new Router_func(config);
    try{
    await _r.setup();
    }catch(e){
      rej("Error establishing Connection to impact-lab.tools!",e);
    }
    
    res(_r);
    
  });
}

