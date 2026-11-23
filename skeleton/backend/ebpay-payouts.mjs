/**
 * 接口定义 — backend/ebpay-payouts.mjs
 * 仅保留模块导出与接口签名。
 */


import {createHash,timingSafeEqual} from 'node:crypto';
import {Fault,now} from './domain.mjs';
import {clientAddress} from './auth-policy.mjs';
import {ebpaySign,ebpayCents,EbpayClient} from './ebpay-deposits.mjs';
import {EBPAY_REVERSE_PATH} from './ebpay-reverse.mjs';
import {recordWithdrawalDecision,withdrawalDecision} from './withdrawal-decisions.mjs';
export const EBPAY_WITHDRAW_NOTIFY='/api/payment/ebpay/withdraw-notify';

export class EbpayPayouts{
  constructor(store,formal,reverse,config,{client=null}={}){
    // 内部业务实现略
    throw new Error("not implemented");
  }

}

// Discovered route endpoints in this module (read-only contract summary):
//   - /api/admin/formal/ebpay/payouts
//   - /api/admin/formal/ebpay/payouts/dispatch
//   - /api/admin/formal/ebpay/payouts/query
//   - /api/merchant/getWithdrawOrder/v2
//   - /api/merchant/withdraw/create/v2
//   - /api/payment/ebpay/withdraw-notify
