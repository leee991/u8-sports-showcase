/**
 * 接口定义 — backend/wallet-consolidation.mjs
 * 仅保留模块导出与接口签名。
 */


import {randomBytes,createHash} from 'node:crypto';
import {Fault} from './domain.mjs';
import {readLegacyDepositRules} from './cash-deposit-rules.mjs';

export class WalletConsolidation{
  constructor(service,{enabled=false}={}){
    // 内部业务实现略
    throw new Error("not implemented");
  }

}
