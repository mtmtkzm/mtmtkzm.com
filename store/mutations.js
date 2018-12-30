export default {
  setToast(state, {text, icon}) {
    state.toast.isShow = true;
    state.toast.body = { text, icon };
  },
  destroyToast(state) {
    state.toast.isShow = false;
  }
};
