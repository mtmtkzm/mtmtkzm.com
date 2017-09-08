const axios = require('axios');
const API_PATH = 'https://api.github.com/users/mtmtkzm/events';

// 取得件数は決められないらしい
// Events support pagination, however the per_page option is unsupported.
// The fixed page size is 30 items.
// Fetching up to ten pages is supported, for a total of 300 events.

export default function () {
  return axios.get(API_PATH)
    .then( response => {
      return selectNecessaryData(response);
    })
    .catch( error => {
      console.error(error);
      return [];
    });
}

function selectNecessaryData (response) {
  let necessaryData = [];
  response.data.filter( item => {
    if (item.type === 'PushEvent') return true;
  }).forEach( item => {
    necessaryData.push({
      type: 'github',
      date: Date.parse(item.created_at),
      title: item.payload.commits[item.payload.commits.length - 1].message, // ひとつのPushEventの中にある最後のコミット情報のみ
      desc: `Comitted to ${item.repo.name}`,
      url: `https://github.com/${item.repo.name}/commit/${item.payload.commits[item.payload.commits.length - 1].sha}`,
    });
  });

  return necessaryData;
}