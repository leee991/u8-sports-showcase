/**
 * 接口定义 — backend/neapi-production.mjs
 * 仅保留模块导出与接口签名。
 */

import {createHash,randomBytes} from 'node:crypto';
import {isIP} from 'node:net';
import {Fault} from './domain.mjs';
import {normalizeNeCatalog} from './neapi-readonly.mjs';
import {NEAPI_CAPABILITIES,NEAPI_CATALOG_PLATFORMS} from './neapi-capabilities.mjs';

function validReturnUrl(value){
  // 内部业务实现略
  throw new Error("not implemented");
}

export class NeApiProductionClient{
}
