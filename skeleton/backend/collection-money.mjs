/**
 * 接口定义 — backend/collection-money.mjs
 * 仅保留模块导出与接口签名。
 */


import {Fault,amount} from './domain.mjs';
export const COLLECTION_TTL=30*60*1000;
export const CNY_CENTS_PER_USDT=660;

export function collectionQuote(entry,input,rate=660){
  // 内部业务实现略
  throw new Error("not implemented");
}
