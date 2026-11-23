/**
 * 接口定义 — backend/neapi-inventory.mjs
 * 仅保留模块导出与接口签名。
 */


import {createHash} from 'node:crypto';
import {NEAPI_CAPABILITIES} from './neapi-capabilities.mjs';
import {suggestNeMappings} from './neapi-readonly.mjs';

export function buildNeInventory(local,remote){
  // 内部业务实现略
  throw new Error("not implemented");
}
