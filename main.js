// 6kyu level
// https://www.codewars.com/kata/578aa45ee9fd15ff4600090d

// Description
// #Sort the odd

// Task
// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.
//
//     Examples
//     [7, 1]  =>  [1, 7]
//     [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
//     [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

function sortArray(array) {
    let oddArray = array.filter(f => f%2 !== 0)
    let sortedArray = []
    for (let i = 0; i < oddArray.length; i++) {
        sortedArray.push(oddArray.reduce((acc, el) => acc < el ? acc : el))
        delete oddArray[oddArray.indexOf(oddArray.reduce((acc, el) => acc < el ? acc : el))]
    }
    let finalArray = []
    let order = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i]%2 !== 0) {
            finalArray.push(sortedArray[order])
            order++
        } else {
            finalArray.push(array[i])
        }
    }
    return finalArray
}

console.log(sortArray([5, 3, 2, 8, 1, 4]))
