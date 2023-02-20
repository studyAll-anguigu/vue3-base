<template>
  <div>
    <div>List</div>
    <ul>
      <router-link :to="{ name: 'Detail', params: { id: 1 } }"
        >message</router-link
      ><br />
      <router-link :to="{ name: 'Detail', params: { id: 2 } }"
        >message</router-link
      ><br />
      <router-link :to="{ name: 'Detail', params: { id: 3 } }"
        >message</router-link
      ><br />
      <router-link :to="{ name: 'Detail', params: { id: 4 } }"
        >message</router-link
      ><br />
      <router-link :to="{ name: 'Detail', params: { id: 5 } }"
        >message</router-link
      ><br />
    </ul>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
export default {
  name: 'List',
};
</script>

<script lang="ts" setup></script>

<style scoped></style>
