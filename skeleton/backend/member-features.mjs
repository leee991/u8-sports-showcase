/**
 * 接口定义 — backend/member-features.mjs
 * 仅保留模块导出与接口签名。
 */


import {manualAdjustmentMemberLedgerSource,formatManualAdjustmentHistory} from './manual-adjustment-report.mjs';
import {formalMoneyLedgerSources,formatFormalMoneyHistory} from './member-formal-money-history.mjs';
import {rebateDecimal} from '../shared/live-rebate-rules.mjs';
import {publicImage} from './public-media.mjs';
import {memberGameRecords,memberGameSummary} from './member-games-report.mjs';
import {memberTransactionRecords,memberWithdrawalLedgerSource,formatWithdrawalLedger} from './member-transaction-records.mjs';
import {memberGameCategories} from '../shared/member-game-categories.mjs';
import {incomeRange} from '../shared/income-range.mjs';
import {bindingDetails,publicBinding} from './payout-bindings.mjs';
import {Fault,clean,required,amount,now,currency} from './domain.mjs';
import {existsSync,readFileSync} from 'node:fs';
import {resolve} from 'node:path';
export const promotionCategories=['electro','live','fish','sport','turnover','withdrawal'];

export function downloadLinks(store){
  // 内部业务实现略
  throw new Error("not implemented");
}

export function saveDownloadLinks(store,b){
  // 内部业务实现略
  throw new Error("not implemented");
}

export function activePromotions(store){
  // 内部业务实现略
  throw new Error("not implemented");
}

export function memberExtraRoute({formal=null,p,method,q,b,actor,store,write,send}){
  // 内部业务实现略
  throw new Error("not implemented");
}

export function memberRecords(store,id,q,formal=null){
  // 内部业务实现略
  throw new Error("not implemented");
}

export function adminExtraRoute({p,method,q,b,actor,store,write,send,list,permissions}){
  // 内部业务实现略
  throw new Error("not implemented");
}

// Discovered route endpoints in this module (read-only contract summary):
//   - /api/admin/activities
//   - /api/admin/activity-claims
//   - /api/admin/downloads
//   - /api/member/activity-claims
//   - /api/member/bindings
//   - /api/member/messages
//   - /api/member/profile
//   - /api/member/records
//   - /api/member/summary
//   - /api/member/task-entry
//   - /api/member/transfer
