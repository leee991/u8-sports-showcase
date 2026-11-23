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

export class EbpayPayouts{
  constructor(store,formal,reverse,config,{client=null}={}){
    // 内部业务实现略
    throw new Error("not implemented");
  }

}
