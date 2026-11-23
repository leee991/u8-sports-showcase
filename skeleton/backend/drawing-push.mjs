/**
 * 接口定义 — backend/drawing-push.mjs
 * 仅保留模块导出与接口签名。
 */


import { issue } from './domain.mjs';
export const DRAWING_PUSH_URL = 'wss://drawing.kkbiop.com/wsApi/lottery';

export function startDrawingPush({ onUpdate, WebSocketImpl = globalThis.WebSocket, logger = console, timers = {} } = {}) {
  // 内部业务实现略
  throw new Error("not implemented");
}
