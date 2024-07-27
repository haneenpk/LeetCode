/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let MCount = 0
    for(let i=0; i<nums.length; i++){
        let str = nums[i].toString()
        // console.log(nums[i])
        let count = 0
        for(let j=1; j<=str.length; j++){
            count++
        }
        console.log(count)
        if(count !== 0 && count % 2 === 0){
            MCount++
        }
    }

    return MCount
};