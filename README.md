# vue-infinite-autocomplete

Vue 2.x Wrapper for <a href="https://github.com/Attrash-Islam/infinite-autocomplete">infinite-autocomplete</a> library

<b>Note:</b> Whenever I mention the CORE, then I'm targeting the <a href="https://github.com/Attrash-Islam/infinite-autocomplete">infinite-autocomplete</a> library

# Install

via npm:
```
$ npm i --save vue-infinite-autocomplete
```

# Live Demo
- <a href="https://htmlpreview.github.io/?https://raw.githubusercontent.com/Attrash-Islam/vue-infinite-autocomplete/master/demo/index.html">Live Demo</a>

# Usage Example (See "demo" folder)

```vue
<template>
  <vue-infinite-autocomplete
    :options=currentOptions
    :value=currentValue
    v-on:select="handleOnSelect"
    v-on:loading-state="handleLoadingStateChange"
    v-on:error="handleError">
  </vue-infinite-autocomplete>
</template>

<script>
  import VueInfiniteAutocomplete from 'vue-infinite-autocomplete';
  export default {
    components: {
     "vue-infinite-autocomplete": VueInfiniteAutocomplete
    },
    data() {
      return {
        currentValue: "",
        currentOptions: [
          { text: 'Islam Attrash', value: 1},
          { text: 'Shai Reznik', value: 2},
          { text: 'Uri Shaked', value: 3},
          { text: 'Salsabel Eawissat', value: 4},
          { text: 'Mohammed Attrash', value: 5},
          { text: 'Mike Brocole', value: 6},
          { text: 'John Stewart', value: 7},
          { text: 'Stone Cold', value: 8},
          { text: 'Triple H', value: 9},
          { text: 'Sting The Stinger', value: 10},
          { text: 'Superman', value: 11},
          { text: 'Batman', value: 12},
          { text: 'The Joker', value: '13'},
          { text: 'Vanilla Icecream', value: '14'},
          { text: 'Stephane macmahon', value: '15'},
          { text: 'infinite autocomplete', value: '16'},
          { text: 'Barak Obama', value: null},
          { text: 'Bill Goldberg', value: 17},
          { text: 'Inishtanispfl', value: 'whooo? whoo?'},
          { text: 'Saloma', value: [1,2,3]},
          { text: 'Yosra Eawissat', value: {object: true}},
          { text: 'Medium Articles', value: 'what'}
        ]
      }
    },
    methods: {
      changeOptions() {
        this.currentOptions = [
          { text: 'Islam AttrashX', value: 1 },
          { text: 'Shai ReznikY', value: 2 },
          { text: 'Uri ShakedZ', value: 3 },
          { text: 'Salsabel EawissatE', value: 4 }
        ]
      },
      handleOnSelect(target, selectedValue) {
        console.log("selected: ", selectedValue);
      },
      handleLoadingStateChange(loadingState) {
        console.log("loading state: ", loadingState);
      },
      handleError(error) {
        console.log("error: ", error);
      }
    }
  }
</script>
```

# Params
```js
  /**
   * current value
   */
  value?: string;
  /**
   * data static source
   */
  options?:Array<{text: string, value: any}>;
  /**
   * max height for the options
   */
  maxHeight?:string;
  /**
   * data dynamic api source
   */
  getDataFromApi?(text:string, page:number, fetchSize:number):Promise<Array<any>>;
  /**
   * Chunk fetch size
   */
  fetchSize?:number,
  /**
   * Customized input class to override the default input
   */
  customizedInput?:IInputCompoenentConstructor;
  /**
   * Customized options class to override the default input
   */
  customizedOptions?:IOptionsComponentConstructor;
```

# Events

```js
   /**
   * select event output handler when choosing an option
   */
    v-on:select?(targetElement, selectedValue);
    /**
    * loading-state event output handler when choosing an option
    */
    v-on:loading-state?(loadingState: boolean);
    /**
    * error event output handler when exception thrown
    */
    v-on:error?(error: Error);
```
