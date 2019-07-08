const axios = require('axios')
const API_PATH = 'https://api.github.com/users/mtmtkzm/events'

export default function() {
  return axios
    .get(API_PATH)
    .then(response => {
      return selectNecessaryData(response)
    })
    .catch(error => {
      console.error(error)
      return []
    })
}

function selectNecessaryData(response) {
  const necessaryData = []
  response.data
    .filter(item => {
      if (item.type === 'PushEvent' && item.payload.ref === 'refs/heads/master')
        return true
    })
    .forEach(item => {
      const lastCommit = item.payload.commits.length - 1

      necessaryData.push({
        type: 'github',
        date: Date.parse(item.created_at),
        title: item.payload.commits[lastCommit].message, // ひとつのPushEventの中にある最後のコミット情報のみ
        desc: `Committed to ${item.repo.name}`,
        url: `https://github.com/${item.repo.name}/commit/${item.payload.commits[lastCommit].sha}`
      })
    })

  return necessaryData
}
