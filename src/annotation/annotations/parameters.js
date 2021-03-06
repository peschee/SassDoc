'use strict';

var typeRegEx =  /^\s*(?:\{(.*?)\})?\s*(?:\$(\w+))?\s*(?:\((.*?)\))?\s*(?:-?\s*(.*))?$/m;

module.exports =  function( text ){
  var parsed = typeRegEx.exec(text);
  var obj = {};

  if (parsed[1]) {
    obj.type = parsed[1];
  }

  if (parsed[2]) {
    obj.name  = parsed[2];
  }

  if (parsed[3]) {
    obj.default = parsed[3];
  }

  if (parsed[4]) {
    obj.description = parsed[4];
  }

  return obj;
};

module.exports.alias = ['arg', 'arguments', 'param'];