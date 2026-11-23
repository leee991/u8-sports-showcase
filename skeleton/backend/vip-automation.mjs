/**
 * 接口定义 — backend/vip-automation.mjs
 * 仅保留模块导出与接口签名。
 */

import {Fault,currency,digest,checkPassword,required} from './domain.mjs';
import {freshFinancialActor} from './actor-freshness.mjs';
import {FinancialReports} from './financial-reports.mjs';
import {memberGameSources} from './member-games-report.mjs';
import {formalCashRecords} from './cash-deposit-rules.mjs';

export class VipAutomation{
  constructor(s,f,{clock=Date.now}={}){
    // 内部业务实现略
    throw new Error("not implemented");
  }

}
