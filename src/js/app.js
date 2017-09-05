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
  activities.forEach( item => {
    let myActivity = `
      <div>
        <h2>${item.title}</h2>
        <p>${item.desc}</p>
      </div>
    `;
  })
}

requestMyActivities();
