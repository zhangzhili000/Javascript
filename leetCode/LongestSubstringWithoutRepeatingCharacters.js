/**
Given a string, find the length of the longest substring without repeating characters.

Examples:

Given "abcabcbb", the answer is "abc", which the length is 3.

Given "bbbbb", the answer is "b", with the length of 1.

Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var s=s.split('');
    var maxlen=0;
    var start = 0;
    for(var i=start+1;i<s.length;i++){
        for(var j=start;j<i;j++){
            if(s[i]==s[j]){
                if(j+1==i){
                    if(maxlen<(i-start)){
                        console.log("here");
                        maxlen = i-start;    
                    }
                    
                }else{
                    if(maxlen<(i-start)){
                maxlen = i-start;    
                }
                }
                start = j+1;
                j=i;
            }
        }
        if(i==s.length-1&& maxlen < (i-start+1)){
            console.log(start);
            maxlen = i-start+1;
        }
    }
    if(maxlen==0){
return s.length;}
    return maxlen;
};