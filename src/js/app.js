// import getHatena from 'get-hatena';
// let hatena = new getHatena();

import getCodepen from 'get-codepen';
import getQiita from 'get-qiita';
import getLigblog from 'get-ligblog';
import getFlickr from 'get-flickr';
import getGithub from 'get-github';

let codepen = new getCodepen();
let qiita = new getQiita();
let ligblog = new getLigblog();
let flickr = new getFlickr();
let github = new getGithub();

console.time('通信にかかった時間：');
Promise
    .all([
        codepen.request(),
        qiita.request(),
        ligblog.request(),
        flickr.request(),
        github.request()
    ])
    .then( value => {
        let myActivities = [].concat(value);
        myActivities.sort( (a, b) => {
            if(a.date > b.date) return -1;
            if(a.date < b.date) return 1;
            return 0;
        });
        console.log('↓↓ myActivities ↓↓ \n', myActivities);
        console.timeEnd('通信にかかった時間：');
    });
