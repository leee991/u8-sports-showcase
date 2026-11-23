/**
 * 接口定义 — backend/neapi-readonly.mjs
 * 仅保留模块导出与接口签名。
 */


import {createHash,randomBytes} from 'node:crypto';
import {NEAPI_CATALOG_PLATFORMS} from './neapi-capabilities.mjs';

export function normalizeNeCatalog(data,platform){
  // 内部业务实现略
  throw new Error("not implemented");
}

export function inspectNeCatalog(data,platform){
  // 内部业务实现略
  throw new Error("not implemented");
}

export function suggestNeMappings(u8Catalog,remoteCatalog){
  // 内部业务实现略
  throw new Error("not implemented");
}

const fail=(code,vendorCode)=>{
  // 内部业务实现略
  throw new Error("not implemented");
};

export class NeApiReadError extends Error{
  constructor(code,vendorCode=null){
    // 内部业务实现略
    throw new Error("not implemented");
  }

}

export class NeApiReadOnlyClient{
}

// Discovered route endpoints in this module (read-only contract summary):
//   - /api/server/gameCode
//   - /api/server/quota
