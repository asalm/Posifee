import Vue from 'vue';
import App from './App.vue';
import Buefy from 'buefy';
import VueApexCharts from 'vue-apexcharts';
import VueModalTor from 'vue-modaltor';
import VDragged from 'v-dragged';
import UniqueId from 'vue-unique-id';
import vuescroll from 'vuescroll';
import router from './router';

import './../node_modules/bulma/css/bulma.css';
import 'buefy/dist/buefy.css';

import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';

//icons
import {faReply} from '@fortawesome/free-solid-svg-icons';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
library.add(faReply,faArrowLeft);

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('apexchart', VueApexCharts);
Vue.config.productionTip = false

Vue.use(vuescroll, {
  ops: {
    // The global config
  },
  name: 'myScroll' // customize component name, default -> vueScroll
});
Vue.use(Buefy);
Vue.use(VueModalTor);
Vue.use(VDragged);
Vue.use(UniqueId);

//Default Routing to Login!
router.replace('/login');

initVue();

async function initVue() {
  await initScript().then(async function(r) {
    Vue.prototype.$api = r;
    Vue.prototype.$tkn = "ae46dd6cae25683f56985cc96b626cd81664cc76cf9be33975866e587a016603181d1604513edacab5bbe5db0fbf5cb906a911c09076e253aa794073e8ffc4ed"

    new Vue({
      router,
      render: h => h(App)
    }).$mount('#app')
  });
}

document.addEventListener('reset_user_connect', function (e) {

  // eslint-disable-next-line no-console
  console.log(e);
});

document.addEventListener('reset_user_invalid_token', function (e) {

  // eslint-disable-next-line no-console
  console.log("reset_user_invalid_token ", e);
  if(e.detail.event.code === "invalid_token"){
    // eslint-disable-next-line no-console
    console.log("invalid token ", e.detail);
}});

function initScript(){
  return new Promise(async function(res, rej){

    var url = new URL(window.location.href);
    var usr_tkn = url.searchParams.get("token");

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
      rej("Error establishing Conntection to impact-lab.tools!",e);
    }
    
    res(_r);
    
  });
}

