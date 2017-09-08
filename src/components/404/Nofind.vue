<template>
  <div class="">
    404
  </div>
</template>

<script lang="ts">
import Vue, {ComponentOptions} from 'vue'
export default {
  name: 'hello',
  data() {
    return {
      msg: 'this is a typescript project now'
    }
  }
} as ComponentOptions<Vue>
</script>

<!-- scoped添加私有样式  lang添加babel编译  rel添加IDE识别 -->
<style scoped lang="scss" rel="stylesheet/scss">

</style>
