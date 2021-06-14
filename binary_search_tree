class Node {
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }

    insert(val){
        var node = new Node(val);
        if(!this.root){
            this.root = node;
            return this;
        }
        var current = this.root;
        while(true){
            if(val === current.val) return undefined;
            if(val > current.val){
                if(!current.right){
                    current.right = node;
                    return this;
                }
                current = current.right;
            } else {
                if(!current.left){
                    current.left = node;
                    return this;
                }
                current = current.left;
            }
        }
    }

    find(val){
        if(!this.root) return false;
        var current = this.root;
        if(val === current.val) return current;
        while(current){
            if(val > current.val){
                if(val === current.val) return current;
                current = current.right;
            } else {
                if(val === current.val) return current;
                current = current.left;
            }
        }
        return false;
    }

    bfs(){
        var queue = [], data = [], node = this.root;
        queue.push(node);
        while(queue.length){
            node = queue.shift();
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
            data.push(node);
        }
        return data;
    }

    dfsPreOrder(){
        var data = [];
        function traverse(node){
            data.push(node);
            if(node.left) traverse(node.left);               
            if(node.right) traverse(node.right);                
        }
        traverse(this.root);
        return data;
    }

    dfsPostOrder(){
        var data = [];
        function traverse(node){
            if(node.left) traverse(node.left);               
            if(node.right) traverse(node.right);
            data.push(node);                
        }
        traverse(this.root);
        return data;
    }

    dfsInOrder(){
        var data = [];
        function traverse(node){
            if(node.left) traverse(node.left);
            data.push(node);                               
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }

    maxDepth(node){
        console.log(node);
        if(!node) return 0;
        var left = this.maxDepth(node.left);
        var right = this.maxDepth(node.right);
        if(left > right) return left += 1;
        return right += 1;
    }
}

var tree = new BinarySearchTree();
tree.insert(-10);
tree.insert(-3);
tree.insert(0);
tree.insert(5);
tree.insert(9);
console.log(tree);