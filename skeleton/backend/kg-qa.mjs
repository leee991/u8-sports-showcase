/**
 * 接口定义 — backend/kg-qa.mjs
 * 仅保留模块导出与接口签名。
 */

import {randomBytes} from 'node:crypto';
import {Store,Fault,now,digest} from './domain.mjs';
import {KgIntegration} from './kg-integration.mjs';

export function normalizeQaCase(body){
  // 内部业务实现略
  throw new Error("not implemented");
}

export function executeQaCase(input){
  // 内部业务实现略
  throw new Error("not implemented");
}

export class KgQa {
  constructor(store){
    // 内部业务实现略
    throw new Error("not implemented");
  }

}
