'use strict';

import('Package4').then((result) => {
  console.log(result);
});

import('Package4/utils.js').then((result) => {
  console.log(result);
});
