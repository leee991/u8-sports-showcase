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
