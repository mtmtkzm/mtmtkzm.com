const axios = require('axios');

export default class getGithub {
  constructor() {
    this.API_PATH = 'https://api.github.com/users/mtmtkzm/events';
  }

  request () {
    return axios.get(this.API_PATH)
      .then(response => {
        return this.selectNecessaryData(response);
      })
      .catch(error => {
        console.log('error', error);
        this.reject();
      });
  }

  selectNecessaryData (response) {
    let necessaryData = [];
    let pushEventArray = response.data.filter(item => {
      if (item.type === 'PushEvent') { return true }
    }).forEach( item => {
      necessaryData.push({
        type: 'github',
        date: Date.parse(item.created_at),
        title: item.repo.name,
        desc: item.payload.commits[item.payload.commits.length - 1].message,
        url: `https://github.com/${item.repo.name}/commit/${item.payload.commits[item.payload.commits.length - 1].sha}`,
      });
    });
 
    return necessaryData;
  }
}
