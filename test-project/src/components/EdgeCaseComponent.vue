<script setup lang="ts">
import { ref } from "vue";

// 边界场景测试
const emptyString = ref("");
const whitespace = ref("   ");
const mixedContent = ref("Hello 世界");
const name = ref("用户");
const count = ref(5);
const total = ref(100);
const price = ref(99.99);
const pages = ref(10);
</script>

<template>
  <div class="edge-case-component">
    <!-- 空文本（应该被跳过） -->
    <p>{{ emptyString }}</p>

    <!-- 空白字符（应该被跳过） -->
    <p>{{ whitespace }}</p>

    <!-- 混合中英文 -->
    <p>{{ mixedContent }}</p>
    <p>Hello 世界</p>
    <p>这是 Mixed 文本 Content</p>

    <!-- 特殊字符 -->
    <p>包含标点符号的文本：，。！？；：</p>
    <p>包含引号的文本："双引号" 和 '单引号'</p>
    <p>包含括号的文本：（圆括号）【方括号】《书名号》</p>

    <!-- 多行文本 -->
    <p>这是多行文本 包含多行内容 用于测试多行提取</p>

    <!-- 数字和中文混合 -->
    <p>共 10 条记录</p>
    <p>价格：99.99 元</p>
    <p>第 1 页，共 10 页</p>

    <!-- 变量和特殊字符混合 -->
    <p>用户 {{ name }} 购买了 {{ count }} 件商品，总价 {{ price }} 元！</p>
    <p>共 ${count} 条，${total} 页（共 ${pages} 页）</p>

    <!-- 重复文本（用于测试重复合并） -->
    <p>这是重复的文本</p>
    <p>这是重复的文本</p>
    <span>这是重复的文本</span>

    <!-- 相似但不完全相同的文本（用于测试 Key 生成） -->
    <p>支持插件化扩展</p>
    <p>支持插件化功能</p>
    <p>支持插件化开发</p>
  </div>
</template>

<style scoped>
.edge-case-component {
  padding: 20px;
}
</style>
