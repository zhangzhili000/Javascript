/**
Given a digit string, return all possible letter combinations that the number could represent.

A mapping of digit to letters (just like on the telephone buttons) is given below.
A picture of phone keyboard with 9 button.


Input:Digit string "23"
Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
**/

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if(digits.includes(1) || digits.includes(0) || digits == ""){
        return [];
    }
    
    var nums = {
    2:["a","b","c"],
    3:["d","e","f"],
    4:["g","h","i"],
    5:["j","k","l"],
    6:["m","n","o"],
    7:["p","q","r","s"],
    8:["t","u","v"],
    9:["w","x","y","z"]
    };
    var output = nums[digits[0]];
    console.log(output);
    for(var i = 1;i<digits.length;i++){
        output = crossJoin(output,nums[digits[i]]);
    }
    return output;
};
var crossJoin = function(arr1,arr2){
        var output = [];
        for(var i in arr1){
            for(var j in arr2){
                output.push(arr1[i]+arr2[j]);
            }
        }
    return output;
};




Testcase:
"123"
"23"
"203"
"234"
""