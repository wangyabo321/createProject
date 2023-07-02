<template>
  <div class="hello">
    <h2>{{ msg }}--{{ name }}--{{ age }}</h2>
    <h3>窗口的宽度:{{ width }}</h3>
    <h3>窗口的高度:{{ height }}</h3>
    <el-icon><avatar /></el-icon>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
  </div>
</template>

<script lang="ts">
// 按需导入图标库
import { Avatar } from '@element-plus/icons-vue'
//  pinia 使用
import { storeToRefs } from 'pinia'
import { useStore } from '../store/index'
// vueUse 使用
import { useWindowSize } from '@vueuse/core'

export default defineComponent({
  name: 'HelloWorld',
  components: {
    Avatar
  },
  setup() {
    const msg = ref('测试信息1231')
    // 响应式解构
    const { age, name } = storeToRefs(useStore())
    // 响应式获取窗口尺寸
    const { width, height } = useWindowSize()
    return {
      msg,
      age,
      name,
      width,
      height
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '@/assets/css/common.scss';
.hello {
  color: $color;
}
</style>
