/**
 * 接口定义 — current/geoip-xdb.js
 * 仅保留模块导出与接口签名。
 */


const fs = require('node:fs');
const net = require('node:net');

function publicIPv4(address) {
  // 内部业务实现略
  throw new Error("not implemented");
}

function loadDatabase(filePath) {
  // 内部业务实现略
  throw new Error("not implemented");
}

function coarseRegion(bytes) {
  // 内部业务实现略
  throw new Error("not implemented");
}

function createLookup(filePath) {
  // 内部业务实现略
  throw new Error("not implemented");
}

// Exported symbols: createLookup
