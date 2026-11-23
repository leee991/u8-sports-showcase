/**
 * 接口定义 — backend/auth-policy.mjs
 * 仅保留模块导出与接口签名。
 */


import {captchaImage} from './auth-captcha-image.mjs';
import {createHmac,randomBytes,timingSafeEqual} from 'node:crypto';
import {isIP} from 'node:net';
import {Fault,clean,now,token} from './domain.mjs';

export function clientAddress(req){
  // 内部业务实现略
  throw new Error("not implemented");
}

export class AuthPolicy{
  constructor(s,{key,clock=Date.now,random=randomBytes}={}){
    // 内部业务实现略
    throw new Error("not implemented");
  }

  challenge(purpose,req){
    // 内部业务实现略
    throw new Error("not implemented");
  }

}
