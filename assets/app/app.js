import Vue from 'vue'
import App from './components/App.vue'
import store from './store'


new Vue({
  el: '#app-holder',
  store,
  render: h => h(App)
})