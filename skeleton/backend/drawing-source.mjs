/**
 * 接口定义 — backend/drawing-source.mjs
 * 仅保留模块导出与接口签名。
 */


import { createHash } from 'node:crypto';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { assertSafe, issue } from './domain.mjs';

export function validateDrawingSource(source) {
  // 内部业务实现略
  throw new Error("not implemented");
}

export async function curlDrawingJson(url, { signal, timeoutMs = 8000, maxBytes = 2_000_000 } = {}) {
  // 内部业务实现略
  throw new Error("not implemented");
}

export function drawingTime(value) {
  // 内部业务实现略
  throw new Error("not implemented");
}

function drawing(row) {
  // 内部业务实现略
  throw new Error("not implemented");
}

function statisticEntry(value) {
  // 内部业务实现略
  throw new Error("not implemented");
}

export async function fetchDrawingJson(url, { fetchImpl = curlDrawingJson, timeoutMs = 8000, maxBytes = 2_000_000 } = {}) {
  // 内部业务实现略
  throw new Error("not implemented");
}

export async function fetchDrawingFeed(source = DRAWING_SOURCE, options = {}) {
  // 内部业务实现略
  throw new Error("not implemented");
}
