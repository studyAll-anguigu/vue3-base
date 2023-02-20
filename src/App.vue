<template>
  <div>App</div>
  <!-- 使用 完整引入 组件库之后，其他组件无需再引入组件，即可直接使用 -->
  <el-row class="mb-4">
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
  </el-row>
</template>

<script lang="ts">
export default {
  name: 'App',
};
</script>

<script lang="ts" setup></script>

<style scoped></style>
