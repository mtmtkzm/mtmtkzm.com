import * as types from './mutation-types'
import * as u from '../assets/js/utils'
import getCodepen from '../assets/js/services/get-codepen';
import getQiita from '../assets/js/services/get-qiita';
import getLigblog from '../assets/js/services/get-ligblog';
import getFlickr from '../assets/js/services/get-flickr';
import getGithub from '../assets/js/services/get-github';
// import getHatena from '../assets/js/services/get-hatena';

export const getActivitiesData = ({ commit }) => {
  const term = 100; // 直近100日にする
  Promise
    .all([ getLigblog(), getCodepen(), getQiita(), getFlickr(), getGithub(), /*getHatena()*/ ])
    .then( value => {
      let myActivities = [].concat(value);

      myActivities = Array.prototype.concat.apply([], myActivities)
        .filter( item => {
          if (new Date().getTime() - item.date < 1000*60*60*24*term) return true;
        })
        // 日付順で並び替え
        .sort( (a, b) => {
          if ( a.date > b.date ) return -1;
          if ( a.date < b.date ) return 1;
          return 0;
        });

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
         ( itemDate  !== u.toDate(date, 'date'))
    ){
      activitiesWithDate.splice(index + insertedDateCount, 0, {
        type: 'date',
        date: itemYear+'.'+u.doublenDigit(itemMonth)+'.'+u.doublenDigit(itemDate),
      });
      date = item.date;    // 日付が変わったので、まず前回の日付を更新
      insertedDateCount++; // 配列の総数が変わり、挿入した位置がひとつ後ろにずれる
    }
  });

  return activitiesWithDate;
}

export const setIsLoaded = ({commit}, boolean) => {
  commit(types.SET_IS_LOADED, boolean);
}