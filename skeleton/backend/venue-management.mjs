/**
 * 接口定义 — backend/venue-management.mjs
 * 仅保留模块导出与接口签名。
 */

import {Fault,clean,required,now} from './domain.mjs';import {publicImage} from './public-media.mjs';import {NEAPI_CAPABILITIES,NEAPI_CATALOG_PLATFORMS} from './neapi-capabilities.mjs';import {buildNeInventory} from './neapi-inventory.mjs';

const int=(v,min,max,label)=>{
  // 内部业务实现略
  throw new Error("not implemented");
}

export class VenueManagement{
  constructor(s,formal=null,kg=null){
    // 内部业务实现略
    throw new Error("not implemented");
  }

}
