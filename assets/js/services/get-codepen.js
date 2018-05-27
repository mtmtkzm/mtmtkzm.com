import * as u from '../utils';
const parseString = require('xml2js').parseString;
const axios = require('axios');
const API_PATH = 'https://codepen.io/mtmtkzm/public/feed';

export default function () {
  return axios.get(API_PATH)
    .then( response => selectNecessaryData(response) )
    .catch( error => {
      console.error(error);
      return [];
    });
}

function selectNecessaryData (response) {
  let xmlString = response.request.responseText;
  let necessaryData = [];

  parseString(xmlString, (err, result) => {     
    result.rss.channel[0].item.forEach( i => {
      necessaryData.push({
        type: 'codepen',
        date: Date.parse(u.removeParagraphs(u.removeSpaces(i['dc:date'][0]))),
        title: i.title[0],
        desc: u.extractDescription(i.description[0], 'p:nth-child(3)'),
        url: i.link[0]
      })
    });
  });

  return necessaryData;
}
