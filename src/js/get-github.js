const axios = require('axios');

export default class getLigblog {
  constructor() {
    this.API_PATH = '';
    this.request();
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
