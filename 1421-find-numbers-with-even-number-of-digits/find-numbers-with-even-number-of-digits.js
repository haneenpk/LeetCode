/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let MCount = 0
    for(let i=0; i<nums.length; i++){
        let str = nums[i].toString()
        if(str.length % 2 === 0){
            MCount++
        }
    }

    return MCount
};