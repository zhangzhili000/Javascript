题目：
Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.

解决方案：
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s.length === 0){
        return true;
    }
    let arr = [];
    let i = 1;
    arr.push(s.charAt(0));
    while(i<s.length){
        if((arr[arr.length-1] === "(" && s.charAt(i) === ")")||
          (arr[arr.length-1] === "{" && s.charAt(i) === "}")||
           (arr[arr.length-1] === "[" && s.charAt(i) === "]")
          ){
            arr.pop();
        }else{
            arr.push(s.charAt(i));
        }
        i++;
    }
    if(arr.length === 0){
        return true;
    }
    return false;
};



Testcase:
"()"
""
"({)"
"("


注：Your runtime beats 94.88 % of javascript submissions.