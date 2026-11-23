/**
 * 接口定义 — backend/public-sync.mjs
 * 仅保留模块导出与接口签名。
 */


import {digest} from './domain.mjs';
import {exchangeRate} from './exchange-rate.mjs';

export function publicSyncSnapshot(store,formal=null,clock=Date.now){
  // 内部业务实现略
  throw new Error("not implemented");
}
