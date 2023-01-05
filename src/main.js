import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import VueQuillEditor from 'vue-quill-editor'

import 'quill/dist/quill.snow.css';

import '../src/assets/style.css';
import '../src/assets/colors.css';

Vue.config.productionTip = false
Vue.use(VueQuillEditor);

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
