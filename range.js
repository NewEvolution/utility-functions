module.exports = function range(count) {
  var theArray = [];
  for(var i = 0; i < count; ++i) {
    theArray.push(i);
  }
  return theArray;
}
