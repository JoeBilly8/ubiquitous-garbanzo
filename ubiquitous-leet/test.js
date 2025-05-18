
var findDisappearedNumbers = function(nums) {
    let fullNums = [...Array(nums.length).keys()].map(i => i + 1);
    let missingNums = [];

    // Compare fullnums with nums to check for missing numbers
    for (let i = 0; i < nums.length; i++) {
        if (!(nums.includes(fullNums[i]))) {
            missingNums.push(fullNums[i])
        }
    }

    return missingNums;
};
// Test cases
console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1])); // Output: [5,6]