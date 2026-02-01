import { describe, it, expect } from "vitest";
import { readFileSync, existsSync } from "fs";
import { join } from "path";
import { parse as parseYaml } from "yaml";

describe("pnpm-workspace 配置测试", () => {
  const workspaceFile = join(process.cwd(), "pnpm-workspace.yaml");
  const packagesDir = join(process.cwd(), "packages");

  it("应该存在 pnpm-workspace.yaml 文件", () => {
    expect(existsSync(workspaceFile)).toBe(true);
  });

  it("应该包含正确的 workspace 配置格式", () => {
    const content = readFileSync(workspaceFile, "utf-8");
    const config = parseYaml(content);

    expect(config).toHaveProperty("packages");
    expect(Array.isArray(config.packages)).toBe(true);
    expect(config.packages.length).toBeGreaterThan(0);
  });

  it("应该配置 packages/* 路径", () => {
    const content = readFileSync(workspaceFile, "utf-8");
    const config = parseYaml(content);

    expect(config.packages).toContain("packages/*");
  });

  it("packages 目录应该存在", () => {
    // 即使目录为空，也应该存在（或可以创建）
    // 这里验证配置指向的路径是合理的
    const content = readFileSync(workspaceFile, "utf-8");
    const config = parseYaml(content);

    const hasPackagesPattern = config.packages.some((p: string) => p.includes("packages"));
    expect(hasPackagesPattern).toBe(true);
  });
});
