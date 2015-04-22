'use strict';

function breadcrumb (cake, crumbs) {
  return crumbs.split('.').reduce(follow, cake);
  function follow (cake, crumb) {
    return cake[crumb];
  }
}

module.exports = breadcrumb;
