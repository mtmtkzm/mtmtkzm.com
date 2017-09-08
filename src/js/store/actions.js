import * as types from './mutation-types'

// import getHatena from '../services/get-hatena';
import getCodepen from '../services/get-codepen';
import getQiita from '../services/get-qiita';
import getLigblog from '../services/get-ligblog';
import getFlickr from '../services/get-flickr';
import getGithub from '../services/get-github';

export const getActivitiesData = ({ commit, state }) => {
  console.time('通信と整形にかかった時間：');
  Promise
    .all([
      getCodepen(),
      getQiita(),
      getLigblog(),
      getFlickr(),
      // getGithub()
    ])
    .then( value => {
      let myActivities = [].concat(value);
      myActivities = Array.prototype.concat.apply([], myActivities).sort( (a, b) => {
        if ( a.date > b.date ) return -1;
        if ( a.date < b.date ) return 1;
        return 0;
      });
      console.timeEnd('通信と整形にかかった時間：');
      commit(types.UPDATE_ACTIVITIES, insertDate(myActivities));
    });

    function insertDate (activities) {
      let activitiesWithDate = [].concat(activities);
      let date = 0;
      let insertedDateCount = 0;

      activities.forEach( (item, index) => {
        let itemDateYear = new Date(item.date).getFullYear();
        let itemDateMonth = new Date(item.date).getMonth() + 1;
        let itemDateDay = new Date(item.date).getDate();

        // 前回の投稿とくらべて、投稿日が変わったとき
        if ( ( itemDateYear !== new Date(date).getFullYear()) ||
             ( itemDateMonth !== new Date(date).getMonth() + 1) ||
             ( itemDateDay !== new Date(date).getDate()) ) {

          // 配列に日付を挿入する
          activitiesWithDate.splice(index + insertedDateCount, 0, {
            type: 'date',
            date: `${itemDateYear}.${('00'+String(itemDateMonth)).slice(-2)}.${('00'+String(itemDateDay)).slice(-2)}`,
          });

          date = item.date;    // 日付が変わったので、まず前回の日付を更新
          insertedDateCount++; // 配列の総数が変わり、挿入した位置がひとつ後ろにずれる
        }
      });

      return activitiesWithDate;
    }
};
