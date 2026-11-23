/**
 * 接口定义 — backend/formal-automatic.mjs
 * 仅保留模块导出与接口签名。
 */

import {supplierAmount,observedProviderUnits,supplierDecimal} from './supplier-precision.mjs';
import {ReceivingPresentation} from './receiving-presentation.mjs';
import {CashoutBalanceChecks} from './cashout-balance-checks.mjs';
import {depositLimits,checkDepositLimits} from './deposit-limits.mjs';
import {freshFinancialActor} from './actor-freshness.mjs';
import {randomBytes,createHash} from 'node:crypto';
import {Fault,checkPassword,required} from './domain.mjs';

export function validAddress(network,address){
  // 内部业务实现略
  throw new Error("not implemented");
}

export class FormalAutomatic{
  constructor(service,config={}){
    // 内部业务实现略
    throw new Error("not implemented");
  }

}
