<template>
    <span></span>
</template>

<script>
  import { InfiniteAutocomplete } from 'infinite-autocomplete';
  
  export default {
    props: {
      value: {
        validator: (value) => {
          return true
        },
        required: false
      },
      options: {
        type: Array,
        required: false
      },
      getDataFromApi: {
        type: Function,
        required: false
      },
      fetchSize: {
        type: Number,
        required: false
      },
      maxHeight: {
        type: String,
        required: false
      },
      customizedInput: {
        type: Function,
        required: false,
      },
      customizedOptions: {
        type: Function,
        required: false,
      },
    },
    watch: {
      value() {
        if (this.value) {
          this.inifiniteAutocomplete.setConfig({
            value: this.value,
          });
        }
      },
      options() {
        if (this.options) {
          this.inifiniteAutocomplete.setConfig({
            data: this.options,
          });
        }
      },
      fetchSize() {
        if (this.fetchSize) {
          this.inifiniteAutocomplete.setConfig({
            fetchSize: this.fetchSize,
          });
        }
      },
      maxHeight() {
        if (this.maxHeight) {
          this.inifiniteAutocomplete.setConfig({
            maxHeight: this.maxHeight,
          });
        }
      },
      customizedInput() {
        if (this.customizedInput) {
          this.inifiniteAutocomplete.setConfig({
            customizedInput: this.customizedInput,
          });
        }
      },
      customizedOptions() {
        if (this.customizedOptions) {
          this.inifiniteAutocomplete.setConfig({
            customizedOptions: this.customizedOptions,
          });
        }
      },
    },
    mounted() {
      this.inifiniteAutocomplete = new InfiniteAutocomplete(
        this.$el
      );

      const definedProps = [
        "value",
        "options",
        "getDataFromApi",
        "fetchSize",
        "maxHeight",
        "customizedInput",
        "customizedOptions"
      ].filter(x => this[x]);

      const initalConfig = definedProps.reduce((accumulator, currentKey) => {
        return {
          ...accumulator,
          [currentKey === "options" ? "data" : currentKey]: this[currentKey]
        }
      }, {});

      this.inifiniteAutocomplete.setConfig({
        ...initalConfig,
        onSelect: (target, selectedValue) => {
          this.$emit("select", target, selectedValue)
        },
        onLoadingStateChange: (loadingState) => {
          this.$emit("loading-state", loadingState);
        },
        onError: (error) => {
          this.$emit("error", error);
        }
      });

    },
    destroyed() {
      this.inifiniteAutocomplete.destroy();
    }
  };
</script>
