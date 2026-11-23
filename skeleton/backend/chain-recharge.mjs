/**
 * 接口定义 — backend/chain-recharge.mjs
 * 仅保留模块导出与接口签名。
 */

import {Fault,checkPassword,required} from './domain.mjs';
import {freshFinancialActor} from './actor-freshness.mjs';
import {ChainInvoices,microText,CHAIN_VARIABLE_TERMS,CHAIN_VARIABLE_POLICY} from './chain-invoices.mjs';
import {ChainScanner} from './chain-scanner.mjs';
import {depositLimits} from './deposit-limits.mjs';
import {qrImage} from './vendor/admin-qr.mjs';
import {TronDepositReader} from './chain-readers.mjs';

export class ChainRecharge{
  constructor(formal,config={}){
    // 内部业务实现略
    throw new Error("not implemented");
  }

  present(r,admin=false){
    // 内部业务实现略
    throw new Error("not implemented");
  }

}
