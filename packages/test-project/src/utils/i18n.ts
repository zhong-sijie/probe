// i18n 工具函数文件
// 包含各种场景的中文文本

// 普通字符串字面量
export const messages = {
  welcome: "欢迎使用",
  goodbye: "再见",
  loading: "加载中...",
  error: "发生错误",
  success: "操作成功",
};

// 模板字符串（包含变量）
export function formatMessage(count: number, total: number): string {
  return `共 ${count} 条，${total} 页`;
}

export function formatUserMessage(name: string, count: number): string {
  return `用户 ${name} 有 ${count} 条未读消息`;
}

export function formatPrice(price: number, currency: string = "元"): string {
  return `价格：${price} ${currency}`;
}

// 多行模板字符串
export const multiLineMessage = `
  这是多行文本
  包含多行内容
  用于测试多行提取
`;

// 包含特殊字符的文本
export const specialChars = {
  punctuation: "包含标点符号的文本：，。！？；：",
  quotes: "包含引号的文本：\"双引号\" 和 '单引号'",
  brackets: "包含括号的文本：（圆括号）【方括号】《书名号》",
};

// 混合中英文
export const mixedText = {
  english: "Hello 世界",
  chinese: "你好 World",
  mixed: "这是 Mixed 文本 Content",
};

// 空字符串和空白字符测试
export const emptyText = {
  empty: "",
  spaces: "   ",
  newlines: "\n\n\n",
};

// 函数返回中文文本
export function getErrorMessage(code: number): string {
  switch (code) {
    case 404:
      return "页面未找到";
    case 500:
      return "服务器内部错误";
    default:
      return "未知错误";
  }
}

// 对象中的中文
export const config = {
  title: "系统配置",
  description: "这是系统配置的描述信息",
  items: [
    { label: "选项一", value: "option1" },
    { label: "选项二", value: "option2" },
    { label: "选项三", value: "option3" },
  ],
};

// 注释跳过测试
// i18n-ignore
export const ignoredText = "这段文本应该被跳过";

// 正常提取的文本
export const normalText = "这段文本应该被提取";
