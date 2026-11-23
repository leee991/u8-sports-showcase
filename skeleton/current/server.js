/**
 * 接口定义 — current/server.js
 * 仅保留模块导出与接口签名。
 */


const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const net = require('node:net');
const { normalizeIp } = require('./ip-address');
const { DatabaseSync } = require('node:sqlite');
const { createPushService, PushError } = require('./push-service');
const { supportIdentity, visitorSystemMessage } = require('./support-identity');
const { createMfaService, MfaError } = require('./mfa-service');

function fail(status, message) {
  // 内部业务实现略
  throw new Error("not implemented");
}

function hashToken(token) {
  // 内部业务实现略
  throw new Error("not implemented");
}

function randomToken() {
  // 内部业务实现略
  throw new Error("not implemented");
}

function passwordHash(password) {
  // 内部业务实现略
  throw new Error("not implemented");
}

function passwordMatches(password, encoded) {
  // 内部业务实现略
  throw new Error("not implemented");
}

function text(value, maximum, label, required = false) {
  // 内部业务实现略
  throw new Error("not implemented");
}

function validId(value) {
  // 内部业务实现略
  throw new Error("not implemented");
}

function parseCookies(req) {
  // 内部业务实现略
  throw new Error("not implemented");
}

async function readJson(req, limit = 65536, discard = false, timeoutMs = 15000) {
  // 内部业务实现略
  throw new Error("not implemented");
}

function createServer(options = {}) {
  // 内部业务实现略
  throw new Error("not implemented");
}

class ApiError extends Error {
  constructor(status, message, code) {
    // 内部业务实现略
    throw new Error("not implemented");
  }

}

// Discovered route endpoints in this module (read-only contract summary):
//   - /api/agents
//   - /api/auth/
//   - /api/auth/login
//   - /api/auth/logout
//   - /api/auth/mfa/
//   - /api/auth/mfa/cancel
//   - /api/auth/mfa/enroll
//   - /api/auth/mfa/verify
//   - /api/bootstrap
//   - /api/conversations
//   - /api/events
//   - /api/health
//   - /api/ip-blocks
//   - /api/ip-blocks/remove
//   - /api/presence
//   - /api/push/
//   - /api/push/config
//   - /api/push/subscribe
//   - /api/push/test
//   - /api/push/unsubscribe
//   - /api/settings/welcome
//   - /api/visitor/
//   - /api/visitor/draft
//   - /api/visitor/events
//   - /api/visitor/messages
//   - /api/visitor/presence
//   - /api/visitor/read
//   - /api/visitor/session
//   - /api/visitor/start
//   - /api/visitor/upload

// Exported symbols: createServer
