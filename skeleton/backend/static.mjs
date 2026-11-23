/**
 * 接口定义 — backend/static.mjs
 * 仅保留模块导出与接口签名。
 */


import { realpath, readFile, stat } from 'node:fs/promises';
import { isAbsolute, resolve, relative, extname, sep } from 'node:path';

function pathname(url) {
  // 内部业务实现略
  throw new Error("not implemented");
}

function within(root, target) {
  // 内部业务实现略
  throw new Error("not implemented");
}

export function createStaticHandler(staticDir, apiHandler, filesystem = { realpath, readFile, stat }) {
  // 内部业务实现略
  throw new Error("not implemented");
}
