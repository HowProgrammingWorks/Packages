'use strict';

const p6 = require('Package6');
console.log({ p6 });

import('Package6').then((result) => {
  console.log(result);
});
