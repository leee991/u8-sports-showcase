/**
 * 接口定义 — backend/commission-batch.mjs
 * 仅保留模块导出与接口签名。
 */

import {Fault,clean,required,currency,digest,now,checkPassword} from './domain.mjs';
import {reportRange} from './operations.mjs';

export class CommissionBatch{
  constructor(store){
    // 内部业务实现略
    throw new Error("not implemented");
  }

}
