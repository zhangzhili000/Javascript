题目：
Given a string containing only digits, restore it by returning all possible valid IP address combinations.

Example:

Input: "25525511135"
Output: ["255.255.11.135", "255.255.111.35"]



解决方案：
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    let len = s.length;
    if(len > 12 || len < 4){
        return [];
    }
    let res = [];
    let str = "";
    function getIP(str,dot, subs){
        if(dot > 4){
            return ;
        }
        if(str.length === len + 4){
            res.push(str.substring(0,str.length-1));
            return ;
        }
        for(let i = 1;i<=3;i++){
            if(i>subs.length){
                return ;
            }
            let substr = subs.substring(0,i);
            if(substr - 0 <= 255 && substr.length === String(substr - 0).length ){
                getIP(str+substr + ".",dot+1,subs.substring(i));
            }
        }
        return ;
    }
    getIP("",0,s);
    return res;
};




Testcases:
"25525511135"
"0000"
"010010"