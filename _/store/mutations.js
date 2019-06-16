export default {
  setToast(state, {text, icon}) {
    state.toast.isShow = true;
    state.toast.body = { text, icon };
  },

  destroyToast(state) {
    state.toast.isShow = false;
  },

  updateWeather(state, weather) {
    state.weather = weather;

    // CSS変数に入っているCSS変数を変更する
    ['primary', 'secondary'].forEach(level => {
      document.documentElement.style.setProperty(
        `--color-${level}`,
        `var(--color-${weather}-${level})`
      );
    })
  },

  setArticles(state, articles) {
    state.articles.list = articles;
    state.articles.isLoading = false;
  }
};
