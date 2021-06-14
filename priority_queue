class Node {
    constructor(val, priority){
        this.val = val;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor(){
        this.vals = [];
    }

    enqueue(val, priority){
        var node = new Node(val, priority);
        this.vals.push(node)
        var index = this.vals.length - 1;
        while(true){
            var parent = Math.floor((index - 1) / 2);
            if(!this.vals[parent]) return;
            if(this.vals[parent].priority < this.vals[index].priority) return;
            swap(this.vals, parent, index);            
            index = parent;
        }
    }

    dequeue(){
        if(!this.vals.length) return undefined;
        if(this.vals.length - 1 < 1) return undefined;
        swap(this.vals, 0, this.vals.length - 1);
        var max = this.vals.pop();
        var parent = 0;
        while(true){
            var left = 2 * parent + 1; 
            var right = 2 * parent + 2;
            if(left > this.vals.length || right > this.vals.length - 1) break;
            if(this.vals[parent].priority < this.vals[left].priority && this.vals[parent].priority < this.vals[right].priority) break;
            var maxPriority = (this.vals[left].priority < this.vals[right].priority) ? left : right;
            swap(this.vals, parent, maxPriority);
            parent = maxPriority;
        }
        return max;
    }
}

function swap(arr, idx1, idx2){
    var temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}

var list = new PriorityQueue();
list.enqueue("errands", 3);
list.enqueue("daycare", 2);
list.enqueue("bills", 1);
list.enqueue("shopping", 4);
list.dequeue();
list.dequeue();
list.dequeue();
console.log(list);