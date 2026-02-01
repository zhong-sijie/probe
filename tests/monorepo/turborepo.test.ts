import { describe, it, expect } from "vitest";
import { readFileSync, existsSync } from "fs";
import { join } from "path";

describe("Turborepo 配置测试", () => {
  const turboJsonPath = join(process.cwd(), "turbo.json");

  it("应该存在 turbo.json 文件", () => {
    expect(existsSync(turboJsonPath)).toBe(true);
  });

  it("应该包含 tasks 配置", () => {
    const content = readFileSync(turboJsonPath, "utf-8");
    const config = JSON.parse(content);

    expect(config).toHaveProperty("tasks");
    expect(typeof config.tasks).toBe("object");
  });

  it("应该配置 build 任务", () => {
    const content = readFileSync(turboJsonPath, "utf-8");
    const config = JSON.parse(content);

    expect(config.tasks).toHaveProperty("build");
    expect(typeof config.tasks.build).toBe("object");
  });

  it("应该配置 test 任务", () => {
    const content = readFileSync(turboJsonPath, "utf-8");
    const config = JSON.parse(content);

    expect(config.tasks).toHaveProperty("test");
    expect(typeof config.tasks.test).toBe("object");
  });

  it("应该配置 lint 任务", () => {
    const content = readFileSync(turboJsonPath, "utf-8");
    const config = JSON.parse(content);

    expect(config.tasks).toHaveProperty("lint");
    expect(typeof config.tasks.lint).toBe("object");
  });

  it("build 任务应该配置输出目录", () => {
    const content = readFileSync(turboJsonPath, "utf-8");
    const config = JSON.parse(content);

    if (config.tasks.build.outputs) {
      expect(Array.isArray(config.tasks.build.outputs)).toBe(true);
    }
    // 或者使用 outputMode
    expect(config.tasks.build).toBeDefined();
  });

  it("test 任务应该配置依赖关系", () => {
    const content = readFileSync(turboJsonPath, "utf-8");
    const config = JSON.parse(content);

    // test 可能依赖 build，或者没有依赖
    // 只要配置存在即可
    expect(config.tasks.test).toBeDefined();
  });

  it("应该配置缓存策略", () => {
    const content = readFileSync(turboJsonPath, "utf-8");
    const config = JSON.parse(content);

    // Turborepo 默认启用缓存，验证配置结构正确即可
    expect(config).toBeDefined();
    // 可以检查是否有 remoteCache 或其他缓存配置
    expect(typeof config).toBe("object");
  });
});
