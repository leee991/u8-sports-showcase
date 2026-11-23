/**
 * 接口定义 — backend/trial-wallet.mjs
 * 仅保留模块导出与接口签名。
 */

import {TrialCanada} from './trial-canada.mjs';
import {readFileSync} from 'node:fs';
import {Fault,now} from './domain.mjs';

export class TrialWallet{
  constructor(store,{canada={}}={}){
    // 内部业务实现略
    throw new Error("not implemented");
  }

  providerGames(){
    // 内部业务实现略
    throw new Error("not implemented");
  }

}
