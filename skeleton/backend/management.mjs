/**
 * 接口定义 — backend/management.mjs
 * 仅保留模块导出与接口签名。
 */

import {publicImage} from './public-media.mjs';
import {Fault,clean,required,now} from './domain.mjs';
import {referenceAdminPages,referenceAdminGroups} from '../shared/reference-admin-navigation.mjs';
import {adminModules} from '../shared/admin-navigation.mjs';

export class Management{
  constructor(store,{roles={}}={}){
    // 内部业务实现略
    throw new Error("not implemented");
  }

}
