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


var url = new URL(window.location.href);
var usr_tkn = url.searchParams.get("token");

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');

/*
initVue();



async function initVue() {

  await initScript().then(async function(rsObj) {


      Vue.prototype.$dbConnector = rsObj.router;
      Vue.prototype.$token = app_tkn;
      Vue.prototype.$usr_tkn = usr_tkn

    new Vue({
      router,
      render: h => h(App)
    }).$mount('#app')


  });
}

function initScript(){
  return new Promise(async function(res, rej){

    var config = {
      "host" : ParentMachine,
      "user_token" : usr_tkn,
      "app_token" : app_tkn,
      "schemaName" : "posi"
    };

    var _r = new Router_func(config);
    await _r.setup();


    res( {'router':_r});
  });
}
*/