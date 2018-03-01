import { VueInifiniteAutoComplete } from "../../src/VueInifiniteAutoComplete";

(window as any).Vue.use(VueInifiniteAutoComplete);

new (window as any).Vue({
  el: "#example",
});
