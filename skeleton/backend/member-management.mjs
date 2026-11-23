/**
 * 接口定义 — backend/member-management.mjs
 * 仅保留模块导出与接口签名。
 */

import {withdrawalFeesRoute,withdrawalFinancialView} from './withdrawal-financials.mjs';
import {Fault,clean,required,now,currency} from './domain.mjs';
import {memberGameSources} from './member-games-report.mjs';
import {memberIdentity} from './member-identity.mjs';
import {SecurityContacts} from './security-contacts.mjs';
import {MemberPolicies} from './member-policies.mjs';
import {locateIp,normalizeIp} from './ip-geolocation.mjs';
import {registrationContactDetails} from './registration-rules.mjs';

export class MemberManagement{
  constructor(store,formal=null,{geoLookup=locateIp}={}){
    // 内部业务实现略
    throw new Error("not implemented");
  }

}
