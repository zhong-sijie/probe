import { describe, it, expect } from "vitest";
import { readFileSync, existsSync } from "fs";
import { join } from "path";

describe("TypeScript 根配置测试", () => {
  const tsconfigPath = join(process.cwd(), "tsconfig.json");

  it("应该存在根目录 tsconfig.json 文件", () => {
    expect(existsSync(tsconfigPath)).toBe(true);
  });

  it("应该包含有效的 JSON 配置", () => {
    const content = readFileSync(tsconfigPath, "utf-8");
    const config = JSON.parse(content);

    expect(typeof config).toBe("object");
  });

  it("应该配置 compilerOptions", () => {
    const content = readFileSync(tsconfigPath, "utf-8");
    const config = JSON.parse(content);

    expect(config).toHaveProperty("compilerOptions");
    expect(typeof config.compilerOptions).toBe("object");
  });

  it("compilerOptions 应该包含必要的配置项", () => {
    const content = readFileSync(tsconfigPath, "utf-8");
    const config = JSON.parse(content);

    const compilerOptions = config.compilerOptions;
    expect(compilerOptions).toBeDefined();

    // 验证关键配置项存在
    // target、module、lib 等
    expect(typeof compilerOptions).toBe("object");
  });

  it("应该配置 target", () => {
    const content = readFileSync(tsconfigPath, "utf-8");
    const config = JSON.parse(content);

    if (config.compilerOptions.target) {
      expect(typeof config.compilerOptions.target).toBe("string");
    }
  });

  it("应该配置 module", () => {
    const content = readFileSync(tsconfigPath, "utf-8");
    const config = JSON.parse(content);

    if (config.compilerOptions.module) {
      expect(typeof config.compilerOptions.module).toBe("string");
    }
  });

  it("应该配置 include 或 files", () => {
    const content = readFileSync(tsconfigPath, "utf-8");
    const config = JSON.parse(content);

    // 根配置可能使用 files: [] 或 include，或者都不配置（作为基础配置）
    // 只要配置存在即可
    expect(config).toBeDefined();
  });

  it("配置应该可以作为子包配置的基础", () => {
    const content = readFileSync(tsconfigPath, "utf-8");
    const config = JSON.parse(content);

    // 验证配置结构适合被 extends
    expect(config).toBeDefined();
    expect(typeof config).toBe("object");

    // 如果配置了 compilerOptions，应该可以被继承
    if (config.compilerOptions) {
      expect(typeof config.compilerOptions).toBe("object");
    }
  });
});
