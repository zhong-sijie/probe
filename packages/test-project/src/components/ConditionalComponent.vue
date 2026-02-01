<script setup lang="ts">
import { ref } from "vue";

const isVisible = ref(true);
const isActive = ref(false);
const userRole = ref("admin");
const hasPermission = ref(true);
</script>

<template>
  <div class="conditional-component">
    <!-- v-if 中的中文 -->
    <div v-if="isVisible">
      <p>这是条件渲染的内容</p>
      <span>当 isVisible 为 true 时显示</span>
    </div>

    <!-- v-else-if 中的中文 -->
    <div v-else-if="!isVisible">
      <p>这是 else-if 分支的内容</p>
    </div>

    <!-- v-else 中的中文 -->
    <div v-else>
      <p>这是 else 分支的内容</p>
    </div>

    <!-- v-show 中的中文 -->
    <div v-show="isActive">
      <p>这是使用 v-show 显示的内容</p>
      <span>当 isActive 为 true 时显示</span>
    </div>

    <!-- 嵌套的条件渲染 -->
    <div v-if="userRole === 'admin'">
      <p>管理员可见的内容</p>
      <div v-if="hasPermission">
        <p>有权限时显示的内容</p>
      </div>
      <div v-else>
        <p>无权限时显示的内容</p>
      </div>
    </div>

    <!-- 条件渲染中的变量 -->
    <div v-if="isVisible">
      <p>当前状态：{{ isVisible ? "已启用" : "已禁用" }}</p>
    </div>
  </div>
</template>

<style scoped>
.conditional-component {
  padding: 20px;
}
</style>
