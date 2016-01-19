module.exports = function rangeObj(range) {
  var builtObj = {};
  var rangeMaker = require("./range");
  for(item in rangeMaker(range)) {
    builtObj[item] = parseInt(item);
  }
  return builtObj;
};
