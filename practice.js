function sum(a, b) {
    return a + b;
  }


function cap(str) {
    let firstLetter = str.charAt(0).toUpperCase();
    let rest = str.slice(1);
    let newStr = firstLetter + rest;
    return newStr;
}


function reverse(str) {
    let newArr = [];
    for (let i = str.length - 1; i >= 0; i--) {
        let letter = str.charAt(i);
        newArr.push(letter);
    }
    return newArr.join('');
}

function calc(a, operator, b) {
    let result = 0;
    if (operator === '+') {
        result = a + b; 
    }
    else if (operator === '-') {
        result = a - b;
    }
    else if (operator === '/') {
        result = a / b;
    }
    else if (operator === '*') {
        result = a * b;
    }
    else {
        return error;
    }
    return result;
}

function caesarCipher(plain_text, key) {
    let newArr = [];
    for (let i = 0; i < plain_text.length; i++) {
        let char = plain_text[i];

        if (plain_text[i] == plain_text[i].toUpperCase()) {
            let cipher = ((char.charCodeAt(0) - 65 + key) % 26) + 65; 
            newArr.push(String.fromCharCode(cipher));
        }
        else if (plain_text[i] == plain_text[i].toLowerCase()) {
            let cipher = ((char.charCodeAt(0) - 97 + key) % 26) + 97; 
            newArr.push(String.fromCharCode(cipher));       
        }
    }
    return newArr.join('');
}

function analyze(arr) {
    let max = null;
    let min = null;
    let avg = null;
    let arrLength = arr.length;

    for (let i = 0; i < arrLength; i++) {
        if (max === null || arr[i] > max) {
            max = arr[i];
        }
    }

    for (let i = 0; i < arrLength; i++) {
        if (min === null || i < min) {
            min = arr[i];
        }
    }

    let count = 0;
    for (let i = 0; i < arrLength; i++) {
        count += arr[i];
    }
    avg = count / arrLength;

    return {
        minimum: min,
        maximum: max,
        average: avg,
        length: arrLength
    };
}

module.exports = {
    sum: sum,
    cap: cap,
    reverse: reverse,
    calc: calc,
    caesarCipher: caesarCipher,
    analyze: analyze
};