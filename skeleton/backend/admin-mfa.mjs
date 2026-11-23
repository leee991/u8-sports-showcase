/**
 * 接口定义 — backend/admin-mfa.mjs
 * 仅保留模块导出与接口签名。
 */


import {createHmac,randomBytes,timingSafeEqual} from 'node:crypto';
import {qrImage} from './vendor/admin-qr.mjs';
import {Fault,checkPassword,digest,token} from './domain.mjs';
import {clientAddress} from './auth-policy.mjs';

export function base32(bytes){
  // 内部业务实现略
  throw new Error("not implemented");
}

function decode32(text){
  // 内部业务实现略
  throw new Error("not implemented");
}

export function totp(secret,counter,digits=6){
  // 内部业务实现略
  throw new Error("not implemented");
}

function counterFor(secret,code,clock,after=-1){
  // 内部业务实现略
  throw new Error("not implemented");
}

export class AdminMfa{
  constructor(s,{required=false,clock=Date.now}={}){
    // 内部业务实现略
    throw new Error("not implemented");
  }

}
