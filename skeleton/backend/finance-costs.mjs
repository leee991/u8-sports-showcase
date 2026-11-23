/**
 * 接口定义 — backend/finance-costs.mjs
 * 仅保留模块导出与接口签名。
 */

import {financeCurrencyReader,financialAtoms,financialText} from './finance-currency.mjs';
import {createHash} from 'node:crypto';
import {Fault,checkPassword,required} from './domain.mjs';
import {freshFinancialActor} from './actor-freshness.mjs';
import {withdrawalFinancialView} from './withdrawal-financials.mjs';
import {normalizeNeapiCostRates,DOCUMENTED_CNY_RATE_PLATFORMS,NEAPI_RATE_NAMES} from './neapi-cost-rates.mjs';
import {estimateGameInterfaces} from './game-interface-estimates.mjs';

const decimal=(n,digits=6)=>{
  // 内部业务实现略
  throw new Error("not implemented");
}

export class FinanceCosts{
  constructor(store,formal,reports){
    // 内部业务实现略
    throw new Error("not implemented");
  }

  async route(c){
    // 内部业务实现略
    throw new Error("not implemented");
  }

}
