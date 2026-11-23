/**
 * 接口定义 — backend/report-query.mjs
 * 仅保留模块导出与接口签名。
 */

import {reportBigRows,reportCount,reportDecimalUnits,reportMoney} from './report-precision.mjs';

export function groupedBets(db,sql,args,{provider=false}={}){
  // 内部业务实现略
  throw new Error("not implemented");
}

export function betGroups({provider=false}={}){
  // 内部业务实现略
  throw new Error("not implemented");
}

export function topReportRows(size){
  // 内部业务实现略
  throw new Error("not implemented");
}

export function mergeReportPage(streams,offset,limit,append){
  // 内部业务实现略
  throw new Error("not implemented");
}
