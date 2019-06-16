import axios from 'axios';
// const API_PATH = 'https://blog.hatena.ne.jp/mtmtkzm/mtmtkzm.hatenablog.com/atom/entry';
const API_PATH = 'http://mtmtkzm.hatenablog.com/';

export default function () {
  return axios.get(API_PATH, {})
    .then( response => {
      console.log('hatena:', response);
    })
    .catch( error => {
      console.error('hatena:', error);
      return [];
    });
}
