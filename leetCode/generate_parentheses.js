题目：
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

For example, given n = 3, a solution set is:

[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]


解决方案：
1:运行时间打败96.64%的方案：
/**
 * @param {number} n
 * @return {string[]}
 */
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let res = "";
    let resArr = [];
    let open = 0;
    let close = 0;
    gene(resArr,res,n,open,close);
        
    return resArr;
};
var gene = function(resArr,res,n,open,close){
    if(res.length === 2*n){
        resArr.push(res); 
        return;
    }
    if(open < n){
        gene(resArr,res+"(",n,open+1,close);
    }
    if(close < open){
        gene(resArr,res + ")",n,open,close+1);    
    }
}


2：运行时间打败100%的方案：
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let res = "";
    let resArr = [];
    let openMax = n;
    let closeMax = n;
    gene(resArr,res,openMax,closeMax);
        
    return resArr;
};
var gene = function(resArr,res,openMax,closeMax){
    if(openMax === 0 && closeMax === 0){
        resArr.push(res); 
        return;
    }
    if(openMax > 0 ){
        gene(resArr,res+"(",openMax - 1,closeMax);
    }
    if(closeMax > openMax){
        gene(resArr,res + ")",openMax,closeMax - 1);    
    }
}


Testcases:
3
0


