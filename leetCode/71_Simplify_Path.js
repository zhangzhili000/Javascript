题目：
Given an absolute path for a file (Unix-style), simplify it.

For example,
path = "/home/", => "/home"
path = "/a/./b/../../c/", => "/c"

click to show corner cases.

Corner Cases:

Did you consider the case where path = "/../"?
In this case, you should return "/".
Another corner case is the path might contain multiple slashes '/' together, such as "/home//foo/".
In this case, you should ignore redundant slashes and return "/home/foo".



解决方案：（打败100%）
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    let arr = [""];
    path = path.split("/");
    if(path[path.length - 1] == ""){
        path.pop();    
    }
    
    for(let i = 0, len = path.length;i<len;i++){
        let text = path.shift();
        switch(text){
            case "..":
                if(arr.length > 1){
                    arr.pop();    
                }
                break;
            case ".":
                break;
            default:
                if(text != ""){
                    arr.push(text);    
                }
                
                break;
        }
    }
    if(arr.length < 2){
        return "/";
    }
    return arr.join("/");
};



Testcases:
"/home/"
"/a/./b/../../c/"
"/../"
"/home//foo/"
"/..."
