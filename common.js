
function findPrimes(n) {
    // let arrOfPrimes = [];
    let i, j;

    for(i = 1; i < n; i++){
        let isPrime = false;

        for(j = 2; j < i; j++) {

            if(i%j == 0) {
                isPrime = false;
                break;
            } else {
                isPrime = true;
            }
        }

        if(isPrime){
            console.log(i);
        }
    }
    // return arrOfPrimes.push();   I have not done my array.
}

console.log(findPrimes(30));

