题目：
Given a 2D board and a word, find if the word exists in the grid.

The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.

Example:

board =
[
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]

Given word = "ABCCED", return true.
Given word = "SEE", return true.
Given word = "ABCB", return false.



原始解决方案：（打败70.92%）
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    word = word.split("");
    for(let i = 0;i<board.length;i++){
        for(let j = 0;j<board[i].length;j++){
            if(board[i][j] == word[0]){
                let tmpb = board[i][j];
                board[i][j] = "";
                let tmp = word.shift();
                if(find(board,word,i,j)){
                    return true;
                }
                word.unshift(tmp);
                board[i][j] = tmpb;
            }
        }
    }
    return false;

};
var find = function(board,word,i,j){
    if(word.length == 0){
        return true;
    }
    let tmpi = i;
    let tmpj = j;
    if(tmpi > 0){
        i = tmpi -1;
    }
    for(;i<board.length && i<=tmpi+1;i++){
        if(board[i][j] == word[0]){
            let tmpb = board[i][j];
            board[i][j] = "";
            let tmp = word.shift();
            if(find(board,word,i,j)){
                return true;
            }
            word.unshift(tmp);
            board[i][j] = tmpb;
        }
    }
    i = tmpi;
    j = tmpj;
    if(tmpj>0){
        j = tmpj-1;
    }
    for(;j<board[i].length && j<=tmpj+1;j++){
        if(board[i][j] == word[0]){
            let tmpb = board[i][j];
            board[i][j] = "";
            let tmp = word.shift();
            if(find(board,word,i,j)){
                return true;
            }
            word.unshift(tmp);
            board[i][j] = tmpb;
        }
    }
    return false;
}


改进方案：（打败100%）
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    word = word.split("");
    let row = board.length;
    let col = board[0].length;
    
    let wl = word.length;
    for(let i = 0;i<board.length;i++){
        for(let j = 0;j<board[i].length;j++){
            if(board[i][j] == word[0]){
                let tmpb = board[i][j];
                if(find(i, j, board,word,0)){
                    return true;
                }
            }
        }
    }
    function find(i,j,board,word,num){
        if(num == wl){
            return true;
        }
        if(i<0 || i >= row || j<0 || j>=col){
            return false;
        }
        if(board[i][j] != word[num]){
            return false;
        }
        let tmpb = board[i][j];
        board[i][j] = "";
        let res = find(i+1,j, board, word, num + 1) ||
         find(i-1,j, board, word, num + 1) ||
         find(i,j-1, board, word, num + 1) ||
         find(i,j+1, board, word, num + 1);
        board[i][j] = tmpb;
        return res;
    };
    return false;

};




Testcases:
[["a","b"],["c","d"]]
"cdba"
[["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]
"ABCCED"
[["A","B","C","E"],["S","F","C","S"],["A","D","E","E"],["S","F","C","S"],["A","D","E","E"],["S","F","C","S"],["A","B","C","E"],["S","F","C","S"],["A","B","C","E"],["S","F","C","S"],["A","D","E","E"],["S","F","C","S"],["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]
"ABCCEDS"