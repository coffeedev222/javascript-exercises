const sumAll = function(num1, num2) {
    let sumOfNum = 0;
    let largerNum = 0;
    let smallerNum = 0;
    let arg1 = 0;
    let arg2 = 0;
    let test = console.log(typeof num2);
  
    if(typeof num1 === 'number' && typeof num2 === 'number')     {
        arg1 = num1;
        arg2 = num2;
    }
    else{
      return "ERROR";
    }

    if(arg1 > 0 && arg2 > 0){
        if(arg1 > arg2) {
            largerNum = arg1;
            smallerNum = arg2;
        }
        else{
            largerNum = arg2;
            smallerNum = arg1;
        }
    }
    else{
        return "ERROR";
    }
    
    for(i = smallerNum; i <= largerNum; i++) {
        sumOfNum += smallerNum;
        smallerNum++;
    }
    
    return sumOfNum;
};

// Do not edit below this line
module.exports = sumAll;
