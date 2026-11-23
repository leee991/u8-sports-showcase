/**
 * 接口定义 — backend/collections.mjs
 * 仅保留模块导出与接口签名。
 */


import {exchangeRate} from './exchange-rate.mjs';
import {ensureInvoiceRates,invoiceRate,snapshotRate} from './invoice-rate.mjs';
import {Fault,now,token,digest,required} from './domain.mjs';
import {collectionQuote,COLLECTION_TTL,CNY_CENTS_PER_USDT} from './collection-money.mjs';

export function imageData(body){
  // 内部业务实现略
  throw new Error("not implemented");
}

const integer=(v,min,max,label)=>{
  // 内部业务实现略
  throw new Error("not implemented");
};

export class Collections {
  constructor(store,{clock=Date.now}={}){
    // 内部业务实现略
    throw new Error("not implemented");
  }

}

// Discovered route endpoints in this module (read-only contract summary):
//   - /api/admin/
//   - /api/admin/collection-settings
//   - /api/admin/collection-upload
//   - /api/member/collection-options
