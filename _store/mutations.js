import * as types from './mutation-types';

export default {
  // 検索結果記事
  [types.UPDATE_ACTIVITIES] (state, data) {
    state.activities = data;
    state.isLoaded = true;
  },

  [types.SET_IS_LOADED] (state, bool) {
    state.isLoaded = bool;
  },
}
