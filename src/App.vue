<template>
  <div>app</div>
  <Parent></Parent>
  {{ sonPeron }}
</template>

<script lang="ts">
import Parent from './Parent.vue';
import emitter from './utils/mitt';

export default {
  name: 'App',
  components: { Parent },
  data() {
    return {
      sonPeron: {},
    };
  },
  created() {
    // 监听事件(接收方)
    /**
     * 注意： 需要先绑定事件，然后等发布事件的时候，我们才能拿到我们发布的诗句。
     *
     * 如果我们在mounted里面绑定事件的话，会导致拿不到数据。因为这里渲染的顺序是，
     * 先mounted子组件，然后才到app的mounted。
     * 如果我在child的mounted时就发布数据，此时我们app还没有到mounted阶段。因此自然达不到数据。
     * **/
    console.log('app mounted');
    emitter.on('person', (e) => {
      this.sonPeron = e;
      console.log('收到了person', e);
    });
  },
  beforeUnmount() {
    emitter.off('person');
  },
};
</script>
