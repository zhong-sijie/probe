// TypeScript 类型定义文件
// 包含各种场景的中文文本

// 接口中的中文注释
export interface User {
  /** 用户姓名 */
  name: string;
  /** 用户角色 */
  role: string;
  /** 用户描述信息 */
  description: string;
}

// 类型别名中的中文注释
/**
 * 商品信息
 * 包含商品的基本信息
 */
export type Product = {
  /** 商品名称 */
  name: string;
  /** 商品价格 */
  price: number;
  /** 商品描述 */
  description: string;
};

// 枚举中的中文（作为值）
export enum Status {
  /** 待处理状态 */
  PENDING = "待处理",
  /** 处理中状态 */
  PROCESSING = "处理中",
  /** 已完成状态 */
  COMPLETED = "已完成",
  /** 已取消状态 */
  CANCELLED = "已取消",
}

// 常量对象中的中文
export const ErrorMessages = {
  NOT_FOUND: "资源未找到",
  UNAUTHORIZED: "未授权访问",
  FORBIDDEN: "禁止访问",
  SERVER_ERROR: "服务器错误",
} as const;

// 函数类型中的中文注释
/**
 * 格式化消息
 * @param count 数量
 * @param total 总数
 * @returns 格式化后的消息
 */
export type MessageFormatter = (count: number, total: number) => string;

// 泛型类型中的中文注释
/**
 * API 响应类型
 * @template T 数据类型
 */
export interface ApiResponse<T> {
  /** 响应状态码 */
  code: number;
  /** 响应消息 */
  message: string;
  /** 响应数据 */
  data: T;
}

// 联合类型中的中文注释
/**
 * 用户状态类型
 */
export type UserStatus = "在线" | "离线" | "忙碌" | "离开";

// 类型断言中的中文（作为值）
export const statusLabels: Record<string, string> = {
  active: "激活",
  inactive: "未激活",
  pending: "待审核",
};
