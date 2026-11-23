/**
 * 接口定义 — backend/currency-origins.mjs
 * 仅保留模块导出与接口签名。
 */

import {DepositBonusWithdrawal} from './deposit-bonus-withdrawal.mjs';
import {takeTags,scalePartTags,combineTags,bonusExposure,restrictionParent,restoreRestrictionParent} from './exchange-restrictions.mjs';
import {withdrawalBasis,scaleWithdrawalBasis,takeWithdrawalBasis,combinedWithdrawalBasis} from './withdrawal-provenance.mjs';
import {Fault} from './domain.mjs';
import {validateCurrencyExchange} from './currency-exchange-witness.mjs';

function nativeFraction(parts){
  // 内部业务实现略
  throw new Error("not implemented");
}

function decimal(n,d,digits,{round=false}={}){
  // 内部业务实现略
  throw new Error("not implemented");
}

function split(parts,total){
  // 内部业务实现略
  throw new Error("not implemented");
}

function cut(lots,units,{currency=null,preferred=null,strict=false,explicit=null,verifyParent=null}={}){
  // 内部业务实现略
  throw new Error("not implemented");
}

export class CurrencyOrigins{
  constructor(service,{enabled=false,initialize=true}={}){
    // 内部业务实现略
    throw new Error("not implemented");
  }

  bonusParts(id,parts){
    // 内部业务实现略
    throw new Error("not implemented");
  }

}
