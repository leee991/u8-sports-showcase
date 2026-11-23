/**
 * 接口定义 — backend/formal-service.mjs
 * 仅保留模块导出与接口签名。
 */


import {formalReceiptClaimed} from './receipt-claims.mjs';
import {CashDepositRules,formalCashRecords} from './cash-deposit-rules.mjs';
import {freshFinancialActor} from './actor-freshness.mjs';
import {exchangeRate} from './exchange-rate.mjs';
import {FormalWallet} from './formal-wallet.mjs';
import {createHash} from 'node:crypto';
import {Fault,required,checkPassword} from './domain.mjs';
import {NEAPI_CAPABILITIES} from './neapi-capabilities.mjs';
import {ensureFormalCatalogSchema} from './formal-catalog-schema.mjs';
import {FormalV2} from './formal-v2.mjs';
import {FormalAutomatic} from './formal-automatic.mjs';
import {FormalBonus} from './formal-bonus.mjs';
import {FormalCnyDeposits} from './formal-cny-deposits.mjs';
import {CanadianSharedWallet,sharedMemberWallets} from './canadian-shared-wallet.mjs';
import {CurrencyOrigins} from './currency-origins.mjs';
import {WalletConsolidation} from './wallet-consolidation.mjs';

export class FormalService{
  constructor(store,config){
    // 内部业务实现略
    throw new Error("not implemented");
  }

}

// Discovered route endpoints in this module (read-only contract summary):
//   - /api/admin/formal
//   - /api/admin/formal/configure
//   - /api/admin/formal/funding
//   - /api/admin/formal/funding-review
//   - /api/admin/formal/order-review
//   - /api/admin/formal/records
//   - /api/admin/formal/sync-records
//   - /api/member/formal
//   - /api/member/formal/account
//   - /api/member/formal/balance
//   - /api/member/formal/launch
//   - /api/member/formal/transfer
