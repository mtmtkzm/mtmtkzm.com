const axios = require('axios');

export default class getLigblog {
  constructor() {
    this.API_PATH = 'https://api.github.com/users/mtmtkzm/events';
    this.request();
  }

  request() {
    axios.get(this.API_PATH)
      .then(response => {
        this.selectNecessaryData(response);
      })
      .catch(error => {
        console.log('error', error);
      });
  }

  selectNecessaryData (response) {
    let necessaryData = [];
    let pushEventArray = response.data.filter(item => {
      if (item.type === 'PushEvent') { return true }
    }).forEach( item => {
      necessaryData.push({
        date: new Date(item.created_at),
        title: item.repo.name,
        desc: item.payload.commits[item.payload.commits.length - 1].message,
        link: `https://github.com/${item.repo.name}/commit/${item.payload.commits[item.payload.commits.length - 1].sha}`,
      });
    });
 
    console.log(necessaryData);
  }

}
