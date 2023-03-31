import Vue from 'vue'
import App from './App.vue'
import htmlToPdf from '@/plugins/htmlToPdf';
Vue.use(htmlToPdf);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
//
// "html2canvas": "^1.4.1",
//     "jspdf": "^2.5.1",