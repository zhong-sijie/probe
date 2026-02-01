// 常量文件 - 包含各种场景的中文常量

// 普通常量
export const APP_NAME = "测试应用";
export const APP_VERSION = "1.0.0";
export const APP_DESCRIPTION = "这是一个测试应用";

// 对象常量
export const CONFIG = {
  title: "应用配置",
  description: "这是应用的配置信息",
  author: "开发者",
  version: "1.0.0",
};

// 数组常量
export const MENU_ITEMS = [
  { label: "首页", path: "/" },
  { label: "关于", path: "/about" },
  { label: "联系", path: "/contact" },
];

// 嵌套对象
export const USER_ROLES = {
  admin: {
    name: "管理员",
    description: "拥有所有权限",
  },
  user: {
    name: "普通用户",
    description: "拥有基本权限",
  },
  guest: {
    name: "访客",
    description: "只读权限",
  },
};

// 错误消息常量
export const ERROR_MESSAGES = {
  NETWORK_ERROR: "网络连接错误",
  TIMEOUT: "请求超时",
  NOT_FOUND: "资源未找到",
  UNAUTHORIZED: "未授权访问",
  FORBIDDEN: "禁止访问",
  SERVER_ERROR: "服务器内部错误",
};

// 成功消息常量
export const SUCCESS_MESSAGES = {
  SAVE_SUCCESS: "保存成功",
  DELETE_SUCCESS: "删除成功",
  UPDATE_SUCCESS: "更新成功",
  CREATE_SUCCESS: "创建成功",
};

// 表单验证消息
export const VALIDATION_MESSAGES = {
  REQUIRED: "此字段为必填项",
  EMAIL: "请输入有效的邮箱地址",
  PHONE: "请输入有效的手机号码",
  MIN_LENGTH: "长度不能少于 {min} 个字符",
  MAX_LENGTH: "长度不能超过 {max} 个字符",
};
