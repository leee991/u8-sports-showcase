/**
 * 接口定义 — backend/deposit-queue.mjs
 * 仅保留模块导出与接口签名。
 */


import {Fault} from './domain.mjs';
import {microText} from './chain-invoices.mjs';
export const DEPOSIT_QUEUE_TTL_MS=1800000;
