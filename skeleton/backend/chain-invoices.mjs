/**
 * 接口定义 — backend/chain-invoices.mjs
 * 仅保留模块导出与接口签名。
 */


import {randomBytes,randomInt,createHash} from 'node:crypto';
import {Fault} from './domain.mjs';
import {validAddress} from './formal-automatic.mjs';
import {TOKEN_CONTRACTS,isVerifiedChainProof} from './chain-readers.mjs';
import {ensureChainDepositSchema} from './chain-deposit-schema.mjs';
import {checkDepositLimits} from './deposit-limits.mjs';
import {DEPOSIT_TIMEOUT_NOTE} from './deposit-expiry.mjs';
export const CHAIN_VARIABLE_TERMS='chain-exact-amount-variable-tail-v2';
export const CHAIN_VARIABLE_POLICY='unique-variable-tail-v2';

export function parseChainAmount(v){
  // 内部业务实现略
  throw new Error("not implemented");
}

export class ChainInvoices{
  constructor(service,{random=randomInt}={}){
    // 内部业务实现略
    throw new Error("not implemented");
  }

}
