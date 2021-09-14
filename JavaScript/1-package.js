'use strict';

const p1 = require('./Package1');
const p2 = require('./Package1/');
const p3 = require('./Package1/.');
const m1 = require('./Package1/main');
const m2 = require('./Package1/main.js');
const u1 = require('./Package1/utils');
const u2 = require('./Package1/utils.js');
const j1 = require('./Package1/package');
const j2 = require('./Package1/package.json');

console.log({ p1, p2, p3, m1, m2, u1, u2, j1, j2 });
