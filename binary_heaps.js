class MaxBinaryHeap {
    constructor(){
        this.vals = [];
    }

    insert(val){
        this.vals.push(val)
        var index = this.vals.length - 1;
        while(true){
            var parent = Math.floor((index - 1) / 2);
            if(!this.vals[parent]) return;
            if(this.vals[parent] > this.vals[index]) return;
            swap(this.vals, parent, index);            
            index = parent;
        }
    }

    extractMax(){
        if(!this.vals.length) return undefined;
        if(this.vals.length - 1 < 1) return undefined;
        swap(this.vals, 0, this.vals.length - 1);
        var max = this.vals.pop();
        var parent = 0;
        while(true){
            var left = 2 * parent + 1; 
            var right = 2 * parent + 2;
            if(left > this.vals.length || right > this.vals.length - 1) break;
            if(this.vals[parent] > this.vals[left] && this.vals[parent] > this.vals[right]) break;
            var maxChild = (this.vals[left] > this.vals[right]) ? left : right;
            swap(this.vals, parent, maxChild);
            parent = maxChild;
        }
        return max;
    }
}

function swap(arr, idx1, idx2){
    var temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}

var list = new MaxBinaryHeap();
list.insert(55);
list.extractMax();
