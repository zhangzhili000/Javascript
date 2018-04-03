/**
Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

Example:

Input: "babad"

Output: "bab"

Note: "aba" is also a valid answer.
 

Example:

Input: "cbbd"

Output: "bb"
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let maxString = [];
    s = s.split("");
    
    for(let i in s){
        if(i>0 && s[i-1] == s[i]){
            
        }else{
            let palindrom = extendPalindrom(s,i);
        if(maxString.length<palindrom.length){
            maxString = palindrom;
        }
        }
    }
    var output = "";
    for(let i in maxString){
        output += maxString[i];
    }
    return output;

};
var extendPalindrom = function(s,i){
    let j=i-1;
    let k=parseInt(i)+1;
    let palindrom = [s[i]];
    if(s.length <2){
        return s;
    }
    while(s[j]==s[i]){
        palindrom.unshift(s[j]);
        j--;
    }
    while(s[k]==s[i]){
        palindrom.push(s[k]);
        k++;
    }
    while(j>=0 && k<s.length){

        if(s[j]==s[k]){
            palindrom.unshift(s[j]);
            palindrom.push(s[k]);
            j--;
            k++;
        }else{
            return palindrom;
        }
    }
    return palindrom;
}    