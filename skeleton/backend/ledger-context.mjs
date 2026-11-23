/**
 * 接口定义 — backend/ledger-context.mjs
 * 仅保留模块导出与接口签名。
 */


import {manualAdjustmentReportView} from './manual-adjustment-report.mjs';
import {NEAPI_RATE_NAMES} from './neapi-cost-rates.mjs';

export function ledgerContext(store,formal,row,source){
  // 内部业务实现略
  throw new Error("not implemented");
}
