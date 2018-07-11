题目：
Compare two version numbers version1 and version2.
If version1 > version2 return 1; if version1 < version2 return -1;otherwise return 0.

You may assume that the version strings are non-empty and contain only digits and the . character.
The . character does not represent a decimal point and is used to separate number sequences.
For instance, 2.5 is not "two and a half" or "half way to version three", it is the fifth second-level revision of the second first-level revision.

Example 1:

Input: version1 = "0.1", version2 = "1.1"
Output: -1
Example 2:

Input: version1 = "1.0.1", version2 = "1"
Output: 1
Example 3:

Input: version1 = "7.5.2.4", version2 = "7.5.3"
Output: -1




解决方案：（打败100%）
/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    version1 = version1.split(".");
    version2 = version2.split(".");
    let len1 = version1.length;
    let len2 = version2.length
    let maxLen = len1>len2?len1:len2;
    for(let i = 0;i < maxLen;i++){
        if(!version1[i]){
            let sum2 = 0;
            for(let j = i;j<version2.length;j++){
                sum2 += parseInt(version2[j]);
            }
            if(sum2 == 0){
                return 0;
            }
            return -1;
        }
        if(!version2[i]){
            let sum1 = 0;
            for(let j = i;j<version1.length;j++){
                sum1 += parseInt(version1[j]);
            }
            if(sum1 == 0){
                return 0;
            }
            return 1;
        }
        let v1 = parseInt(version1[i]);
        let v2 = parseInt(version2[i]);
        if(v1>v2){
            return 1;
        }
        if(v1<v2){
            return -1;
        }
    }
    return 0;
};



Testcases:
"0.1"
"1.1"
"1.0.1"
"1"
"7.5.2.4"
"7.5.3"
"01"
"1"
"1.0"
"1"
"1.0.1"
"1"