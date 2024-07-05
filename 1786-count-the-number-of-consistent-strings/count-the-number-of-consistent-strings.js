/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    let count = 0;
    for (let word of words) {
        let bool = true;
        for (let char of word) {
            if (!allowed.includes(char)) {
                bool = false;
                break;
            }
        }
        if (bool) count++;
    }
    return count;
};