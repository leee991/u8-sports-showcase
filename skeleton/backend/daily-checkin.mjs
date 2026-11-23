/**
 * 接口定义 — backend/daily-checkin.mjs
 * 仅保留模块导出与接口签名。
 */

import {Fault,checkPassword,required,digest} from './domain.mjs';
import {freshFinancialActor} from './actor-freshness.mjs';

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
