<template>
  <!-- 具名插槽 -->
  <div>
    <slot name="header">
      <!-- 这里仅仅显示v-slot:header 的内容 -->
    </slot>

    <slot>
      <!-- 这里仅仅显示默认插槽的内容 -->
    </slot>
    <slot name="main">
      <!-- 这里仅仅显示插槽名为main的内容 -->
    </slot>
    <slot name="footer">
      <!-- 这里仅仅显示插槽名为 fooer的内容 -->
    </slot>
  </div>
</template>
<script lang="ts">
export default {};
</script>

<style scoped></style>
