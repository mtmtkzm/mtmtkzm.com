import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import mutations from './mutations'

let state = {
  isLoaded: false
};

const store = () => new Vuex.Store({
  state,
  getters,
  actions,
  mutations
});

export default store;