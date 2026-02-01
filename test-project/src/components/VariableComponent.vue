<script setup lang="ts">
import { ref } from "vue";

const count = ref(10);
const total = ref(100);
const name = ref("用户");
const price = ref(99.99);

// 模板字符串中的变量
const templateString1 = `总共统计 ${count.value} 条记录`;
const templateString2 = `共 ${count.value} 条，${total.value} 页`;
const templateString3 = `用户 ${name.value} 购买了 ${count.value} 件商品，总价 ${price.value} 元`;

// 脚本中的模板字符串（包含变量）
const message = `这是包含 ${count.value} 个变量的消息`;
</script>

<template>
  <div class="variable-component">
    <!-- Vue 模板中的单个变量 -->
    <p>总共统计 {{ count }} 问卷</p>
    <p>当前用户：{{ name }}</p>
    <p>价格：{{ price }} 元</p>

    <!-- Vue 模板中的多个变量 -->
    <p>共 {{ count }} 条，{{ total }} 页</p>
    <p>用户 {{ name }} 购买了 {{ count }} 件商品，总价 {{ price }} 元</p>

    <!-- 混合文本和变量 -->
    <p>欢迎 {{ name }}，您有 {{ count }} 条未读消息</p>
    <p>第 {{ count }} 页，共 {{ total }} 页</p>

    <!-- 在属性中使用变量 -->
    <button :title="`点击查看 ${count} 条记录`">查看详情</button>

    <!-- 复杂变量表达式 -->
    <p>总计：{{ count }} + {{ total }} = {{ count + total }}</p>
  </div>
</template>

<style scoped>
.variable-component {
  padding: 20px;
}
</style>
