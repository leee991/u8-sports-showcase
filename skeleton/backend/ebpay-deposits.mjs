/**
 * 接口定义 — backend/ebpay-deposits.mjs
 * 仅保留模块导出与接口签名。
 */


import {createHash,randomBytes,timingSafeEqual} from 'node:crypto';
import {Fault,now} from './domain.mjs';
import {clientAddress} from './auth-policy.mjs';
import {cnyCents,requireDepositIdentity} from './formal-cny-deposits.mjs';
import {checkDepositLimits} from './deposit-limits.mjs';
export const EBPAY_DEPOSIT_NOTIFY='/api/payment/ebpay/deposit-notify';

export function ebpaySign(data,fields,key){
  // 内部业务实现略
  throw new Error("not implemented");
}

export function ebpayCents(value){
  // 内部业务实现略
  throw new Error("not implemented");
}

function checkout(value){
  // 内部业务实现略
  throw new Error("not implemented");
}

export class EbpayClient{
  constructor(config){
    // 内部业务实现略
    throw new Error("not implemented");
  }

}

export class EbpayDeposits{
  constructor(store,formal,config,{client=null}={}){
    // 内部业务实现略
    throw new Error("not implemented");
  }

}

// Discovered route endpoints in this module (read-only contract summary):
//   - /api/admin/formal/ebpay/
//   - /api/member/formal/ebpay/
//   - /api/merchant/deposit/v2
//   - /api/merchant/getDepositOrder/v2
//   - /api/merchant/getWithdrawOrder/v2
//   - /api/merchant/withdraw/create/v2
//   - /api/payment/ebpay/deposit-notify
