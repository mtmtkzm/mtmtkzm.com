const axios = require('axios');

export default class getHatena {
  constructor() {
    this.API_PATH = 'https://blog.hatena.ne.jp/mtmtkzm/mtmtkzm.hatenablog.com/atom/entry';
    // this.request();
  }

  request() {
    axios.get(this.API_PATH, {
      params: {}
    })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log('error', error);
      });
  }

}
