import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import mutations from './mutations'

let state = {
  isLoaded: true
};

const store = () => new Vuex.Store({
  state,
  getters,
  actions,
  mutations
});

export default store;