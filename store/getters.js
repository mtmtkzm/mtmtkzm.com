import weathers from '~/assets/data/weather-themes';

export default {
  weathers: state => {
    return weathers.filter(weather => weather.icon !== state.weather);
  }
};
