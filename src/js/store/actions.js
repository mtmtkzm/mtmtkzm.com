import * as types from './mutation-types'
import * as u from '../utils'
import getCodepen from '../services/get-codepen';
import getQiita from '../services/get-qiita';
import getLigblog from '../services/get-ligblog';
import getFlickr from '../services/get-flickr';
// import getHatena from '../services/get-hatena';
// import getGithub from '../services/get-github';

export const getActivitiesData = ({ commit }) => {
  console.time('通信と整形にかかった時間：');
  Promise
    .all([
      getCodepen(), getQiita(), getLigblog(), getFlickr()
    ])
    .then( value => {
      let myActivities = [].concat(value);
      myActivities = Array.prototype.concat.apply([], myActivities)
        .filter( item => {
          // 直近30日限定にする
          if (new Date().getTime() - item.date < 1000*60*60*24*30) return true;
        })
        .sort( (a, b) => {
          if ( a.date > b.date ) return -1;
          if ( a.date < b.date ) return 1;
          return 0;
        });
      console.timeEnd('通信と整形にかかった時間：');
      commit(types.UPDATE_ACTIVITIES, insertDate(myActivities));
    });
};

function insertDate (activities) {
  let activitiesWithDate = [].concat(activities);
  let date = 0;
  let insertedDateCount = 0;

  activities.forEach( (item, index) => {
    let itemYear = u.toDate(item.date, 'year');
    let itemMonth = u.toDate(item.date, 'month');
    let itemDate = u.toDate(item.date, 'date');

    // 前回の投稿とくらべて、投稿日が変わったとき
    if ( ( itemYear  !== u.toDate(date, 'year')) ||
         ( itemMonth !== u.toDate(date, 'month')) ||
         ( itemDate   !== u.toDate(date, 'date'))
    ){
      activitiesWithDate.splice(index + insertedDateCount, 0, {
        type: 'date',
        date: itemYear + '.' +
              u.doublenDigit(itemMonth) + '.' +
              u.doublenDigit(itemDate),
      });

      date = item.date;    // 日付が変わったので、まず前回の日付を更新
      insertedDateCount++; // 配列の総数が変わり、挿入した位置がひとつ後ろにずれる
    }
  });

  return activitiesWithDate;
}
