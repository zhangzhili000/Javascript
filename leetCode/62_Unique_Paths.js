��Ŀ��
A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

How many possible unique paths are there?


�������һ���޷�ͨ�����в��ԣ���m��n��ֵ����20ʱ�����г�ʱ��
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    //����Ϊ1������Ϊ0��һ��m�У�������m-1������0��n�У���n-1������1����ò��ظ�������
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



����������������91.13%��������ϵķ�����������ѧ������������������һ����m-1+n-1=m+n-2�����������һ������µĲ���ȫ�����꣬ʣ�µ�ֻ��һ�����з�ʽ�����裬m<n��һ����C^(m-1)_(m+n-2)��·����
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




Testcases:
3
2
20
10