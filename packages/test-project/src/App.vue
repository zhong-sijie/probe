<script setup lang="ts">
import BasicComponent from "./components/BasicComponent.vue";
import VariableComponent from "./components/VariableComponent.vue";
import CommentSkipComponent from "./components/CommentSkipComponent.vue";
import ConditionalComponent from "./components/ConditionalComponent.vue";
import ListComponent from "./components/ListComponent.vue";
import NestedComponent from "./components/NestedComponent.vue";
import EdgeCaseComponent from "./components/EdgeCaseComponent.vue";
import DirectiveComponent from "./components/DirectiveComponent.vue";
import TSXComponent from "./components/TSXComponent.tsx";
import ReactStyleTSX from "./components/ReactStyleTSX.tsx";
</script>

<template>
  <div id="app">
    <header>
      <h1>Vue3 中文提取工具测试项目</h1>
      <p>这是一个用于测试 Probe 工具的完整测试项目</p>
    </header>

    <main>
      <!-- 基础组件测试 -->
      <section>
        <h2>基础组件测试</h2>
        <BasicComponent />
      </section>

      <!-- 变量文本测试 -->
      <section>
        <h2>变量文本测试</h2>
        <VariableComponent />
      </section>

      <!-- 注释跳过测试 -->
      <section>
        <h2>注释跳过测试</h2>
        <CommentSkipComponent />
      </section>

      <!-- 条件渲染测试 -->
      <section>
        <h2>条件渲染测试</h2>
        <ConditionalComponent />
      </section>

      <!-- 列表渲染测试 -->
      <section>
        <h2>列表渲染测试</h2>
        <ListComponent />
      </section>

      <!-- 嵌套组件测试 -->
      <section>
        <h2>嵌套组件测试</h2>
        <NestedComponent />
      </section>

      <!-- 指令测试 -->
      <section>
        <h2>指令测试</h2>
        <DirectiveComponent />
      </section>

      <!-- 边界场景测试 -->
      <section>
        <h2>边界场景测试</h2>
        <EdgeCaseComponent />
      </section>

      <!-- TSX 组件测试 -->
      <section>
        <h2>TSX 组件测试</h2>
        <TSXComponent />
      </section>

      <!-- React 风格 TSX 组件测试 -->
      <section>
        <h2>React 风格 TSX 组件测试</h2>
        <ReactStyleTSX />
      </section>
    </main>

    <footer>
      <p>测试项目底部信息</p>
      <span>版权所有 © 2024</span>
    </footer>
  </div>
</template>

<style scoped>
#app {
  padding: 20px;
}

header {
  margin-bottom: 30px;
  padding-bottom: 20px;
  border-bottom: 2px solid #eee;
}

section {
  margin-bottom: 40px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

footer {
  margin-top: 40px;
  padding-top: 20px;
  border-top: 2px solid #eee;
  text-align: center;
}
</style>
