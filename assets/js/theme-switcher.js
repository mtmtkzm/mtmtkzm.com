export default {
  update: function (colors) {
    Object.keys(colors).forEach(key => {
      document.documentElement.style.setProperty(`--${key}-color`, colors[key]);
    })
  },
}
