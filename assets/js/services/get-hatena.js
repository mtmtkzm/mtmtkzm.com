const axios = require('axios');

export default class getHatena {
  constructor() {
    this.API_PATH = 'https://blog.hatena.ne.jp/mtmtkzm/mtmtkzm.hatenablog.com/atom/entry';
    this.resolve;
    this.reject;
  }

  request (resolve, reject) {
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
