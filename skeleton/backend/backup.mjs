/**
 * 接口定义 — backend/backup.mjs
 * 仅保留模块导出与接口签名。
 */

import {DatabaseSync,backup} from 'node:sqlite';
import {readFileSync,writeFileSync,readdirSync,statSync,unlinkSync,mkdirSync,chmodSync} from 'node:fs';
import {randomBytes,createCipheriv,createDecipheriv} from 'node:crypto';
import {join} from 'node:path';
