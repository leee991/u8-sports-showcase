/**
 * 接口定义 — backend/chain-scanner.mjs
 * 仅保留模块导出与接口签名。
 */


import {createHash} from 'node:crypto';
import {TronDepositReader,TronRpcDepositReader,EthereumDepositReader} from './chain-readers.mjs';
import {Fault} from './domain.mjs';

export class ChainScanner{
  constructor(book,{readers=null,tronApiKey='',tronPublicRpc=false,background=false,intervalMs=30000,disabledAssets=[]}={}){
    // 内部业务实现略
    throw new Error("not implemented");
  }

}
