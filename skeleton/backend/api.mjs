/**
 * 接口定义 — backend/api.mjs
 * 仅保留模块导出与接口签名。
 */


import { createHash, timingSafeEqual } from 'node:crypto';
import { GAMES, assertSafe, deriveResult, identifier } from './domain.mjs';

function authorized(headers, token) {
  // 内部业务实现略
  throw new Error("not implemented");
}

export function createApi({ store, synchronizer, adminToken, adminActor = 'local.admin', adminAuth, sourcePanels }) {
  // 内部业务实现略
  throw new Error("not implemented");
}

export function createHttpHandler(api) {
  // 内部业务实现略
  throw new Error("not implemented");
}

// Discovered route endpoints in this module (read-only contract summary):
//   - /api/v1/admin/
//   - /api/v1/admin/audit
//   - /api/v1/admin/configurations
//   - /api/v1/admin/session
//   - /api/v1/games
//   - /api/v1/health
