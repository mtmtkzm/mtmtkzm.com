export default {
  weathers: state => {
    return ['sun', 'cloud', 'cloud-rain', 'cloud-lightning'].filter(weather => weather !== state.weather);
  }
};
