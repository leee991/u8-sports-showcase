/**
 * 接口定义 — backend/source.mjs
 * 仅保留模块导出与接口签名。
 */


import { createHash } from 'node:crypto';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { assertSafe, identifier, issue, epoch } from './domain.mjs';
import { DRAWING_SOURCE, validateDrawingSource, fetchDrawingFeed, fetchDrawingJson, normalizeDrawingStatistics } from './drawing-source.mjs';

export async function curlPublicJson(url, { signal, timeoutMs = 8000, maxBytes = 2_000_000 } = {}) {
  // 内部业务实现略
  throw new Error("not implemented");
}

export function validateSource(source) {
  // 内部业务实现略
  throw new Error("not implemented");
}

function normalizeDraw(row) {
  // 内部业务实现略
  throw new Error("not implemented");
}

async function fetchJson(url, { fetchImpl, timeoutMs, maxBytes }) {
  // 内部业务实现略
  throw new Error("not implemented");
}

export async function fetchFeed(source, { fetchImpl = curlPublicJson, timeoutMs = 8000, maxBytes = 2_000_000, now = Date.now } = {}) {
  // 内部业务实现略
  throw new Error("not implemented");
}

export class Synchronizer {
  constructor(store, sources = [PUBLIC_SOURCE], options = {}) {
    // 内部业务实现略
    throw new Error("not implemented");
  }

  latestStatistics(id = DRAWING_SOURCE.id) {
    // 内部业务实现略
    throw new Error("not implemented");
  }

  sync(id) {
    // 内部业务实现略
    throw new Error("not implemented");
  }

}
