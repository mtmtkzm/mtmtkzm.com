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
      getGithub()
    ])
    .then( value => {
      let myActivities = [].concat(value);
      myActivities = Array.prototype.concat.apply([], myActivities).sort( (a, b) => {
        if ( a.date > b.date ) return -1;
        if ( a.date < b.date ) return 1;
        return 0;
      });
      console.log(myActivities);
      console.timeEnd('通信と整形にかかった時間：');
      commit(types.UPDATE_ACTIVITIES, myActivities);
    });

    // function createMyActivities (activities) {
    //   console.log(activities);
    //   let myActivities = '';
    //   let date = 0;
    //
    //   activities.forEach( item => {
    //     let itemDateYear = new Date(item.date).getFullYear();
    //     let itemDateMonth = new Date(item.date).getMonth() + 1;
    //     let itemDateDay = new Date(item.date).getDate();
    //
    //     let judgeDateOverlapsCondition = (
    //       ( itemDateYear !== new Date(date).getFullYear()) ||
    //       ( itemDateMonth !== new Date(date).getMonth() + 1) ||
    //       ( itemDateDay !== new Date(date).getDate())
    //     );
    //
    //     if (judgeDateOverlapsCondition) {
    //       date = item.date;
    //       myActivities += `
    //         <p class="activity-list__date-divider js-fade-activity-list-item">${itemDateYear}.${itemDateMonth}.${itemDateDay}</p>
    //       `;
    //     }
    //
    //     myActivities += `
    //       <article class="activity-list__item activity-list__item--${item.type} js-fade-activity-list-item">
    //         <a href="${item.url}" target="_blank">
    //           <img src="./assets/svg/${item.type}.svg">
    //           <h2>${item.title}</h2>
    //           <p>${item.desc}</p>
    //         </a>
    //       </article>
    //     `;
    //   });
    //
    //   document.querySelector('.js-activity').innerHTML = myActivities;
    // }
};
