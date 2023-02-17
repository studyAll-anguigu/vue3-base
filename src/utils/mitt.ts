// 引入 mitt : 用于组件通信
import mitt from 'mitt';

// 创建一个全局事件总线对象
const emitter =  mitt();
// 导出对象
export default  emitter