/**
 * 接口定义 — backend/member-identity.mjs
 * 仅保留模块导出与接口签名。
 */

import {Fault,checkPassword,now} from './domain.mjs';
import {phoneContact} from './security-contacts.mjs';

export function ensureMemberIdentity(store){
  // 内部业务实现略
  throw new Error("not implemented");
}

export function realName(value){
  // 内部业务实现略
  throw new Error("not implemented");
}

export function memberIdentity(store,userId){
  // 内部业务实现略
  throw new Error("not implemented");
}

export function bindMemberIdentity(store,userId,value,actor){
  // 内部业务实现略
  throw new Error("not implemented");
}

export function identityMatches(store,userId,holder){
  // 内部业务实现略
  throw new Error("not implemented");
}

export function requirePayeeIdentity(store,userId,holder){
  // 内部业务实现略
  throw new Error("not implemented");
}

export async function identityRoute({p,method,b,actor,store,write,send}){
  // 内部业务实现略
  throw new Error("not implemented");
}
