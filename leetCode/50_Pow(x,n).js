问题：
Implement pow(x, n), which calculates x raised to the power n (xn).

Example 1:

Input: 2.00000, 10
Output: 1024.00000
Example 2:

Input: 2.10000, 3
Output: 9.26100
Example 3:

Input: 2.00000, -2
Output: 0.25000
Explanation: 2-2 = 1/22 = 1/4 = 0.25
Note:

-100.0 < x < 100.0
n is a 32-bit signed integer, within the range [−2^31, 2^31 − 1]


解决方案：
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if(n==0)return 1;
    if(n<0){
        x = 1/x;
    }
    x=iter(x,n,1,x);
    return x;
};
var iter = function(x,n,mal,start){
    if(n>0){
        if(n==1){
          return x;
        }
        if(n>mal){
            x=iter(x*x,n-mal,mal*2,start);
        }else{
            x = x*iter(start,n-1,1,start);    
        }
        
        
    }else if(n<0){
        if(n==-1){
          return x;
        }
        if(Math.abs(n)>mal){
            x=iter(x*x,n+mal,mal*2,start);    
        }else{
            x=x*iter(start,n+1,1,start);
        }
        
    }
    return x;
}



Testcases:
2.00000
10
2.14390
100
-127819
100
-0.54
-10
1.00001
123456
1.00000
-2147483648
2.10000
3
2.10000
1
34.00515
-3