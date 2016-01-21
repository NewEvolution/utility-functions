module.exports = function rangeObj(start, end) {
  var rangeMaker = require("./range");
  var rangeArray = rangeMaker(start, end);
  return rangeArray.reduce(function(providedObj, currentVal) {
    providedObj[currentVal] = currentVal;
    return providedObj;
  }, {});
};
