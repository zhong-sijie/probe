import { defineComponent } from "vue";

// React 风格的函数组件
export default defineComponent({
  name: "TSXComponent",
  setup() {
    const count = 10;
    const total = 100;
    const name = "用户";

    // 模板字符串中的变量（用于测试模板字符串提取）
    const templateString = `总共统计 ${count} 条记录`;
    console.log(templateString); // 使用变量以避免 lint 警告

    return () => (
      <div class="tsx-component">
        {/* JSX 中的普通文本 */}
        <h2>TSX 组件标题</h2>
        <p>这是 TSX 组件中的中文文本</p>

        {/* JSX 中的单个变量 */}
        <p>总共统计 {count} 问卷</p>
        <p>当前用户：{name}</p>

        {/* JSX 中的多个变量 */}
        <p>
          共 {count} 条，{total} 页
        </p>
        <p>
          用户 {name} 有 {count} 条未读消息
        </p>

        {/* JSX 中的条件渲染 */}
        {count > 0 ? <p>有 {count} 条记录</p> : <p>暂无记录</p>}

        {/* JSX 中的列表渲染 */}
        <ul>
          {[1, 2, 3].map((item) => (
            <li key={item}>第 {item} 项</li>
          ))}
        </ul>

        {/* JSX 中的属性 */}
        <button title="点击按钮" onClick={() => console.log("按钮被点击")}>
          提交
        </button>

        <input type="text" placeholder="请输入内容" aria-label="输入框" />

        {/* JSX 中的嵌套结构 */}
        <div>
          <h3>嵌套标题</h3>
          <p>嵌套内容</p>
          <div>
            <span>更深层的文本</span>
          </div>
        </div>

        {/* JSX 中的混合内容 */}
        <p>Hello 世界</p>
        <p>这是 Mixed 文本 Content</p>

        {/* JSX 中的特殊字符 */}
        <p>包含标点符号的文本：，。！？</p>
        <p>包含引号的文本："双引号" 和 '单引号'</p>
      </div>
    );
  },
});
