export default ({ store }, inject) => {
    inject('showError', (data) => {
      store.dispatch('alerts/open', data);
    });
    inject('showSpinner', (value) => {
      store.commit('SET_ISLOADING', value);
    });
  }
  