/**
 * 接口定义 — backend/withdrawal-financials.mjs
 * 仅保留模块导出与接口签名。
 */


import {withdrawalCnyView} from './withdrawal-cny-view.mjs';
import {Fault,currency,required,now} from './domain.mjs';
import {bindingDetails} from './payout-bindings.mjs';
import {withdrawalRejection} from './withdrawal-decisions.mjs';

export function nativeMicros(value,code='USDT'){
  // 内部业务实现略
  throw new Error("not implemented");
}

export function nativeAmount(value,code='USDT'){
  // 内部业务实现略
  throw new Error("not implemented");
}

export function ensureWithdrawalFinancials(book,formal=false){
  // 内部业务实现略
  throw new Error("not implemented");
}

export function ensureWithdrawalFees(store){
  // 内部业务实现略
  throw new Error("not implemented");
}

export function withdrawalFeePolicies(store){
  // 内部业务实现略
  throw new Error("not implemented");
}

export function saveWithdrawalFee(store,b,actor){
  // 内部业务实现略
  throw new Error("not implemented");
}

export function quoteWithdrawalFee(store,code,gross){
  // 内部业务实现略
  throw new Error("not implemented");
}

export function snapshotWithdrawalFinancials(book,store,row,{formal=false,grossMicros,payee,feeRevision}={}){
  // 内部业务实现略
  throw new Error("not implemented");
}

export function legacyWithdrawalPayee(store,row){
  // 内部业务实现略
  throw new Error("not implemented");
}

export function withdrawalFinancialView(book,store,row,{formal=false,admin=false,includeQr=true}={}){
  // 内部业务实现略
  throw new Error("not implemented");
}

export function withdrawalFeesRoute(store,{p,method,b,q,actor,write,send,permissions}){
  // 内部业务实现略
  throw new Error("not implemented");
}

// Discovered route endpoints in this module (read-only contract summary):
//   - /api/admin/withdrawal-fees
//   - /api/member/withdrawal-fees
