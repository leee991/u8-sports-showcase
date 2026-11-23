/**
 * 接口定义 — backend/activity-service.mjs
 * 仅保留模块导出与接口签名。
 */


import {Fault,clean,required,now,amount,checkPassword,digest} from './domain.mjs';
import {publicImage} from './public-media.mjs';
import {promotionCategories} from './member-features.mjs';

const integer=(v,min,max,label)=>{
  // 内部业务实现略
  throw new Error("not implemented");
};

export class ActivityService{
  constructor(s,formal=null){
    // 内部业务实现略
    throw new Error("not implemented");
  }

}

// Discovered route endpoints in this module (read-only contract summary):
//   - /api/admin/activities
//   - /api/admin/activity-categories
//   - /api/admin/activity-claims
//   - /api/member/activity-claims
