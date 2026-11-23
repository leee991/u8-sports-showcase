/**
 * 接口定义 — backend/financial-reports.mjs
 * 仅保留模块导出与接口签名。
 */

import {manualAdjustmentReportSource,manualAdjustmentReportView} from './manual-adjustment-report.mjs';
import {financeCurrencyReader} from './finance-currency.mjs';
import {reportInteger,reportMoney} from './report-precision.mjs';
import {receivingReference,depositReceivingColumns} from './receiving-reference.mjs';
import {iterateReport,groupedBets,betGroups,topReportRows,mergeReportPage,reportOrder} from './report-query.mjs';
import {withdrawalCnyView} from './withdrawal-cny-view.mjs';
import {withdrawalFinancialView} from './withdrawal-financials.mjs';
import {SecurityContacts} from './security-contacts.mjs';
import {adminFinancialExportRows} from '../shared/admin-financial-labels.mjs';
import {completedWithdrawalSql,withdrawalDecision} from './withdrawal-decisions.mjs';
import {memberIdentity} from './member-identity.mjs';
import {referenceAdminPages} from '../shared/reference-admin-navigation.mjs';
import {referenceReportColumns} from '../shared/reference-report-columns.mjs';
import {storedGameCategories} from '../shared/member-game-categories.mjs';
import {Fault,clean,currency} from './domain.mjs';
import {memberGameSources} from './member-games-report.mjs';
import {xlsx} from './xlsx.mjs';
import {ledgerContext} from './ledger-context.mjs';
import {depositHistory} from './deposit-history.mjs';

function formalBalances(service,userId,code){
  // 内部业务实现略
  throw new Error("not implemented");
}

function withdrawalReportColumns(columns){
  // 内部业务实现略
  throw new Error("not implemented");
}

function financialEventAgentReader(s){
  // 内部业务实现略
  throw new Error("not implemented");
}

function financialEventAgent(s,userId,stamp){
  // 内部业务实现略
  throw new Error("not implemented");
}

const minor=(v,scale=2)=>{
  // 内部业务实现略
  throw new Error("not implemented");
}

export class FinancialReports{
  constructor(store,formal=null){
    // 内部业务实现略
    throw new Error("not implemented");
  }

}
