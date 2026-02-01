import { describe, it, expect } from "vitest";
import { readFileSync, existsSync } from "fs";
import { join } from "path";

describe("根目录 package.json 配置测试", () => {
  const packageJsonPath = join(process.cwd(), "package.json");

  it("应该存在 package.json 文件", () => {
    expect(existsSync(packageJsonPath)).toBe(true);
  });

  it("应该配置 private: true", () => {
    const content = readFileSync(packageJsonPath, "utf-8");
    const pkg = JSON.parse(content);

    expect(pkg.private).toBe(true);
  });

  it('应该配置 type: "module"', () => {
    const content = readFileSync(packageJsonPath, "utf-8");
    const pkg = JSON.parse(content);

    expect(pkg.type).toBe("module");
  });

  it("应该包含必要的 scripts 配置", () => {
    const content = readFileSync(packageJsonPath, "utf-8");
    const pkg = JSON.parse(content);

    expect(pkg.scripts).toBeDefined();
    expect(typeof pkg.scripts).toBe("object");

    // 验证必要的脚本存在
    const requiredScripts = ["build", "test", "lint"];
    requiredScripts.forEach((script) => {
      expect(pkg.scripts).toHaveProperty(script);
    });
  });

  it("build 脚本应该使用 turbo", () => {
    const content = readFileSync(packageJsonPath, "utf-8");
    const pkg = JSON.parse(content);

    expect(pkg.scripts.build).toContain("turbo");
  });

  it("test 脚本应该配置正确", () => {
    const content = readFileSync(packageJsonPath, "utf-8");
    const pkg = JSON.parse(content);

    // test 脚本应该存在且有效
    expect(pkg.scripts.test).toBeDefined();
    expect(typeof pkg.scripts.test).toBe("string");
    // 可以是 turbo run test 或直接运行测试工具
    expect(pkg.scripts.test.length).toBeGreaterThan(0);
  });

  it("应该包含 turbo 依赖", () => {
    const content = readFileSync(packageJsonPath, "utf-8");
    const pkg = JSON.parse(content);

    expect(pkg.devDependencies).toBeDefined();
    expect(pkg.devDependencies).toHaveProperty("turbo");
  });

  it("应该配置 packageManager 字段", () => {
    const content = readFileSync(packageJsonPath, "utf-8");
    const pkg = JSON.parse(content);

    expect(pkg).toHaveProperty("packageManager");
    expect(typeof pkg.packageManager).toBe("string");
    expect(pkg.packageManager).toContain("pnpm");
  });
});
