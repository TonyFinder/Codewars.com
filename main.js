// 6kyu level
// https://www.codewars.com/kata/515de9ae9dcfc28eb6000001

// Description
// #Split Strings

// Task
// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').
//
//     Examples:
//
// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

function solution(str) {
    let arrayFinal = []
    let count = str.length
    let temp = 0
    while (count >= 2) {
        arrayFinal.push(str.substr(temp, 2))
        temp += 2
        count -= 2
    }
    if (count === 1) arrayFinal.push(`${str.substr(temp, 1)}_`)
    return arrayFinal
}

console.log(solution(''))
