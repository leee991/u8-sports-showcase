/**
 * 接口定义 — backend/formal-v2.mjs
 * 仅保留模块导出与接口签名。
 */


import {supplierAmount,supplierDecimal,ensureSupplierPrecision,recordPrecision} from './supplier-precision.mjs';
import {createHash,randomBytes} from 'node:crypto';
import {Fault,checkPassword} from './domain.mjs';
import {vendorTime} from './neapi-production.mjs';
import {inspectNeCatalog} from './neapi-readonly.mjs';

export class FormalV2{
  constructor(service,{background=false}={}){
    // 内部业务实现略
    throw new Error("not implemented");
  }

}

// Discovered route endpoints in this module (read-only contract summary):
//   - /api/admin/formal
//   - /api/admin/formal/game-codes
//   - /api/admin/formal/history
//   - /api/admin/formal/merchant-balance
//   - /api/admin/formal/review-sweep
//   - /api/admin/formal/sync-records
//   - /api/admin/formal/sync-status
//   - /api/member/formal
//   - /api/member/formal/balances
//   - /api/member/formal/sweep
//   - /api/member/formal/wallet-mode
