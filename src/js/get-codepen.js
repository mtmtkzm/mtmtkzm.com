const parseString = require('xml2js').parseString;
const axios = require('axios');
const API_PATH = 'https://codepen.io/mtmtkzm/public/feed';

export default function getCodepen () {
  return axios.get(API_PATH)
    .then( response => selectNecessaryData(response) )
    .catch( error => {
      console.log('error', error);
    });
}

function selectNecessaryData (response) {
  let xmlString = response.request.responseText;
  let necessaryData = [];

  parseString(xmlString, (err, result) => {     
    result.rss.channel[0].item.forEach( i => {
      necessaryData.push({
        type: 'codepen',
        date: Date.parse(removeParagraphs(removeSpaces(i['dc:date'][0]))),
        title: i.title[0],
        desc: removeParagraphs(i.description[0]),
        url: i.link[0]
      })
    });
  });

  return necessaryData;
}

// 改行を削除
function removeParagraphs (str) {
  return str.replace(/\r?\n/g,"");
}

// スペースを削除
function removeSpaces (str) {
  return str.replace(/\s/g, "");
}
