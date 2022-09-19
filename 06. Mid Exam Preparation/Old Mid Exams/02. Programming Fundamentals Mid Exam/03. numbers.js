function numbers(numsStr) {
    const numsArr = numsStr.split(" ").map(Number);
  
    let sumNums = 0;
    numsArr.forEach((num) => (sumNums += num));
    let averageNum = sumNums / numsArr.length;
  
    let resultArr = [];
    numsArr.map((num) => {
      if (num > averageNum) {
        resultArr.push(num);
      }
    });
  
    resultArr = resultArr.sort((a, b) => b - a);
  
    if (!resultArr.length < 5) {
      resultArr.splice(5);
    }
  
    if (resultArr.length === 0) {
      console.log("No");
    } else {
      console.log(resultArr.join(" "));
    }
  }
  
  numbers('-1 -2 -3 -4 -5 -6');