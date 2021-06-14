class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(vertex1,vertex2, weight){
        this.adjacencyList[vertex1].push({node:vertex2,weight});
        this.adjacencyList[vertex2].push({node:vertex1, weight});
    }
    Dijkstra(start, finish){
        var costs = {}, prev = {}, visited = [], queue = new PriorityQueue(), route = [];
        costs[start] = {node: start, cost: 0};
        prev[start] = start;
        queue.enqueue(start, 0);
        for(let key in this.adjacencyList){
            if(key !== start) costs[key] = {node: key, cost: Infinity};
        }
        while(queue.values.length){
            var current = queue.dequeue();
            if(current.val === finish){
                current = current.val;
                while(current !== start){
                    route.unshift(current);
                    current = prev[current];
                }
                route.unshift(start);
                break;
            }
            for(let neighbor of this.adjacencyList[current.val]){
                var path = neighbor.weight + costs[current.val].cost;
                if(path < costs[neighbor.node].cost){
                    costs[neighbor.node].cost = path;
                    prev[neighbor.node] = current.val;
                    queue.enqueue(neighbor.node, path);
                }  
            }
        }
        return route;
    }
}

class PriorityQueue {
    constructor(){
        this.values = [];
    }
    enqueue(val, priority){
        let newNode = new Node(val, priority);
        this.values.push(newNode);
        this.bubbleUp();
    }
    bubbleUp(){
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while(idx > 0){
            let parentIdx = Math.floor((idx - 1)/2);
            let parent = this.values[parentIdx];
            if(element.priority >= parent.priority) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }
    dequeue(){
        const min = this.values[0];
        const end = this.values.pop();
        if(this.values.length > 0){
            this.values[0] = end;
            this.sinkDown();
        }
        return min;
    }
    sinkDown(){
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        while(true){
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild,rightChild;
            let swap = null;

            if(leftChildIdx < length){
                leftChild = this.values[leftChildIdx];
                if(leftChild.priority < element.priority) {
                    swap = leftChildIdx;
                }
            }
            if(rightChildIdx < length){
                rightChild = this.values[rightChildIdx];
                if(
                    (swap === null && rightChild.priority < element.priority) || 
                    (swap !== null && rightChild.priority < leftChild.priority)
                ) {
                   swap = rightChildIdx;
                }
            }
            if(swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }
}

class Node {
    constructor(val, priority){
        this.val = val;
        this.priority = priority;
    }
}

var graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addEdge("A", "B", 2);
graph.addEdge("B", "C", 3);
graph.addEdge("B", "E", 2);
graph.addEdge("C", "D", 1);
graph.addEdge("E", "C", 2);
console.log(graph.Dijkstra("A", "D"))