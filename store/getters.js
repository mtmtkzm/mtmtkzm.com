export default {
  otherLocales: function(state) {
    return state.locales.filter(locale => locale !== this.$i18n.fallbackLocale);
  }
};
