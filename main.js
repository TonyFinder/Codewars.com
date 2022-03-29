// 6kyu level
// https://www.codewars.com/kata/545cedaa9943f7fe7b000048

// Description
// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).
// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(string){
    let array = string.toLowerCase().split("").sort()
    let newArray = []
    for (let i = 1; i<array.length; i++) {
        if (array[i] !== array[i-1] && array[i].charCodeAt() > 96 && array[i].charCodeAt() < 123) newArray.push(array[i])
    }
    return newArray.length === 26
}


console.log(isPangram("This is not a pangram."))
