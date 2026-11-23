/**
 * 接口定义 — backend/member-public-ids.mjs
 * 仅保留模块导出与接口签名。
 */

import {DatabaseSync} from 'node:sqlite';
import {Fault} from './domain.mjs';

export function readMemberPublicIds(store,path,ids){
  // 内部业务实现略
  throw new Error("not implemented");
}
