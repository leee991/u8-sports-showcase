/**
 * 接口定义 — backend/kg-integration.mjs
 * 仅保留模块导出与接口签名。
 */

import {createHmac,timingSafeEqual} from 'node:crypto';
import {readFileSync} from 'node:fs';
import {Fault,now,token,digest,clean,required,currency} from './domain.mjs';
import {KgRounds} from './kg-rounds.mjs';

export function kgSignature(secret,timestamp,nonce,raw,path){
  // 内部业务实现略
  throw new Error("not implemented");
}

const integer=(v,min,max,label)=>{
  // 内部业务实现略
  throw new Error("not implemented");
}

export class KgIntegration{
  constructor(store,config={}){
    // 内部业务实现略
    throw new Error("not implemented");
  }

}
