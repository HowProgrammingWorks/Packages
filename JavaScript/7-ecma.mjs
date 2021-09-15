const m1 = await import('module');
const m2 = await import('module');
import m3 from 'module';
import m4 from 'module';

const { createRequire } = m2;
const require = createRequire(import.meta.url);

const m5 = require('module');
const m6 = require('module');

console.log(m3 === m6);

const c7 = require('Package7');
const m7 = await import('Package7');

console.log({ c7, m7 });
