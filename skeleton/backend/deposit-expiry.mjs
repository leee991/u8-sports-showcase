/**
 * 接口定义 — backend/deposit-expiry.mjs
 * 仅保留模块导出与接口签名。
 */


export const DEPOSIT_TTL_MS=1800000;
export const DEPOSIT_TIMEOUT_NOTE='未支付满30分钟，系统自动取消';

export class DepositExpiry{
}
