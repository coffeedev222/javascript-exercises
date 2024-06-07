const removeFromArray = function(givenArgs, ...args) {
    let newArray = [];
    for(let i=0; i < givenArgs.length; i++){
      let itemToKeep = true;
      for(let j=0; j < args.length; j++) {
        if(givenArgs[i] === args[j]){
          itemToKeep = false;
          break;
        }
      }
      if(itemToKeep) {
        newArray.push(givenArgs[i])
      }
    }
  return newArray;
};
// Do not edit below this line
module.exports = removeFromArray;
