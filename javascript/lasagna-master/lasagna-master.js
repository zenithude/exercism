/// <reference path="./global.d.ts" />

// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */


/**
 * Determine status's cooking
 * @param {number} timer
 * @returns {string} status 
 */
export function cookingStatus(timer) {
    let status = ''
    switch (timer) {
        case 0:
            status = 'Lasagna is done.';
            break;
        case null:
        case undefined:
        case NaN:
            status = 'You forgot to set the timer.';
            break;
        default:
            status = 'Not done, please wait.';
    }
    return status
}

/**
 * Determine totalPreparationTime of ingredients for lasagna
 * @param {string[]} layers
 * @param {number} timePerLayer by default 2 if no value passed
 * @returns {number}
 * 
 */
export function preparationTime(layers, timePerLayer=2) {
    return layers.length * timePerLayer
}

/** 
 * Determine the quantities of noodles and sauce you need to make wonderful lasagna
 * @param {string[]} layers
 * @returns {object}
*/
export function quantities(layers) {
    let quantityOfNoodleAndSauce = {
        noodles: 0,
        sauce: 0
    };
    for (let i = 0; i < layers.length; i++) {
        switch (layers[i]) {
            case 'noodles':
                quantityOfNoodleAndSauce.noodles += 50;
                break;
            case 'sauce':
                quantityOfNoodleAndSauce.sauce += 0.2;
                break;
            default:
                continue;
        }
    }
    return quantityOfNoodleAndSauce
}

/** 
 * Add ingredient secret from array of ingredients in second arrray of ingredients
 * @param {string[]} friendsList
 * @param {string[]} myList
*/
export function addSecretIngredient(friendsList, myList) {
    let ingredientSecret = friendsList[friendsList.length - 1]
    myList.push(ingredientSecret)
}

/** 
 * Determine quantities of ingredients you need to make a number of
 * portions. The recipe you receive is for 2 portions
 * @param {object} recipe
 * @param {number} portions
 * @returns {object} needRecipe
*/
export function scaleRecipe(recipe, portions) {
    let needRecipe = {};
    // loop to construct object for 1 portion 
    for (let key in recipe) {
        needRecipe[key] = recipe[key] / 2
    }
    if (portions === 1) {
        return needRecipe
    } else {
        for (let key in needRecipe) {
            needRecipe[key] = needRecipe[key] * portions
        }
        return needRecipe
    }

}