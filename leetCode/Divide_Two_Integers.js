题目：
Given two integers dividend and divisor, divide two integers without using multiplication, division and mod operator.

Return the quotient after dividing dividend by divisor.

The integer division should truncate toward zero.

Example 1:

Input: dividend = 10, divisor = 3
Output: 3
Example 2:

Input: dividend = 7, divisor = -3
Output: -2
Note:

Both dividend and divisor will be 32-bit signed integers.
The divisor will never be 0.
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−2^31,  2^31 − 1]. For the purpose of this problem, assume that your function returns 2^31 − 1 when the division result overflows.



解决方案：（注意上面所提到的条件：数值的范围，不能用乘、除和模运算直接操作两个数。）
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    if(Math.abs(dividend) < Math.abs(divisor)){
        return 0;
    }
    if(divisor == 0){
        return 0;
    }
    let i = 0;
    let s1 = 1;
    let s2 = 1;
    if(divisor<0){
        divisor = 0 - divisor;
        s1 = -1;
    }
    if(dividend<0){
        dividend = 0 - dividend;
        s2 = -1;
    }
    let newDiv = divisor;
    let j = 1;
    while(dividend >= divisor){
        if(dividend >= newDiv + newDiv){
            newDiv = newDiv + newDiv;
            j = j + j;
            dividend = dividend - newDiv;
            i = i + j;
        }else if(newDiv>=divisor){
            j = j/2;
            newDiv = newDiv/2; 
        }
    }
    i = i*s1*s2;
    if(i >= 2147483648){
        if(i>0){
            i = 2147483647 ;
        }
        if(i<0){
            i = -2147483648;
        }
    }
    return i;
};



Testcases:
10
3
-10
3
10
-3
1
1
-2147483648
-1
2147483648
-1
-2147483648
2