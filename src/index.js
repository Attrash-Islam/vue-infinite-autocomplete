import VueInfiniteAutocomplete from './vue-infinite-autocomplete.vue';

export default VueInfiniteAutocomplete;

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('vue-infinite-autocomplete', VueInfiniteAutocomplete);
}
