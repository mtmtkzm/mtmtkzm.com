const axios = require('axios');

export default class getLigblog {
  constructor() {
    this.API_PATH = 'https://liginc.co.jp/wp-json/wp/v2/posts';
    this.request();
  }

  request() {
    axios.get(this.API_PATH, {
      params: {
        'author': '396'
      }
    })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log('error', error);
      });
  }

}
