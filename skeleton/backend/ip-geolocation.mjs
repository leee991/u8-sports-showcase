/**
 * 接口定义 — backend/ip-geolocation.mjs
 * 仅保留模块导出与接口签名。
 */

import {isIP,BlockList} from 'node:net';
import {readFileSync,lstatSync} from 'node:fs';
import {createHash} from 'node:crypto';
import mmdb from './vendor/mmdb-lib/index.js';

export function normalizeIp(value){
  // 内部业务实现略
  throw new Error("not implemented");
}
