import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App, {props:{
    events: [
      { id: 'REALID1', description: 'FIIX' },
      { id: 'REALID2', description: 'BIIIR' }
    ]
  }})
}).$mount('#app')
