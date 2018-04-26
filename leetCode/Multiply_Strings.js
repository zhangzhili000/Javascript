问题：
Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.

Example 1:

Input: num1 = "2", num2 = "3"
Output: "6"
Example 2:

Input: num1 = "123", num2 = "456"
Output: "56088"
Note:

The length of both num1 and num2 is < 110.
Both num1 and num2 contain only digits 0-9.
Both num1 and num2 do not contain any leading zero, except the number 0 itself.
You must not use any built-in BigInteger library or convert the inputs to integer directly.




解决方案：（打败96.7%）
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    
    if(num1.charAt(0)==0 || num2.charAt(0)==0) return "0";
    let len1 = num1.length;
    let len2 = num2.length;
    let res = new Array(len1+len2).fill(0);
    num1 = num1.split("");
    num2 = num2.split("");
    for(let i=len1-1;i>=0;i--){
        let n1 = num1[i];
        for(let j=len2-1;j>=0;j--){
            let n2 = num2[j];
            let multi = n1*n2;
            let sum = multi + res[i+j+1];
            res[i+j+1] = sum%10;
            res[i+j] = res[i+j] + parseInt(sum/10);
        }
    }
    while(res[0]==0){
        res.shift();
    }
    let str = "";
    for(let i in res){
        str += res[i];
    } 
   
    return str;
};




Testcases:
"2"
"3"
"0"
"1"
"32"
"1"
"54235432542"
"542354325432"
"111"
"1111"
"100"
"100"