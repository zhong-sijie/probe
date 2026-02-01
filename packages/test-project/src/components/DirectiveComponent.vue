<script setup lang="ts">
import { ref } from "vue";

const message = ref("指令测试");
const htmlContent = ref("<strong>这是 HTML 内容</strong>");
const isDisabled = ref(false);
</script>

<template>
  <div class="directive-component">
    <!-- v-text 指令 -->
    <div v-text="'这是 v-text 指令的文本内容'"></div>
    <div v-text="message"></div>

    <!-- v-html 指令 -->
    <div v-html="'这是 v-html 指令的文本内容'"></div>
    <div v-html="htmlContent"></div>

    <!-- v-bind 指令中的字符串字面量 -->
    <input type="text" :placeholder="'请输入用户名'" :aria-label="'用户输入框'" />

    <button :title="'点击按钮'" :disabled="isDisabled">提交按钮</button>

    <!-- v-model 指令 -->
    <input v-model="message" :placeholder="'输入消息内容'" />

    <!-- v-on 指令（事件处理） -->
    <button @click="() => console.log('按钮被点击')">点击我</button>

    <!-- v-pre 指令（跳过编译） -->
    <div v-pre>
      {{ 这段文本不会被编译 }}
    </div>

    <!-- v-once 指令 -->
    <div v-once>这段文本只会渲染一次</div>

    <!-- 自定义指令（如果有） -->
    <div v-custom="'自定义指令的文本'">自定义指令内容</div>
  </div>
</template>

<style scoped>
.directive-component {
  padding: 20px;
}
</style>
