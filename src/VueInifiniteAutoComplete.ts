import Vue, { PluginObject, PluginFunction, VueConstructor } from "vue";

export class VueInifiniteAutoComplete {
  public static install = (vue: VueConstructor<Vue>, options: any) => {
    vue.component("vue-infinite-autocomplete", {
      template: `<div>Working</div>`,
    });
  }
}

if (typeof window !== "undefined" && (window as any).Vue) {
  (window as any).Vue.use(VueInifiniteAutoComplete);
}
