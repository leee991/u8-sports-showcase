/**
 * 接口定义 — backend/trial-canada.mjs
 * 仅保留模块导出与接口签名。
 */

import {canadianAdmission} from './canada-admission.mjs';

async function readLocal(game){
  // 内部业务实现略
  throw new Error("not implemented");
}

export class TrialCanada{
  constructor(trial,{read=readLocal,clock=Date.now}={}){
    // 内部业务实现略
    throw new Error("not implemented");
  }

}
