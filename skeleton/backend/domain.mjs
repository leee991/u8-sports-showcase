/**
 * 接口定义 — backend/domain.mjs
 * 仅保留模块导出与接口签名。
 */

import {statement} from './sql-statements.mjs';
import {ensureWithdrawalFees,ensureWithdrawalFinancials,snapshotWithdrawalFinancials,legacyWithdrawalPayee,withdrawalFinancialView} from './withdrawal-financials.mjs';
import {ensureWithdrawalDecisions,withdrawalDecision,recordWithdrawalDecision,requireWithdrawalMemberReason} from './withdrawal-decisions.mjs';
import {freshFinancialActor} from './actor-freshness.mjs';
import {CashDepositRules} from './cash-deposit-rules.mjs';
import {checkDepositLimits} from './deposit-limits.mjs';
import {ensureMemberIdentity,requirePayeeIdentity} from './member-identity.mjs';
import { DatabaseSync } from 'node:sqlite';
import {prepareCnyPayee} from './payout-bindings.mjs';
import { randomBytes, scrypt as scryptCallback, timingSafeEqual, createHash, createCipheriv,createDecipheriv } from 'node:crypto';
import { promisify } from 'node:util';

export function required(v,label,max=200){
  // 内部业务实现略
  throw new Error("not implemented");
}

export async function hashPassword(value,min=10,max=128){
  // 内部业务实现略
  throw new Error("not implemented");
}

export async function checkPassword(value,encoded){
  // 内部业务实现略
  throw new Error("not implemented");
}

export const currency = (v='CNY') => {
  // 内部业务实现略
  throw new Error("not implemented");
}

export const amount = (value, signed=false) => {
  // 内部业务实现略
  throw new Error("not implemented");
}

export class Fault extends Error {
}

export class Store {
  constructor(path, key) {
    // 内部业务实现略
    throw new Error("not implemented");
  }

  one(sql,...p){
    // 内部业务实现略
    throw new Error("not implemented");
  }

  all(sql,...p){
    // 内部业务实现略
    throw new Error("not implemented");
  }

  run(sql,...p){
    // 内部业务实现略
    throw new Error("not implemented");
  }

  encrypt(value){
    // 内部业务实现略
    throw new Error("not implemented");
  }

  decrypt(value){
    // 内部业务实现略
    throw new Error("not implemented");
  }

  tx(fn){
    // 内部业务实现略
    throw new Error("not implemented");
  }

  audit(actor,action,target,detail=''){
    // 内部业务实现略
    throw new Error("not implemented");
  }

  user(id){
    // 内部业务实现略
    throw new Error("not implemented");
  }

  member(id){
    // 内部业务实现略
    throw new Error("not implemented");
  }

  wallet(id,code='CNY'){
    // 内部业务实现略
    throw new Error("not implemented");
  }

  money(userId,delta,heldDelta,kind,ref,note,actor,code='CNY'){
    // 内部业务实现略
    throw new Error("not implemented");
  }

  idempotent(actor,key,payload,fn){
    // 内部业务实现略
    throw new Error("not implemented");
  }

  bind(userId,b,actor){
    // 内部业务实现略
    throw new Error("not implemented");
  }

  deposit(userId,b,actor,{paymentAsset=b.currency||'CNY'}={}){
    // 内部业务实现略
    throw new Error("not implemented");
  }

  reviewDeposit(id,b,actor){
    // 内部业务实现略
    throw new Error("not implemented");
  }

  withdrawal(userId,b,actor){
    // 内部业务实现略
    throw new Error("not implemented");
  }

  decideWithdrawal(id,b,actor){
    // 内部业务实现略
    throw new Error("not implemented");
  }

  reviewWithdrawal(id,b,actor){
    // 内部业务实现略
    throw new Error("not implemented");
  }

  saveAgent(b,actor,id=0){
    // 内部业务实现略
    throw new Error("not implemented");
  }

  assignAgent(userId,agentId,actor){
    // 内部业务实现略
    throw new Error("not implemented");
  }

  ingestVerifiedRound(round){
    // 内部业务实现略
    throw new Error("not implemented");
  }

  settleCommissions(agentId,actor){
    // 内部业务实现略
    throw new Error("not implemented");
  }

  close(){
    // 内部业务实现略
    throw new Error("not implemented");
  }

}
