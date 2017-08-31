const axios = require('axios');
const API_PATH = 'https://api.github.com/users/mtmtkzm/events';

// 取得件数は決められないらしい
// Events support pagination, however the per_page option is unsupported.
// The fixed page size is 30 items.
// Fetching up to ten pages is supported, for a total of 300 events.

export default function getGithub () {
  return axios.get(API_PATH)
    .then( response => {
      return selectNecessaryData(response);
    })
    .catch( error => {
      console.log('error', error);
    });
}

function selectNecessaryData (response) {
  let necessaryData = [];
  let pushEventArray = response.data.filter( item => {
    if (item.type === 'PushEvent') return true;
  }).forEach( item => {
    necessaryData.push({
      type: 'github',
      date: Date.parse(item.created_at),
      title: item.repo.name,
      desc: item.payload.commits[item.payload.commits.length - 1].message, // ひとつのPushEventの中にある最後のコミット情報のみ
      url: `https://github.com/${item.repo.name}/commit/${item.payload.commits[item.payload.commits.length - 1].sha}`,
    });
  });

  return necessaryData;
}
