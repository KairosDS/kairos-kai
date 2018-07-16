/**
 *
 * @param {String} actionsPath
 * @param {Object} action
 * @return {Function}
 */
module.exports = (actionsPath, action) => {
  const {existsSync} = require('fs');
  const {join} = require('path');
  let handler;
  if (existsSync(actionsPath)) {
    try {
      const path = join(actionsPath, action);
      console.log(`Action ${action} handled by ${path}.`);
      handler = require(path);
    } catch (err) {
      console.error(err);
    }
  } else {
    console.error(`${actionsPath} couldn't be found`);
  }
  return handler;
}
