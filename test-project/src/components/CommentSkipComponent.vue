<script setup lang="ts">
import { ref } from "vue";

const title = ref("注释跳过测试");
</script>

<template>
  <div class="comment-skip-component">
    <!-- 正常提取的中文 -->
    <h2>这是需要提取的标题</h2>
    <p>这是需要提取的文本内容</p>

    <!-- i18n-ignore 标记的文本（单行注释） -->
    <!-- i18n-ignore -->
    <p>这段文本应该被跳过，不进行提取</p>

    <!-- 正常提取的中文 -->
    <p>这是另一段需要提取的文本</p>

    <!-- i18n-ignore 标记的文本（多行注释） -->
    <!-- i18n-ignore -->
    <div>
      <p>这段文本也应该被跳过</p>
      <span>这个文本节点也应该被跳过</span>
    </div>

    <!-- 正常提取的中文 -->
    <button>点击按钮</button>

    <!-- 注释标记在上一行，只影响下一行 -->
    <!-- i18n-ignore -->
    <span>只有这一行被跳过</span>
    <span>这一行应该被提取</span>
  </div>
</template>

<script lang="ts">
// 脚本中的注释跳过测试
// i18n-ignore
const ignoredText = "这段代码中的文本应该被跳过";

// 正常提取的文本
const normalText = "这段文本应该被提取";
</script>

<style scoped>
.comment-skip-component {
  padding: 20px;
}
</style>
