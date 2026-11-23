/**
 * 接口定义 — backend/invite-binding.mjs
 * 仅保留模块导出与接口签名。
 */

import {createHmac,timingSafeEqual} from 'node:crypto';
import {Fault,clean} from './domain.mjs';

export class InviteBinding {
  constructor(store,invitations,{clock=Date.now}={}){
    // 内部业务实现略
    throw new Error("not implemented");
  }

}
