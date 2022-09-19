function sumDigits(num) {
  //   let sum = 0;

  //   for (let digit = 0; digit < num.toString().length; digit++) {
  //     sum += Number(num.toString()[digit]);
  //   }

  //   console.log(sum);

  const sum = num
    .toString()
    .split("")
    .reduce((total, current) => total + Number(current), 0);

  console.log(sum);
}

sumDigits(245678);
