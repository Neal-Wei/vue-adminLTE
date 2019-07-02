import Vue from 'vue'
import Vuex from 'vuex'
import state from '../stores/state'
import mutation from '../stores/mutation'
import action from '../stores/action'
import getter from '../stores/getter'

Vue.use(Vuex)

export default{
  state,
  mutation,
  action,
  getter
}