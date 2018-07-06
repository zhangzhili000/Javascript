let Node = function(val) {
    this.val = val;
    this.left = null;
    this.right = null;
};

let reflexTree = function(node) {
    if (node.left && node.right) {
        let tmp = new Node(node.left.val);
        tmp.left = node.left.left;
        tmp.right = node.left.right;
        node.left.val = node.right.val;
        node.left.left = node.right.left;
        node.left.right = node.right.right;
        node.right = tmp;
        if (node.left.left || node.left.right) {
            reflexTree(node.left);
        }
        if (node.right.left || node.right.right) {
            reflexTree(node.right);
        }
        return;
    }
    if(node.left && !node.right){
    	node.right = node.left;
    	node.left = null;
    	reflexTree(node.right);
    	return ;
    }
    if(!node.left && node.right){
    	node.left = node.right;
    	node.right = null;
    	reflexTree(node.left);
    	return ;
    }
    return ;

};

let initTree = function(arr) {
    if (arr.length == 0) {
        return null;
    }
    let val = arr.shift();
    let root = null;
    if (val == null) {
        return root;
    }
    root = new Node(val);
    root.left = initTree(arr);
    root.right = initTree(arr);
    return root;
};
let test = initTree([ 2, null, 4]);console.log("test:",test);
let root = initTree([0, 1, 3, 4,null, null, null,null, 2, null, 4]);
console.log("before change:",root);
reflexTree(root);
console.log("after change:",root);