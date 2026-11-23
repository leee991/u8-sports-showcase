/**
 * 接口定义 — backend/report-precision.mjs
 * 仅保留模块导出与接口签名。
 */

import {Fault} from './domain.mjs';

export function reportInteger(value){
  // 内部业务实现略
  throw new Error("not implemented");
}

export function reportDecimalUnits(value){
  // 内部业务实现略
  throw new Error("not implemented");
}

export function reportMoney(value){
  // 内部业务实现略
  throw new Error("not implemented");
}

export function reportCount(value){
  // 内部业务实现略
  throw new Error("not implemented");
}

export function reportDisplayCents(value){
  // 内部业务实现略
  throw new Error("not implemented");
}

export function reportBigRows(db,sql,args=[]){
  // 内部业务实现略
  throw new Error("not implemented");
}

export function reportSummary(totals){
  // 内部业务实现略
  throw new Error("not implemented");
}
