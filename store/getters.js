const weathers = ['sun', 'cloud', 'cloud-rain', 'cloud-lightning'];
export default {
  weathers: state => {
    return weathers.filter(weather => weather !== state.weather);
  }
};
