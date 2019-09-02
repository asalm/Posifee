import Vue from 'vue';
import App from './App.vue';
import Buefy from 'buefy';
import VueApexCharts from 'vue-apexcharts';
import VueModalTor from 'vue-modaltor';
import VDragged from 'v-dragged';
import UniqueId from 'vue-unique-id';
import router from './router';

import './../node_modules/bulma/css/bulma.css';
import 'buefy/dist/buefy.css';

import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';

//icons
import {faReply} from '@fortawesome/free-solid-svg-icons';

library.add(faReply);

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('apexchart', VueApexCharts);
Vue.config.productionTip = false

Vue.use(Buefy);
Vue.use(VueModalTor);
Vue.use(VDragged);
Vue.use(UniqueId);

//Default Routing to Login!
router.replace('/login');

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
