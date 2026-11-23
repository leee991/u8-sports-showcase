/**
 * 接口定义 — backend/live-rebates.mjs
 * 仅保留模块导出与接口签名。
 */

import {randomBytes} from 'node:crypto';
import {Fault,digest,checkPassword,required} from './domain.mjs';
import {freshFinancialActor} from './actor-freshness.mjs';
import {liveRebateSources} from './live-rebate-sources.mjs';
import {LIVE_REBATE_VERSION,LIVE_REBATE_CATEGORIES,LIVE_REBATE_TIERS,LEGACY_LIVE_REBATE_VERSION,LEGACY_LIVE_REBATE_TIERS,PREVIOUS_LIVE_REBATE_VERSION,PREVIOUS_LIVE_REBATE_TIERS,rebateDay,rebateDayStart,rebateTier,legacyRebateTier,rebateDecimal} from '../shared/live-rebate-rules.mjs';

export class LiveRebates{
  constructor(store,formal,{clock=Date.now}={}){
    // 内部业务实现略
    throw new Error("not implemented");
  }

}
