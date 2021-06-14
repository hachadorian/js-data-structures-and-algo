class Graph {
    constructor(){
        this.adjacencyList = {};
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(vertex1, vertex2){
        if(this.adjacencyList[vertex1] && this.adjacencyList[vertex2]){
            this.adjacencyList[vertex1].push(vertex2);
            this.adjacencyList[vertex2].push(vertex1);
        }
    }

    removeEdge(vertex1, vertex2){
        if(!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) return;
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            v => v !== vertex2        
        );
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
            v => v !== vertex1        
        );
    }

    removeVertex(vertex){
        for(let key of this.adjacencyList[vertex]){
            this.removeEdge(vertex, key);
        }
        delete this.adjacencyList[vertex];    
    }

    dfsRecursive(vertex){
        var list = this.adjacencyList, results = [], visited = {};
        function traverse(vertex){
            if(!vertex) return;
            visited[vertex] = true;
            for(let key of list[vertex]){
                if(!visited[key]) traverse(key);
            }
        }
        traverse(vertex);
        return Object.keys(visited);
    }

    dfsIterative(vertex){
        var stack = [], visited = {};
        stack.push(vertex);
        while(stack.length){
            vertex = stack.pop();
            if(!visited[vertex]) visited[vertex] = true;
            for(let key of this.adjacencyList[vertex]){
                if(!visited[key]) stack.push(key);
            }
        }
        return Object.keys(visited);
    }

    bfs(vertex){
        var queue = [], visited = {};
        queue.push(vertex);
        visited[vertex] = true;
        while(queue.length){
            vertex = queue.shift();
            for(let key of this.adjacencyList[vertex]){
                if(!visited[key]){
                    queue.push(key);
                    visited[key] = true;
                }                    
            }
        }
        return Object.keys(visited);
    }
}

var graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");
graph.addEdge("D", "F");
graph.addEdge("E", "F");
graph.bfs("A");