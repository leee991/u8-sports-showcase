/**
 * 接口定义 — backend/payout-bindings.mjs
 * 仅保留模块导出与接口签名。
 */

import {identityMatches,requirePayeeIdentity} from './member-identity.mjs';
import {Fault,required} from './domain.mjs';

function receiptImage(value){
  // 内部业务实现略
  throw new Error("not implemented");
}

export function prepareCnyPayee(body){
  // 内部业务实现略
  throw new Error("not implemented");
}

export function bindingDetails(store,row){
  // 内部业务实现略
  throw new Error("not implemented");
}

export function publicBinding(store,row){
  // 内部业务实现略
  throw new Error("not implemented");
}

export function cnyWithdrawalPayee(store,userId,bindingId){
  // 内部业务实现略
  throw new Error("not implemented");
}
