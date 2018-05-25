题目：
Given n, how many structurally unique BST's (binary search trees) that store values 1 ... n?

Example:

Input: 3
Output: 5
Explanation:
Given n = 3, there are a total of 5 unique BST's:

   1         3     3      2      1
    \       /     /      / \      \
     3     2     1      1   3      2
    /     /       \                 \
   2     1         2                 3





解决方案：（打败97.22%）（使用动态规划，将当前节点作为新的root，之前的节点（满足条件：节点数量相加为n-1.）作为subtree连接到这个root下面，例如：当前节点是5，有(1,3),(2,2),(3,1)四种方案可以添加，对应1有一种方案，2有两种方案，3有五种方案，所以5的方案数量为：1*5+2*2+5*1 = 14。）


/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    let res = [];
    res[0] = 1;
    res[1] = 1;
    for(let i = 2;i<=n;i++){
        res[i] = 0;
        for(let j = 0;j<i;j++){
            res[i] += res[j]*res[i-j-1];
        }
    }
    return res[n];
}




Testcases:
3
6
1
0