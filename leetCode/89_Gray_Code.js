题目：评分系统不大好，只能接受唯一的序列
The gray code is a binary numeral system where two successive values differ in only one bit.

Given a non-negative integer n representing the total number of bits in the code, print the sequence of gray code. A gray code sequence must begin with 0.

For example, given n = 2, return [0,1,3,2]. Its gray code sequence is:

00 - 0
01 - 1
11 - 3
10 - 2
Note:
For a given n, a gray code sequence is not uniquely defined.

For example, [0,2,3,1] is also a valid gray code sequence according to the above definition.

For now, the judge is able to judge based on one instance of gray code sequence. Sorry about that.




解决方案：（仅打败78.13%）
/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
    if(n == 0){
        return [0];
    }
    let res = [];
    addCode("",n);    
    function addCode(tmp){
        if(tmp.length == n){
            res.push(parseInt(tmp,2));        
            return ;
        }
        let counter = 0;
        counter = tmp.split("1").length -1;
        if(counter%2 != 0){
            for(let i = 1;i>=0;i--){
                addCode(tmp + i);
            }        
        }else{
            for(let i = 0;i<2;i++){
                addCode(tmp + i);
            }   
        }    
    }
    return res;
};




Testcases:
2
3
4
