<template>
  <div>
    <br /><br />
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
    <!-- 下一级路由组件的出口  -->
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
export default {
  name: 'List',
};
</script>

<script lang="ts" setup>
import { onActivated, onDeactivated } from 'vue';

onActivated(() => {
  console.log('list active');
});
onDeactivated(() => {
  console.log('list deactived');
});
</script>

<style scoped></style>
