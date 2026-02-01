// TSX 工具函数文件
// 包含 JSX 语法中的中文文本（React 风格）

import { h } from "vue";
import type { VNode } from "vue";

// 返回 JSX 元素的函数（React 风格）
export function renderButton(text: string, onClick: () => void): VNode {
  return (<button onClick={onClick}>{text}</button>) as VNode;
}

// 返回 JSX 元素的函数（包含变量）
export function renderMessage(count: number, total: number): VNode {
  return (
    <div>
      <p>
        共 {count} 条，{total} 页
      </p>
      <span>当前显示 {count} 条记录</span>
    </div>
  ) as VNode;
}

// 返回 JSX 列表的函数
export function renderList(items: string[]): VNode {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          第 {index + 1} 项：{item}
        </li>
      ))}
    </ul>
  ) as VNode;
}

// 条件渲染函数
export function renderConditional(isVisible: boolean): VNode {
  return (
    isVisible ? (
      <div>
        <p>这是可见的内容</p>
        <span>当 isVisible 为 true 时显示</span>
      </div>
    ) : (
      <div>
        <p>这是隐藏的内容</p>
      </div>
    )
  ) as VNode;
}

// 嵌套 JSX 结构
export function renderNested(): VNode {
  return (
    <div>
      <h2>外层标题</h2>
      <div>
        <h3>内层标题</h3>
        <p>内层内容</p>
        <div>
          <span>更深层的内容</span>
        </div>
      </div>
    </div>
  ) as VNode;
}

// 使用 h 函数创建元素（Vue 3 方式）
export function createButton(): VNode {
  return h(
    "button",
    {
      title: "点击按钮",
      onClick: () => console.log("按钮被点击"),
    },
    "提交按钮",
  );
}

// 包含中文的常量
export const TSX_MESSAGES = {
  welcome: "欢迎使用 TSX 组件",
  goodbye: "再见",
  loading: "加载中...",
  error: "发生错误",
  success: "操作成功",
};

// 模板字符串（包含变量）
export function formatTSXMessage(name: string, count: number): string {
  return `用户 ${name} 有 ${count} 条未读消息`;
}

// React 风格的函数组件（使用 defineComponent）
export const FunctionalComponent = () => {
  const count = 10;
  const name = "用户";

  return (
    <div>
      <h2>函数式组件标题</h2>
      <p>这是函数式组件中的中文文本</p>
      <p>
        用户 {name} 有 {count} 条消息
      </p>
    </div>
  );
};
