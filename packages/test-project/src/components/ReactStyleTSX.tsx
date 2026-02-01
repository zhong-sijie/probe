import { defineComponent, ref } from "vue";

// React 风格的函数组件（使用 defineComponent 包装）
export default defineComponent({
  name: "ReactStyleTSX",
  setup() {
    // 使用 ref 创建响应式数据
    const count = ref(10);
    const total = ref(100);
    const name = ref("用户");
    const isVisible = ref(true);

    // 模板字符串中的变量（用于测试模板字符串提取）
    const templateString = `总共统计 ${count.value} 条记录`;
    console.log(templateString); // 使用变量以避免 lint 警告

    // 事件处理函数（React 风格）
    const handleClick = () => {
      console.log("按钮被点击");
      count.value++;
    };

    // 返回 JSX（React 风格）
    return () => (
      <div class="react-style-tsx">
        {/* JSX 中的普通文本 */}
        <h2>React 风格 TSX 组件标题</h2>
        <p>这是 React 风格的 TSX 组件中的中文文本</p>

        {/* JSX 中的单个变量 */}
        <p>总共统计 {count.value} 问卷</p>
        <p>当前用户：{name.value}</p>

        {/* JSX 中的多个变量 */}
        <p>
          共 {count.value} 条，{total.value} 页
        </p>
        <p>
          用户 {name.value} 有 {count.value} 条未读消息
        </p>

        {/* JSX 中的条件渲染（React 风格的三元运算符） */}
        {isVisible.value ? (
          <div>
            <p>这是可见的内容</p>
            <span>当 isVisible 为 true 时显示</span>
          </div>
        ) : (
          <div>
            <p>这是隐藏的内容</p>
          </div>
        )}

        {/* JSX 中的条件渲染（逻辑与） */}
        {count.value > 0 && <p>有 {count.value} 条记录</p>}

        {/* JSX 中的列表渲染（React 风格的 map） */}
        <ul>
          {[1, 2, 3].map((item) => (
            <li key={item}>第 {item} 项</li>
          ))}
        </ul>

        {/* JSX 中的事件处理（React 风格） */}
        <button title="点击按钮" onClick={handleClick}>
          提交（当前计数：{count.value}）
        </button>

        {/* JSX 中的内联事件处理 */}
        <button onClick={() => console.log("内联事件处理")}>内联事件</button>

        {/* JSX 中的表单元素 */}
        <input
          type="text"
          placeholder="请输入内容"
          aria-label="输入框"
          onInput={(e) => {
            const target = e.target as HTMLInputElement;
            console.log("输入内容：", target.value);
          }}
        />

        {/* JSX 中的嵌套结构 */}
        <div>
          <h3>嵌套标题</h3>
          <p>嵌套内容</p>
          <div>
            <span>更深层的文本</span>
            <div>
              <p>最深层的文本节点</p>
            </div>
          </div>
        </div>

        {/* JSX 中的混合内容 */}
        <p>Hello 世界</p>
        <p>这是 Mixed 文本 Content</p>

        {/* JSX 中的特殊字符 */}
        <p>包含标点符号的文本：，。！？</p>
        <p>包含引号的文本："双引号" 和 '单引号'</p>

        {/* JSX 中的 Fragment（React 风格） */}
        <>
          <p>Fragment 中的第一个元素</p>
          <p>Fragment 中的第二个元素</p>
        </>
      </div>
    );
  },
});
