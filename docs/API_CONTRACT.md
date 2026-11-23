# 接口说明 — U8 平台

## 1. 主服务接口（`u8-api`）

| 分组 | 典型路径 | 干嘛的 |
|---|---|---|
| 认证与安全 | `POST /api/auth/login` · `POST /api/member/transaction-password` | 登录策略、会话校验、资金密码 |
| 钱包与换汇 | `GET /api/wallet/summary` · `POST /api/wallet/exchange` | 多币种余额汇总、固定汇率与换汇限制 |
| 充提与流水 | `GET /api/deposit/history` · `POST /api/withdraw/apply` | 充值渠道、收款参考、提现限额与流水核验 |
| 返水与 VIP | `GET /api/vip/status` · `GET /api/rebates/history` | 首充奖励、VIP 升级、每日返水批次 |
| 后台管理 | `/api/admin/members` · `/api/admin/withdrawals` · `/api/admin/reports` | 调账、打码稽核、供应商对账、导出 XLSX |

## 2. 独立客服（`u8-support`，路径 `/kefu-v2/`）
- 访客：独立 HttpOnly Cookie 会话、文字/图片收发、已读回执
- 坐席：会话分配/转接、内部备注、消息撤回编辑、TOTP 绑定、WebPush 推送

## 3. 支付回调沙箱（`u8-ebpay-sandbox`）
- 模拟充值单创建、代付成功/拒绝回调、订单状态查询，完全不碰正式钱包。
