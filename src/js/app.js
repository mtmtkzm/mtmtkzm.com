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
      creatMyActivities(myActivities);
    });
}

function creatMyActivities (activities) {
  console.log(activities);
  let myActivities = '';
  activities.forEach( item => {
    myActivities += `
      <a class="item ${item.type}" href="${item.url}" target="_blank">
        <h2 class="item-title">${item.title}</h2>
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
