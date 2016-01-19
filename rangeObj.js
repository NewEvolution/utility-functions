module.exports = function rangeObj(start, end) {
  var builtObj = {};
  var rangeMaker = require("./range");
  var rangeArray = rangeMaker(start, end);
  for(item in rangeArray) {
    builtObj[rangeArray[item]] = parseInt(rangeArray[item]);
  }
  return builtObj;
};
