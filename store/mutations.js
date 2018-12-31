import weathers from '~/assets/data/weather-themes';

export default {
  setToast(state, {text, icon}) {
    state.toast.isShow = true;
    state.toast.body = { text, icon };
  },
  destroyToast(state) {
    state.toast.isShow = false;
  },
  updateWeather(state, weather) {
    state.weather = weather.icon;

    // CSS変数を直接変更する
    ['primary', 'secondary'].forEach(level => {
      document.documentElement.style.setProperty(
        `--color-${level}`,
        `var(--color-${weather.icon}-${level})`
      );
    })
  }
};
