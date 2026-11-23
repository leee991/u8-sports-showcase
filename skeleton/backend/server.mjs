/**
 * 接口定义 — backend/server.mjs
 * 仅保留模块导出与接口签名。
 */

import {EbpayDeposits,EBPAY_DEPOSIT_NOTIFY} from './ebpay-deposits.mjs';
import {EbpayReverse,productionEbpayConfig,EBPAY_REVERSE_PATH} from './ebpay-reverse.mjs';
import {EbpayPayouts,EBPAY_WITHDRAW_NOTIFY} from './ebpay-payouts.mjs';
import {performanceIndexes} from './performance-indexes.mjs';
import {checkFinancialPassword} from './financial-password-check.mjs';
import {DailyCheckin} from './daily-checkin.mjs';
import {CanadianBetReports} from './canadian-bet-reports.mjs';
import {FinanceCosts} from './finance-costs.mjs';
import {readOrderAlerts} from './admin-order-alerts.mjs';
import {DepositPaymentNotices} from './deposit-payment-notices.mjs';
import {DepositExpiry} from './deposit-expiry.mjs';
import {SessionPolicy} from './session-policy.mjs';
import {MemberMessages} from './member-messages.mjs';
import {AdminMfa} from './admin-mfa.mjs';
import {freshFinancialActor} from './actor-freshness.mjs';
import {readMemberPublicIds} from './member-public-ids.mjs';
import {withdrawalLimits} from './withdrawal-limits.mjs';
import {FinancialInventory} from './financial-inventory.mjs';
import {RebateBatch} from './rebate-batch.mjs';
import {RebateAutomation} from './rebate-automation.mjs';
import {AgentManagement,agentRevision} from './agent-management.mjs';
import {PaymentMethods} from './payment-methods.mjs';
import {MemberDepositChannels} from './member-deposit-channels.mjs';
import {BenefitRules} from './benefit-rules.mjs';
import {AgentCommissionContract} from './agent-commission-contract.mjs';
import {AgentCenter} from './agent-center.mjs';
import {InviteBinding} from './invite-binding.mjs';
import {MemberInvitations} from './member-invitations.mjs';
import {InviteCenter} from './invite-center.mjs';
import {AgentProfitSettings} from './agent-profit-settings.mjs';
import {FormalRebates} from './formal-rebates.mjs';
import {LiveRebates} from './live-rebates.mjs';
import {startDailyRebateScheduler} from './daily-rebate-scheduler.mjs';
import {VenueManagement} from './venue-management.mjs';
import {AuthPolicy,clientAddress} from './auth-policy.mjs';
import {MemberLoginPolicy} from './member-login-policy.mjs';
import {ActivityService} from './activity-service.mjs';
import {identityRoute,memberIdentity} from './member-identity.mjs';
import {cnyCents,requireDepositIdentity,requirePayerIdentity} from './formal-cny-deposits.mjs';
import {ChainRecharge} from './chain-recharge.mjs';
import {depositQueue} from './deposit-queue.mjs';
import {FirstDeposit} from './first-deposit.mjs';
import {publicSyncSnapshot} from './public-sync.mjs';
import {CommissionBatch} from './commission-batch.mjs';
import {PublicMedia,publicImage} from './public-media.mjs';
import {AgentDomains} from './agent-domains.mjs';
import {GameCategories} from './game-categories.mjs';
import {AgentProfitSettlement} from './agent-profit-settlement.mjs';
import {VipAutomation} from './vip-automation.mjs';
import {MemberFundsAdmin} from './member-funds-admin.mjs';
import {MemberManagement} from './member-management.mjs';
import {FinancialReports} from './financial-reports.mjs';
import {ContentService} from './content-service.mjs';
import {Management} from './management.mjs';
import {SecurityContacts} from './security-contacts.mjs';
import {TrialWallet} from './trial-wallet.mjs';
import {ensureExchangeRates,exchangeRate,saveExchangeRate} from './exchange-rate.mjs';
import {createTestLotteryBridge} from './test-lottery-wallet.mjs';
import http from 'node:http';
import { mkdirSync, readFileSync, existsSync, lstatSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { Store, Fault, token, digest, now, clean, required, amount, currency, hashPassword, checkPassword } from './domain.mjs';
import {registrationErrors,registrationContact,registrationContactDetails} from './registration-rules.mjs';
import {downloadLinks,saveDownloadLinks,activePromotions,memberSummary,memberExtraRoute,adminExtraRoute} from './member-features.mjs';
import {KgIntegration} from './kg-integration.mjs';
import {KgQa} from './kg-qa.mjs';
import {Collections} from './collections.mjs';
import {Operations} from './operations.mjs';
import {FormalService} from './formal-service.mjs';
import {FormalExchange} from './formal-exchange.mjs';
import {FormalAdjustments} from './formal-adjustments.mjs';
import {NeApiProductionClient} from './neapi-production.mjs';

export function formalProductionOptions(f,store){
  // 内部业务实现略
  throw new Error("not implemented");
}

export async function createApp(config={}){
  // 内部业务实现略
  throw new Error("not implemented");
}

const permissions=(u,p)=>{
  // 内部业务实现略
  throw new Error("not implemented");
}
