'use strict';
// @flow

/**
 * Add Store in the module
 *
 * @param {*} key
 * @param {*} data
 */
export function addStoreModule (key, data) {
  if (!Object.keys(this.$store._modules.root._children).includes(key)) {
    this.$store.registerModule(key, data);
  }
}
