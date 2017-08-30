const axios = require('axios');

export default class getLigblog {
  constructor() {
    this.API_PATH = 'https://api.github.com/users/mtmtkzm/events';
    this.request();
  }

  request() {
    axios.get(this.API_PATH)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log('error', error);
      });
  }

}
