export default () => ({
  weathers: ['sun', 'cloud', 'cloud-rain', 'cloud-lightning'],
  weather: 'cloud',
  articles: {
    types: ['qiita', 'ligblog'],
    isLoading: true,
    list: [],
  },
  toast: {
    isShow: false,
    body: {
      text: '',
      icon: ''
    }
  },
});
