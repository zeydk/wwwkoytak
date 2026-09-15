// Restore the visitor's saved language choice on the client.
export default ({ store }) => {
  if (typeof window === 'undefined' || !window.localStorage) return;
  const saved = window.localStorage.getItem('locale');
  if (saved === 'tr' || saved === 'en') {
    store.commit('SET_LOCALE', saved);
  }
};
