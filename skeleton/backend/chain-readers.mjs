/**
 * 接口定义 — backend/chain-readers.mjs
 * 仅保留模块导出与接口签名。
 */


import {createHash} from 'node:crypto';
import {Fault} from './domain.mjs';
export const TRANSFER_TOPIC='ddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef';

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
