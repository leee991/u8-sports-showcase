/**
 * 接口定义 — backend/payment-methods.mjs
 * 仅保留模块导出与接口签名。
 */

import {Fault,required,clean,now} from './domain.mjs';
import {publicImage} from './public-media.mjs';

const amount=(v,code)=>{
  // 内部业务实现略
  throw new Error("not implemented");
}

const decimal=(n,code='USDT')=>{
  // 内部业务实现略
  throw new Error("not implemented");
}

export class PaymentMethods{
  constructor(store,formal){
    // 内部业务实现略
    throw new Error("not implemented");
  }

}
