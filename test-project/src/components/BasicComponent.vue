<script setup lang="ts">
import { ref } from "vue";

// 脚本中的中文注释
const title = ref("基础组件标题");
const description = "这是一个基础组件，用于测试基本的中文提取功能";

// 字符串字面量中的中文
const message = "欢迎使用基础组件";
const buttonText = "点击按钮";

function handleClick() {
  console.log("按钮被点击了");
  alert("操作成功");
}
</script>

<template>
  <div class="basic-component">
    <!-- 模板中的中文文本 -->
    <h2>{{ title }}</h2>
    <p>{{ description }}</p>
    <p>{{ message }}</p>

    <!-- 属性中的中文 -->
    <button type="button" :title="buttonText" @click="handleClick">
      {{ buttonText }}
    </button>

    <!-- v-text 指令中的中文 -->
    <div v-text="'这是使用 v-text 指令的文本'"></div>

    <!-- v-html 指令中的中文 -->
    <div v-html="'这是使用 <strong>v-html</strong> 指令的文本'"></div>

    <!-- v-bind 中的字符串字面量 -->
    <input type="text" :placeholder="'请输入内容'" :aria-label="'输入框标签'" />

    <!-- 普通文本节点 -->
    <p>这是一段普通的文本内容</p>
    <span>这是另一个文本节点</span>
  </div>
</template>

<style scoped>
/* 样式中的中文注释 */
.basic-component {
  padding: 20px;
}

/* 这是另一个样式注释 */
.basic-component h2 {
  color: #333;
}
</style>
