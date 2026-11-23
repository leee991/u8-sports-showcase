/**
 * 接口定义 — backend/server.mjs
 * 仅保留模块导出与接口签名。
 */


import { createServer } from 'node:http';
import { pathToFileURL } from 'node:url';
import { Store } from './store.mjs';
import { PUBLIC_SOURCE, DRAWING_SOURCE, Synchronizer } from './source.mjs';
import { createApi, createHttpHandler } from './api.mjs';
import { createStaticHandler } from './static.mjs';
import { createU8AdminAuth } from './u8-admin-auth.mjs';
import { createSourcePanels } from './source-panels.mjs';
import { startDrawingPush } from './drawing-push.mjs';

export function startServer(env = process.env) {
  // 内部业务实现略
  throw new Error("not implemented");
}
