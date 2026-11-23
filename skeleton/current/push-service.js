/**
 * 接口定义 — current/push-service.js
 * 仅保留模块导出与接口签名。
 */


const crypto = require('node:crypto');
const dns = require('node:dns');
const https = require('node:https');
const net = require('node:net');
const webPush = require('web-push');

function reject(status, message) {
  // 内部业务实现略
  throw new Error("not implemented");
}

function validateEndpoint(value) {
  // 内部业务实现略
  throw new Error("not implemented");
}

function decodeKey(value, bytes, label) {
  // 内部业务实现略
  throw new Error("not implemented");
}

function validateSubscription(value, now) {
  // 内部业务实现略
  throw new Error("not implemented");
}

function isPublicAddress(address) {
  // 内部业务实现略
  throw new Error("not implemented");
}

function createSafeLookup(lookup = dns.lookup) {
  // 内部业务实现略
  throw new Error("not implemented");
}

function createPushService({ db, now = Date.now, send, autoStart = true } = {}) {
  // 内部业务实现略
  throw new Error("not implemented");
}

class PushError extends Error {
  constructor(status, message) {
    // 内部业务实现略
    throw new Error("not implemented");
  }

}

// Exported symbols: createPushService, PushError, validateEndpoint, validateSubscription, isPublicAddress, createSafeLookup
