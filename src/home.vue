<template>
  <div>{{ list }}</div>
</template>

<script lang="ts">
export default {
  name: 'Home',
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {};
  },
  mounted() {
    console.log(this);
  },
};
</script>

<style scoped></style>
