/**
 * 接口定义 — backend/agent-center.mjs
 * 仅保留模块导出与接口签名。
 */

import {agentGamingSources} from './agent-gaming-sources.mjs';
import {agentTurnoverMember,sumAgentTurnover,publicAgentTurnover} from './agent-turnover-report.mjs';
import {Fault,currency,clean} from './domain.mjs';
import {profitBounds,profitAmount,profitText,liveCost} from './agent-gaming-profit.mjs';

export class AgentCenter {
  constructor(store,formal,profit){
    // 内部业务实现略
    throw new Error("not implemented");
  }

}
