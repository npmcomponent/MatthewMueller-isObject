/**
 * Export `isObject`
 */

module.exports = function(obj) {
  return obj.constructor == Object;
};
