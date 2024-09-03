/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {

    let largest = candies[0]

    for (let i = 1; i < candies.length; i++) {
        if (candies[i] > largest) {
            largest = candies[i]
        }
    }

    let arr = []

    for (let i = 0; i < candies.length; i++) {
        if (candies[i] + extraCandies >= largest){
            arr.push(true)
        }else{
            arr.push(false)
        }
    }

    return arr

};