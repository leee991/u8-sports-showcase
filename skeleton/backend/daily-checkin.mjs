/**
 * 接口定义 — backend/daily-checkin.mjs
 * 仅保留模块导出与接口签名。
 */


import {Fault,checkPassword,required,digest} from './domain.mjs';
import {freshFinancialActor} from './actor-freshness.mjs';
export const CHECKIN_WRITES_ENABLED=true;

function milli(value,{blank=false}={}){
  // 内部业务实现略
  throw new Error("not implemented");
}

export class DailyCheckin{
  constructor(formal){
    // 内部业务实现略
    throw new Error("not implemented");
  }

}

// Discovered route endpoints in this module (read-only contract summary):
//   - /api/admin/checkin
//   - /api/admin/checkin/configure
//   - /api/member/checkin
//   - /api/member/checkin/claim
