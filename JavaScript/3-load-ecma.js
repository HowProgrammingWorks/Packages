'use strict';

const p1 = import('Package3');
//const p2 = import('Package3/');
//const p3 = import('Package3/.');
//const m1 = import('Package3/main');
const m2 = import('Package3/main.mjs');
//const u1 = import('Package3/utils');
const u2 = import('Package3/utils.mjs');

Promise.all([p1, m2, u2]).then((result) => {
  console.log(result);
});
