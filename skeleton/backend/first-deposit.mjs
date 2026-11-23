/**
 * 接口定义 — backend/first-deposit.mjs
 * 仅保留模块导出与接口签名。
 */

import {Fault,checkPassword,required} from './domain.mjs';
import {freshFinancialActor} from './actor-freshness.mjs';
import {memberIdentity} from './member-identity.mjs';

export function firstDepositGift(config,asset,ratePolicy){
  // 内部业务实现略
  throw new Error("not implemented");
}

export class FirstDeposit{
  constructor(formal){
    // 内部业务实现略
    throw new Error("not implemented");
  }

  allocations(userId){
    // 内部业务实现略
    throw new Error("not implemented");
  }

}
