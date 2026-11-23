/**
 * 接口定义 — backend/domain.mjs
 * 仅保留模块导出与接口签名。
 */


export const GAMES = Object.freeze(['PCBJL', 'JNDEB', 'JNDSI']);

export function validateSourceMapping(sourceId, lottery) {
  // 内部业务实现略
  throw new Error("not implemented");
}

export function assertSafe(value) {
  // 内部业务实现略
  throw new Error("not implemented");
}

export function identifier(value, name = 'identifier') {
  // 内部业务实现略
  throw new Error("not implemented");
}

export function issue(value) {
  // 内部业务实现略
  throw new Error("not implemented");
}

export function instant(value) {
  // 内部业务实现略
  throw new Error("not implemented");
}

export function epoch(value) {
  // 内部业务实现略
  throw new Error("not implemented");
}

export function validateConfig(config) {
  // 内部业务实现略
  throw new Error("not implemented");
}

export function deriveResult(game, numbers) {
  // 内部业务实现略
  throw new Error("not implemented");
}
