/**
 * 接口定义 — backend/formal-wallet.mjs
 * 仅保留模块导出与接口签名。
 */


import {supplierAmount} from './supplier-precision.mjs';
import {statement} from './sql-statements.mjs';
import {formalReceiptClaimed} from './receipt-claims.mjs';
import {validateCurrencyExchange} from './currency-exchange-witness.mjs';
import {ensureInvoiceRates,invoiceRate,snapshotRate} from './invoice-rate.mjs';
import {DatabaseSync} from 'node:sqlite';
import {randomBytes,createHash} from 'node:crypto';
import {Fault,amount,required,now} from './domain.mjs';
import {NEAPI_CAPABILITIES} from './neapi-capabilities.mjs';

export class FormalWallet{
}
