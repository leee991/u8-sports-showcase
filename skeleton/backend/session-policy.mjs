/**
 * 接口定义 — backend/session-policy.mjs
 * 仅保留模块导出与接口签名。
 */


import {Fault} from './domain.mjs';

export class SessionPolicy{
  constructor(store,{adminMfa=null,clock=Date.now,concurrentStaff=true}={}){
    // 内部业务实现略
    throw new Error("not implemented");
  }

}
