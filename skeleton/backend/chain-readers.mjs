/**
 * 接口定义 — backend/chain-readers.mjs
 * 仅保留模块导出与接口签名。
 */

import {createHash} from 'node:crypto';
import {Fault} from './domain.mjs';

export function tronAddressHex(address){
  // 内部业务实现略
  throw new Error("not implemented");
}

async function readJson(fetchImpl,url,options={}){
  // 内部业务实现略
  throw new Error("not implemented");
}

export class TronDepositReader{
}

export class TronRpcDepositReader extends TronDepositReader{
}

export class EthereumDepositReader{
}
