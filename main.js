// 5kyu level
// https://www.codewars.com/kata/525c65e51bf619685c000059/train/javascript

// Description
// # Pete, the baker

// // Task
// Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not good in maths. Can you help him to find out, how many cakes he could bake considering his recipes?
//
//     Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer). For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.
//
// Examples:
//
// // must return 2
//     cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200});
// // must return 0
// cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000});

function cakes(recipe, available) {
    let recipeUnits = Object.keys(recipe)
    let availableUnits = Object.keys(available)
    let indicator = 1
    for (let i = 0; i < recipeUnits.length; i++) {
        if (availableUnits.indexOf(recipeUnits[i]) < 0) {
            indicator = 0
            break
        }
    }
    if (indicator === 0) return 0

    let recipeCount = []
    for (let i = 0; i < recipeUnits.length; i++) {
        let temp = recipeUnits[i]
        recipeCount.push((Math.floor(available[`${temp}`] / recipe[`${temp}`]) < 0) ? 0 : Math.floor(available[`${temp}`] / recipe[`${temp}`]))
    }
    return Math.min(...recipeCount)
}

console.log(cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, milk: 200, eggs: 1}))