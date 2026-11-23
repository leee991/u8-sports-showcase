/**
 * 接口定义 — backend/formal-exchange.mjs
 * 仅保留模块导出与接口签名。
 */


import {ExchangeRestrictions,EXCHANGE_POLICY} from './exchange-restrictions.mjs';
import {checkPassword} from './domain.mjs';
import {freshFinancialActor} from './actor-freshness.mjs';
import {randomBytes,createHash} from 'node:crypto';
import {Fault} from './domain.mjs';
import {WalletExchangePolicy} from './wallet-exchange-policy.mjs';
import {exchangeIntent,validateCurrencyExchange} from './currency-exchange-witness.mjs';

function normalize(userId,body,requestKey){
  // 内部业务实现略
  throw new Error("not implemented");
}

const safe=(value,{signed=false}={})=>{
  // 内部业务实现略
  throw new Error("not implemented");
};

const decimal=(units,digits)=>{
  // 内部业务实现略
  throw new Error("not implemented");
};

export class FormalExchange{
  constructor(service,{enabled=false}={}){
    // 内部业务实现略
    throw new Error("not implemented");
  }

  assertSafe(userId){
    // 内部业务实现略
    throw new Error("not implemented");
  }

  present(row,{replayed=false}={}){
    // 内部业务实现略
    throw new Error("not implemented");
  }

}

// Discovered route endpoints in this module (read-only contract summary):
//   - /api/admin/formal/exchange-rate
//   - /api/admin/formal/member-exchange
//   - /api/admin/formal/member-exchange-options
//   - /api/member/formal/exchange
//   - /api/member/formal/exchange-options
