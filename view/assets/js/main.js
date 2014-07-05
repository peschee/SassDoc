'use strict';
/* global lunr, data */

var search = (function(){
  lunr.tokenizer = function(str){
    var split = str.split(/[\s-_]/);
    console.log(split);
    return split;
  };

  var indexedData = [];
  var index = lunr(function () {
    this.field('name', 10);
    this.field('description');
  });

  // Add all items to the indexer
  Object.keys(data).forEach(function(key){
    var id = 0;
    data[key].forEach(function(item){
      index.add({
        id : id,
        name : item.context.name,
        description : item.description,
      });
      id++;
      indexedData.push(item);
    });
  });

  return function (term){
    return index.search(term).map(function(found){
      return indexedData[found.ref];
    });
  };
})();