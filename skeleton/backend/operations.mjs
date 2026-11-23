/**
 * 接口定义 — backend/operations.mjs
 * 仅保留模块导出与接口签名。
 */


import {checkWithdrawalLimits} from './withdrawal-limits.mjs';
import {legacyRebateEvidence} from './rebate-sources.mjs';
import {ensureAgentPlanArchive,archiveAgentPlan,planArchived} from './agent-plan-archive.mjs';
import {Fault,now,clean,required,currency,amount} from './domain.mjs';
import {isIP} from 'node:net';
import {OperationsReferenceV2} from './operations-reference-v2.mjs';

export function reportRange(q){
  // 内部业务实现略
  throw new Error("not implemented");
}

const integer=(n,min,max,label)=>{
  // 内部业务实现略
  throw new Error("not implemented");
};

export class Operations{
  constructor(s){
    // 内部业务实现略
    throw new Error("not implemented");
  }

}

// Discovered route endpoints in this module (read-only contract summary):
//   - /api/admin/operations/
