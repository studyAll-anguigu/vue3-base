<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header></Header>
      <List></List>
      <Footer></Footer>
    </div>
  </div>
</template>
<script setup lang="ts">
import Header from './views/header.vue';
import List from './views/list/index.vue';
import Footer from './views/footer.vue';
</script>
<style scoped>
/*app*/
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
