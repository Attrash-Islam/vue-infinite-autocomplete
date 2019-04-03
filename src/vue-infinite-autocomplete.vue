<template>
    <span></span>
</template>

<script>
  import InfiniteAutocomplete from 'infinite-autocomplete';
  
  export default {
    props: {
      value: {
        required: false
      },
      dataSource: {
        required: false
      },
      fetchSize: {
        type: Number,
        required: false
      }
    },
    watch: {
      value() {
        if (this.value) {
          this.inifiniteAutocomplete.setState({
            value: this.value,
          });
        }
      },
      dataSource() {
        if (this.dataSource) {
          this.inifiniteAutocomplete.setState({
            data: this.dataSource,
          });
        }
      },
      fetchSize() {
        if (this.fetchSize) {
          this.inifiniteAutocomplete.setState({
            fetchSize: this.fetchSize,
          });
        }
      }
    },
    mounted() {
      this.inifiniteAutocomplete = InfiniteAutocomplete({
        ...this,
        data: this.dataSource,
        onSelect: (selectedOption) => {
          this.$emit("select", selectedOption)
        }
      }, this.$el);
    },
    destroyed() {
      this.inifiniteAutocomplete.destroy();
    }
  };
</script>
