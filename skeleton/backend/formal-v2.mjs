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
