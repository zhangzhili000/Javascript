题目：
A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

How many possible unique paths are there?


解决方案一：无法通过所有测试，当m，n的值超过20时，运行超时。
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    //向下为1，向右为0，一共m列，所以有m-1个向右0，n行，有n-1个向下1，获得不重复的排序
    let res = [0];
    add(res,m-1,n-1);
    return res[0];
};

var add = function(res,zero,one){
    if(zero == 0 || one == 0){
        res[0]+=1;
        return ;
    }
    if(zero > 0){
        add(res,zero-1,one);
    }
    if(one>0){
        add(res,zero,one-1);
    }
    return ;
}



解决方案二：（打败91.13%）排列组合的方法，利用数学概念解决。如上所述，一共有m-1+n-1=m+n-2步，而当向右或者向下的步数全部走完，剩下的只有一种排列方式。假设，m<n。一共有C^(m-1)_(m+n-2)种路径。
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    if(m>n){
        let tmp = m;
        m = n;
        n = tmp;
    }
    let res = 0;
    let sumTop = 1;
    let sumBot = 1;
    for(let i = m+n-2;i>n-1;i--){
        sumTop *= i;
    }
    for(let i = m-1;i>0;i--){
        sumBot *= i;
    }console.log(sumTop,sumBot);
    res = sumTop/sumBot;
    return res;
};



解决方案三：动态规划（打败91.13%）

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let res = [];
    for(let i = 0;i<m;i++){
        res[i] = [];
        for(let j = 0;j<n;j++){
            if(i==0 && j==0){
                res[i][j] = 1;
            }else if(i==0){
                res[i][j] = res[i][j-1];
            }else if(j==0){
                res[i][j] = res[i-1][j];
            }else{
                res[i][j] = res[i-1][j] + res[i][j-1];
            }
        }
    }
    return res[m-1][n-1];
};





Testcases:
3
2
20
10