/**
 * 接口定义 — backend/formal-bonus.mjs
 * 仅保留模块导出与接口签名。
 */

import {observedProviderUnits} from './supplier-precision.mjs';
import {memberReconciliationReady} from './cashout-reconciliation.mjs';
import {ensureWithdrawalFinancials,snapshotWithdrawalFinancials,withdrawalFinancialView,nativeMicros as withdrawalNativeMicros} from './withdrawal-financials.mjs';
import {SecurityContacts} from './security-contacts.mjs';
import {withdrawalTurnoverView} from './withdrawal-turnover-view.mjs';
import {ensureWithdrawalDecisions,withdrawalDecision,recordWithdrawalDecision,requireWithdrawalMemberReason} from './withdrawal-decisions.mjs';
import {checkWithdrawalLimits,withdrawalLimits} from './withdrawal-limits.mjs';
import {freshFinancialActor} from './actor-freshness.mjs';
import {requirePayeeIdentity} from './member-identity.mjs';
import {cnyWithdrawalPayee} from './payout-bindings.mjs';

function parse(value,currency,{zero=false,max=1000000,rate=660}={}){
  // 内部业务实现略
  throw new Error("not implemented");
}

export class FormalBonus{
  constructor(service,config={}){
    // 内部业务实现略
    throw new Error("not implemented");
  }

  capture(r){
    // 内部业务实现略
    throw new Error("not implemented");
  }

}
