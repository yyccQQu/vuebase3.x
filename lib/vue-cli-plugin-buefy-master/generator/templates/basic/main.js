import Vue from 'vue'
import App from './App'
import Buefy from 'buefy'
import 'buefy/lib/buefy.css'

Vue.use(Buefy)

new Vue({
  render: h => h(App)
}).$mount('#app')
