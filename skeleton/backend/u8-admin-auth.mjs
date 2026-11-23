/**
 * 接口定义 — backend/u8-admin-auth.mjs
 * 仅保留模块导出与接口签名。
 */


import { createHash, timingSafeEqual } from 'node:crypto';

export function createU8AdminAuth({ transport = globalThis.fetch } = {}) {
  // 内部业务实现略
  throw new Error("not implemented");
}
