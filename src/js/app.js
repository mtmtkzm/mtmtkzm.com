// import getHatena from 'get-hatena';
import getCodepen from 'get-codepen';
import getQiita from 'get-qiita';
import getLigblog from 'get-ligblog';
import getFlickr from 'get-flickr';
import getGithub from 'get-github';

function requestMyActivities () {
  console.time('通信にかかった時間：');
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
      console.timeEnd('通信にかかった時間：');
      createMyActivities(myActivities);
    });
}

function createMyActivities (activities) {
  console.log(activities);
  let myActivities = '';
  let date = 0;

  activities.forEach( item => {
    let itemDateYear = new Date(item.date).getFullYear();
    let itemDateMonth = new Date(item.date).getMonth() + 1;
    let itemDateDay = new Date(item.date).getDay();

    let judgeDateOverlapsCondition = (
      ( itemDateYear !== new Date(date).getFullYear()) ||
      ( itemDateMonth !== new Date(date).getMonth() + 1) ||
      ( itemDateDay !== new Date(date).getDate())
    );

    if (judgeDateOverlapsCondition) {
      date = item.date; // 日付が変わったら、更新

      myActivities += `
        <h1>${itemDateYear}.${itemDateMonth}.${itemDateDay}</h1>
      `;
    }
    myActivities += `
      <a class="item ${item.type}" href="${item.url}" target="_blank">
        <h2 class="item-title">${item.title}</h2>
        <p class="item-date">${item.date}</p>
        <p class="item-desc">${item.desc}</p>
        
      </a>
    `;
  });
  document.querySelector('.activity').innerHTML =
    `
      <div class="my-activities">
        ${myActivities}
      </div>
    `;
}

requestMyActivities();
