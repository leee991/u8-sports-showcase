/**
 * 接口定义 — backend/formal-rebates.mjs
 * 仅保留模块导出与接口签名。
 */

import {Fault,digest,now,required,checkPassword} from './domain.mjs';
import {freshFinancialActor} from './actor-freshness.mjs';
import {formalCashRecords} from './cash-deposit-rules.mjs';
import {CATEGORIES} from './operations-reference-v2.mjs';

export function formalRebateEvidence(f,userId,code,start,end){
  // 内部业务实现略
  throw new Error("not implemented");
}

export class FormalRebates{
  constructor(s,f,{clock=Date.now}={}){
    // 内部业务实现略
    throw new Error("not implemented");
  }

}
