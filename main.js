// 5kyu level
// https://www.codewars.com/kata/514a024011ea4fb54200004b/train/javascript

// Description
// # Extract the domain name from a URL

// // Task
// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:
//
// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"

/*function domainName(url){
    let num = url.indexOf('.')

    return num
}

console.log(domainName("http://google.com"))*/


//Task from someone's interview!!!!!!!!!
// Дан массив чисел, нужно вернуть строку интервалов из подряд идущих чисел.
// Если подряд идут три и более числа с инкрементом 1, то они связываются "-"

// const arr = [9, 2, 6, 5, 3, 8, 1, 10, 12, 15];
// =>'1-3, 5, 6, 8-10, 12, 15'


function intervals(arr) {
    arr.sort((a, b) => a < b ? -1 : 1)
    let tempVar = 1
    let tempArr = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i + 1] === arr[i] + 1) {
            tempVar++
        } else {
            tempArr.push(tempVar)
            tempVar = 1
        }
    }

    let numberArr = []
    for (let i = 0; i < tempArr.length; i++) {
        if (tempArr[i] > 2) {
            numberArr.push(tempArr[i])
        } else {
            for (let j = 0; j < tempArr[i]; j++) {
                numberArr.push(1)
            }
        }
    }

    let finalArr = []
    for (let i = 0; i < numberArr.length; i++) {
        if (numberArr[i] > 2) {
            finalArr.push(`${arr[0]}-${arr[numberArr[i]-1]}`)
            arr.splice(0, numberArr[i])
        } else {
            finalArr.push(arr[0])
            arr.splice(0, numberArr[i])
        }
    }
    return finalArr.join(', ')
}

console.log(intervals([9, 2, 6, 5, 3, 8, 1, 10, 12, 15]))