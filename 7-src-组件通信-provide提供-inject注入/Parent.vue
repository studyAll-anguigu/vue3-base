<template>
  <div>parent</div>
  <Child></Child>
</template>
<script lang="ts">
import Child from './Child.vue';
export default {
  name: 'Parent',
  components: {
    Child,
  },
};
</script>
