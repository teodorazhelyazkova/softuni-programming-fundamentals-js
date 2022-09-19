function printAndSum(start, end){
    let total = 0;
    let printLine = "";
    for(let i = start; i <= end; i++){
        total += i;

        if(i === end) {
            printLine += `${i}`;
        } else {
            printLine += `${i} `;
        }
        
    }

    console.log(printLine);
    console.log(`Sum: ${total}`);
}

printAndSum(5, 10);