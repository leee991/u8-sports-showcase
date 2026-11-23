/**
 * 接口定义 — backend/agent-domains.mjs
 * 仅保留模块导出与接口签名。
 */

import {randomUUID} from 'node:crypto';
import {Fault,clean,required,now,digest} from './domain.mjs';

export function domainOrigin(value){
  // 内部业务实现略
  throw new Error("not implemented");
}

export class AgentDomains{
  constructor(store){
    // 内部业务实现略
    throw new Error("not implemented");
  }

}
