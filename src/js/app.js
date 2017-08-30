// import getHatena from 'get-hatena';
// let hatena = new getHatena();

import getCodepen from 'get-codepen';
import getQiita from 'get-qiita';
import getLigblog from 'get-ligblog';
import getFlickr from 'get-flickr';
import getGithub from 'get-github';

let codepen = new getCodepen();
let qiita = new getQiita();
let ligblog = new getLigblog();
let flickr = new getFlickr();
let github = new getGithub();



Promise
	.all([
		new Promise( (resolve, reject) => {
			codepen.request(resolve, reject);
		}),
		new Promise( (resolve, reject) => {
			qiita.request(resolve, reject);
		}),
		new Promise( (resolve, reject) => {
			ligblog.request(resolve, reject);
		}),
		new Promise( (resolve, reject) => {
			flickr.request(resolve, reject);
		}),
		new Promise( (resolve, reject) => {
			github.request(resolve, reject);
		})
	])
	.then( () => {
		codepen.returnData();
		qiita.returnData();
		ligblog.returnData();
		flickr.returnData();
		github.returnData();
	});

