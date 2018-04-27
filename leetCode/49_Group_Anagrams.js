问题：
Given an array of strings, group anagrams together.

Example:

Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
Output:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
Note:

All inputs will be in lowercase.
The order of your output does not matter.

解决方案：（打败99.13）注意大量数据的时候的运行时间。使用map或者自定义hash的方式。

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const res = new Map();
    let strscopy = strs.slice();

    for(let i in strs){
        let str = strscopy[i].split("");
        str = str.sort();
        str = str.join();
        if(res.has(str)){
            res.set(str,[...res.get(str),strs[i]]);
        }
        else{
            res.set(str,[strs[i]]);
        }
    }
    let output = [];
    for(let i of res.values()){
        output.push(i);
    }
    return output;
};




Testcases:
["eat","tea","tan","ate","nat","bat"]