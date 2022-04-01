// 6kyu level
// https://www.codewars.com/kata/576757b1df89ecf5bd00073b

// Description
// #Build Tower

// Task
// Build Tower
// Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.
//
//     For example, a tower with 3 floors looks like this:
//
// [
//     "  *  ",
//     " *** ",
//     "*****"
// ]
// And a tower with 6 floors looks like this:
//
// [
//     "     *     ",
//     "    ***    ",
//     "   *****   ",
//     "  *******  ",
//     " ********* ",
//     "***********"
// ]

function towerBuilder(nFloors) {
    let arrayFinal = []
    let spaceNum = 1
    let stars = 3
    for (let i = 0; i < nFloors; i++) {
        if (i === 0) {
            arrayFinal.push(`${" ".repeat(nFloors - spaceNum)}${"*".repeat(1)}${" ".repeat(nFloors - spaceNum)}`)
            spaceNum ++
        } else {
            arrayFinal.push(`${" ".repeat(nFloors - spaceNum)}${"*".repeat(stars)}${" ".repeat(nFloors - spaceNum)}`)
            stars += 2
            spaceNum ++
        }
    }
    return arrayFinal
}

console.log(towerBuilder(3))
