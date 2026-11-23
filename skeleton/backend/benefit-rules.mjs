/**
 * 接口定义 — backend/benefit-rules.mjs
 * 仅保留模块导出与接口签名。
 */


import {Fault,clean,required,now,digest,checkPassword,token} from './domain.mjs';import {publicImage} from './public-media.mjs';

const format=(n,code)=>{
  // 内部业务实现略
  throw new Error("not implemented");
};

const integer=(v,min,max,label)=>{
  // 内部业务实现略
  throw new Error("not implemented");
};

export class BenefitRules{
  constructor(s,formal){
    // 内部业务实现略
    throw new Error("not implemented");
  }

}

// Discovered route endpoints in this module (read-only contract summary):
//   - /api/admin/benefit-claims
//   - /api/admin/benefit-rules
//   - /api/admin/benefit-rules/archive
//   - /api/member/benefits
