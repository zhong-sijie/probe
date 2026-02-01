<script setup lang="ts">
import { ref } from "vue";

interface Item {
  id: number;
  name: string;
  price: number;
}

const items = ref<Item[]>([
  { id: 1, name: "商品一", price: 99 },
  { id: 2, name: "商品二", price: 199 },
  { id: 3, name: "商品三", price: 299 },
]);

const users = ref([
  { id: 1, name: "张三", role: "管理员" },
  { id: 2, name: "李四", role: "用户" },
]);
</script>

<template>
  <div class="list-component">
    <!-- v-for 中的中文 -->
    <ul>
      <li v-for="item in items" :key="item.id">
        <p>商品名称：{{ item.name }}</p>
        <p>商品价格：{{ item.price }} 元</p>
      </li>
    </ul>

    <!-- v-for 中的索引 -->
    <ol>
      <li v-for="(item, index) in items" :key="item.id">第 {{ index + 1 }} 项：{{ item.name }}</li>
    </ol>

    <!-- 嵌套的 v-for -->
    <div v-for="user in users" :key="user.id">
      <h3>用户信息</h3>
      <p>姓名：{{ user.name }}</p>
      <p>角色：{{ user.role }}</p>
      <ul>
        <li v-for="item in items" :key="item.id">{{ user.name }} 购买了 {{ item.name }}</li>
      </ul>
    </div>

    <!-- v-for 中的条件渲染 -->
    <div v-for="item in items" :key="item.id">
      <p v-if="item.price > 100">高价商品：{{ item.name }}</p>
      <p v-else>普通商品：{{ item.name }}</p>
    </div>

    <!-- 空列表提示 -->
    <p v-if="items.length === 0">暂无商品</p>
    <p v-else>共有 {{ items.length }} 件商品</p>
  </div>
</template>

<style scoped>
.list-component {
  padding: 20px;
}
</style>
