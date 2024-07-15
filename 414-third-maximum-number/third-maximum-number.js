/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    if(nums.length === 1) return nums[0]
    let set = [...new Set(nums)].sort((a,b) => a-b)

    if(set.length === 1){
        return set[0]
    }else if(set.length === 2){
        return set[set.length - 1]
    }else{
        console.log(set)
        return set[set.length - 3]
    }
};