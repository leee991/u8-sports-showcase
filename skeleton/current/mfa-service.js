/**
 * 接口定义 — current/mfa-service.js
 * 仅保留模块导出与接口签名。
 */

const crypto = require('node:crypto');

function fail(status, message) {
  // 内部业务实现略
  throw new Error("not implemented");
}

function digest(value) {
  // 内部业务实现略
  throw new Error("not implemented");
}

function token() {
  // 内部业务实现略
  throw new Error("not implemented");
}

function encodeBase32(bytes) {
  // 内部业务实现略
  throw new Error("not implemented");
}

function decodeBase32(value) {
  // 内部业务实现略
  throw new Error("not implemented");
}

function totp(secret, now, digits = 6) {
  // 内部业务实现略
  throw new Error("not implemented");
}

function matchingStep(secret, otp, now, minimumStep) {
  // 内部业务实现略
  throw new Error("not implemented");
}

function recoveryHash(value) {
  // 内部业务实现略
  throw new Error("not implemented");
}

function createMfaService({ db, now = Date.now } = {}) {
  // 内部业务实现略
  throw new Error("not implemented");
}

class MfaError extends Error {
  constructor(status, message) {
    // 内部业务实现略
    throw new Error("not implemented");
  }

}
