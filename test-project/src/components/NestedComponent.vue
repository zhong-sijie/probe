<script setup lang="ts">
import { ref } from "vue";
import BasicComponent from "./BasicComponent.vue";
import VariableComponent from "./VariableComponent.vue";

const title = ref("嵌套组件测试");
</script>

<template>
  <div class="nested-component">
    <h2>{{ title }}</h2>

    <!-- 嵌套的基础组件 -->
    <div class="nested-level-1">
      <p>第一层嵌套的文本</p>
      <BasicComponent />

      <div class="nested-level-2">
        <p>第二层嵌套的文本</p>

        <div class="nested-level-3">
          <p>第三层嵌套的文本</p>

          <!-- 深层嵌套的变量组件 -->
          <VariableComponent />

          <div class="nested-level-4">
            <p>第四层嵌套的文本</p>
            <span>这是最深层的文本节点</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 组件属性传递 -->
    <BasicComponent />
    <VariableComponent />

    <!-- 动态组件 -->
    <component :is="BasicComponent" />
  </div>
</template>

<style scoped>
.nested-component {
  padding: 20px;
}

.nested-level-1 {
  margin: 10px;
}

.nested-level-2 {
  margin: 10px;
  padding: 10px;
}

.nested-level-3 {
  margin: 10px;
  padding: 10px;
  border: 1px solid #ccc;
}

.nested-level-4 {
  margin: 10px;
  padding: 10px;
  background: #f5f5f5;
}
</style>
