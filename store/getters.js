export default {
  weathers: state => {
    return state.weathers.filter(weather => weather !== state.weather);
  }
};
