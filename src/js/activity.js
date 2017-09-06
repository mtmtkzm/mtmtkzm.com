// import getHatena from 'get-hatena';
import getCodepen from 'get-codepen';
import getQiita from 'get-qiita';
import getLigblog from 'get-ligblog';
import getFlickr from 'get-flickr';
import getGithub from 'get-github';

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
    console.timeEnd('通信と整形にかかった時間：');
    createMyActivities(myActivities);
  });

function createMyActivities (activities) {
  console.log(activities);
  let myActivities = '';
  let date = 0;

  activities.forEach( item => {
    let itemDateYear = new Date(item.date).getFullYear();
    let itemDateMonth = new Date(item.date).getMonth() + 1;
    let itemDateDay = new Date(item.date).getDate();

    let judgeDateOverlapsCondition = (
      ( itemDateYear !== new Date(date).getFullYear()) ||
      ( itemDateMonth !== new Date(date).getMonth() + 1) ||
      ( itemDateDay !== new Date(date).getDate())
    );

    if (judgeDateOverlapsCondition) {
      date = item.date;
      myActivities += `
        <p class="activity-list__date-divider">${itemDateYear}.${itemDateMonth}.${itemDateDay}</p>
      `;
    }

    myActivities += `
      <article class="activity-list__item activity-list__item--${item.type}">
        <a href="${item.url}" target="_blank">
          <img src="./assets/svg/${item.type}.svg">
          <h2>${item.title}</h2>
          <p>${item.desc}</p>
        </a>
      </article>
    `;
  });

  document.querySelector('.js-activity').innerHTML = myActivities;
}
