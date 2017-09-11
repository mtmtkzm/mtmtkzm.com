import * as types from './mutation-types';

export default {
  // 検索結果記事
  [types.UPDATE_ACTIVITIES] (state, data) {
    console.timeEnd('通信と整形にかかった時間：');
    state.activities = data;
    state.isLoaded = true;
  },
}
