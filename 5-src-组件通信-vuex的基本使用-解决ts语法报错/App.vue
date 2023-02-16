<template>
  <div>年龄 {{ $store.state.person.age }}</div>
  <div>姓名 {{ $store.state.person.name }}</div>
  <button @click="$store.dispatch('person/addAge', 1)">年龄 + 1</button>
  <button @click="deAge(1)">年龄 - 1</button>
</template>
<script lang="ts">
import { mapActions } from 'vuex';

export default {
  name: 'App',
  data() {
    return {};
  },
  mounted() {
    console.log(this.$store);
  },
  methods: {
    ...mapActions('person', ['deAge']),
  },
};
</script>
