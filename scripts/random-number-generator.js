function checkForDuplicates(str) {
    for (let i = 0; i < str.length - 1; i++) {
        for (let j = i + 1; j < str.length; j++) {
            if (str.charAt(i) === str.charAt(j)) {
                return true;
            }
        }
    }

    return false;
}

function generateRandomNumberWithUniqueDigits(numberOfDigits) {
    let randNumbStr = '';
    do {
        const numbersAfterDecimalPoint = Math.pow(10, numberOfDigits);
        const randNumber = Math.random() * numbersAfterDecimalPoint + numbersAfterDecimalPoint / 10;
        randNumbStr = randNumber.toString().substring(0, numberOfDigits);
        console.log(randNumbStr);
    } while (checkForDuplicates(randNumbStr));

    return randNumbStr;
}

export { generateRandomNumberWithUniqueDigits };