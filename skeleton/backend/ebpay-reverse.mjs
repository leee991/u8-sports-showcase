/**
 * 接口定义 — backend/ebpay-reverse.mjs
 * 仅保留模块导出与接口签名。
 */


import {createHash,timingSafeEqual} from 'node:crypto';
import {readFileSync,lstatSync} from 'node:fs';
import {join} from 'node:path';
import {Fault,now} from './domain.mjs';
import {clientAddress} from './auth-policy.mjs';
import {freshFinancialActor} from './actor-freshness.mjs';
export const EBPAY_REVERSE_PATH='/api/payment/ebpay/withdraw-query';

export function ebpayReverseSignature(data,key){
  // 内部业务实现略
  throw new Error("not implemented");
}

function privateCredential(name){
  // 内部业务实现略
  throw new Error("not implemented");
}

export function productionEbpayConfig(){
  // 内部业务实现略
  throw new Error("not implemented");
}

export class EbpayReverse{
  constructor(store,formal,config=null){
    // 内部业务实现略
    throw new Error("not implemented");
  }

}

// Discovered route endpoints in this module (read-only contract summary):
//   - /api/payment/ebpay/withdraw-query
