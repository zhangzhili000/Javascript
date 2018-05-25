��Ŀ��
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





��������������97.22%����ʹ�ö�̬�滮������ǰ�ڵ���Ϊ�µ�root��֮ǰ�Ľڵ㣨�����������ڵ��������Ϊn-1.����Ϊsubtree���ӵ����root���棬���磺��ǰ�ڵ���5����(1,3),(2,2),(3,1)���ַ���������ӣ���Ӧ1��һ�ַ�����2�����ַ�����3�����ַ���������5�ķ�������Ϊ��1*5+2*2+5*1 = 14����


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