<template>
  <div>
    <button @click="changeAge">自定义事件</button>
  </div>
</template>
<script lang="ts">
export default {
  name: 'SonEmit',
  emits: ['updateAge'],
  data() {
    return {
      name: '张三',
    };
  },
  methods: {
    changeAge() {
      this.$emit('updateAge', 10);
    },
  },
};
</script>

<style scoped></style>
