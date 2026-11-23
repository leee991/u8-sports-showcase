/**
 * 接口定义 — backend/public-media.mjs
 * 仅保留模块导出与接口签名。
 */


import {Fault,digest,now,clean} from './domain.mjs';
import {imageData} from './collections.mjs';

export function publicImage(store,value,{required=false}={}){
  // 内部业务实现略
  throw new Error("not implemented");
}

export class PublicMedia{
  constructor(store){
    // 内部业务实现略
    throw new Error("not implemented");
  }

}

// Discovered route endpoints in this module (read-only contract summary):
//   - /api/public/media/
