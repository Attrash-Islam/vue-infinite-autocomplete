# vue-infinite-autocomplete

Vue 2.x Wrapper for <a href="https://github.com/Attrash-Islam/infinite-autocomplete">infinite-autocomplete</a> library

# Install

via npm:
```
$ npm i -S vue-infinite-autocomplete
```

# Usage Example (See "demo" folder)

```vue
<template>
  <vue-infinite-autocomplete
    :data-source=currentOptions
    :value=currentValue
    v-on:select="handleOnSelect">
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
          { text: 'Islam Attrash', id: 1},
          { text: 'Shai Reznik', id: 2},
          { text: 'Uri Shaked', id: 3},
          { text: 'Salsabel Eawissat', id: 4},
          { text: 'Mohammed Attrash', id: 5},
          { text: 'Mike Brocole', id: 6},
          { text: 'John Stewart', id: 7},
          { text: 'Stone Cold', id: 8},
          { text: 'Triple H', id: 9},
          { text: 'Sting The Stinger', id: 10},
          { text: 'Superman', id: 11},
          { text: 'Batman', id: 12},
          { text: 'The Joker', id: '13'},
          { text: 'Vanilla Icecream', id: '14'},
          { text: 'Stephane macmahon', id: '15'},
          { text: 'infinite autocomplete', id: '16'},
          { text: 'Barak Obama', id: null},
          { text: 'Bill Goldberg', id: 17},
          { text: 'Inishtanispfl', id: 'whooo? whoo?'},
          { text: 'Saloma', id: [1,2,3]},
          { text: 'Yosra Eawissat', id: {object: true}},
          { text: 'Medium Articles', id: 'what'}
        ]
      }
    },
    methods: {
      changeOptions() {
        this.currentOptions = [
          { text: 'Islam AttrashX', id: 1 },
          { text: 'Shai ReznikY', id: 2 },
          { text: 'Uri ShakedZ', id: 3 },
          { text: 'Salsabel EawissatE', id: 4 }
        ]
      },
      handleOnSelect(selectedValue) {
        console.log("selected: ", selectedValue);
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
   * data source
   */
  dataSource?:Array<{text: string, id: any}>;
  /**
   * Chunk fetch size
   */
  fetchSize?:number,
```

# Events

```js
   /**
   * select event output handler when choosing an option
   */
    v-on:select?(selectedValue);
```
