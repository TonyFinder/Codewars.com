// 6kyu level
// https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/train/javascript

// Description
// #Highest Scoring Word

// Task
// Given a string of words, you need to find the highest scoring word.
//
//     Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
//
//     You need to return the highest scoring word as a string.
//
//     If two words score the same, return the word that appears earliest in the original string.
//
//     All letters will be lowercase and all inputs will be valid.
// ]

function high(str){
    let arrayStrings = str.split(" ")
    let arrayNumbers = []
    for (let i = 0; i < arrayStrings.length; i++) arrayNumbers.push(arrayStrings[i].split('').reduce((acc, el) => acc = acc + el.charCodeAt(0) - 96, 0))
    return arrayStrings[arrayNumbers.indexOf(arrayNumbers.reduce((acc, el) => acc > el ? acc : acc = el, 0))]
}

console.log(high("take me to semynak"))


// 97 - 122