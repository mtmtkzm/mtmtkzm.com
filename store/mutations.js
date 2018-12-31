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
    Object.keys(weather.colors).forEach(key => {
      document.documentElement.style.setProperty(`--${key}-color`, weather.colors[key]);
    })
  }
};
