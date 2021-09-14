'use strict';

import('Package5').then((result) => {
  console.log(result);
});

import('Package5/utils').then((result) => {
  console.log(result);
});
