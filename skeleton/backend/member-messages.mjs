/**
 * 接口定义 — backend/member-messages.mjs
 * 仅保留模块导出与接口签名。
 */


import {Fault,now} from './domain.mjs';

const exact=(v,places)=>{
  // 内部业务实现略
  throw new Error("not implemented");
};

const pageNumber=(q,key,fallback,max)=>{
  // 内部业务实现略
  throw new Error("not implemented");
};

export class MemberMessages{
  constructor(store,formal=null){
    // 内部业务实现略
    throw new Error("not implemented");
  }

}

// Discovered route endpoints in this module (read-only contract summary):
//   - /api/member/message-center
//   - /api/member/message-counts
//   - /api/member/message-read
