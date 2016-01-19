module.exports = function range(start, end) {
  var theArray = [];
  if(!end) {
    end = start;
    start = 0;
  }
  for(var i = start; i < end; ++i) {
    theArray.push(i);
  }
  return theArray;
}
