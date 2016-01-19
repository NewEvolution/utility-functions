module.exports = function rangeObj(start, end) {
  var rangeMaker = require("./range");
  var rangeArray = rangeMaker(start, end);
  //var builtObj = {};
  //for(item in rangeArray) {
  //  builtObj[rangeArray[item]] = parseInt(rangeArray[item]);
  //}
  var builtObj = rangeArray.reduce(function(init, curr) {
    init[curr] = curr;
    return init;
  }, {});
  return builtObj;
};
