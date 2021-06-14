class Node {
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        var node = new Node(val);
        if(!this.head){
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.length++;
        return this;
    }

    pop(){
        if(!this.head) return undefined;
        var tail = this.tail;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else {
            this.tail = tail.prev;
            this.tail.next = null;
            tail.prev = null;   
        }
        this.length--;
        return tail;
    }

    shift(){
        if(!this.head) return undefined;
        var head = this.head;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else {
            this.head = head.next;
            this.head.prev = null;
            head.next = null;
        }
        this.length--;
        return head;        
    }

    unshift(val){
        var node = new Node(val);
        if(!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }
        this.length++;
        return this;
    }

    get(index){
        if(index < 0 || index >= this.length) return undefined
        var current, counter;
        if(index <= this.length / 2){
            current = this.head;
            counter = 0;
            while(counter !== index){        
                current = current.next;
                counter++;
            }
        } else {
            current = this.tail;
            counter = this.length - 1;
            while(counter !== index){
                current = current.prev;
                counter--;
            }
        }
        return current;
    }

    set(index, val){
        var current = this.get(index);
        if(!current) return false;
        current.val = val;
        return true;
    }

    insert(index, val){
        if(index < 0 || index > this.length) return false;
        if(index === 0) return !!this.unshift(val);
        if(index === this.length) return !!this.push(val);
        var current = this.get(index - 1);
        if(!current) return false;
        var node = new Node(val);
        node.next = current.next;
        current.next.prev = node;
        node.prev = current;
        current.next = node;
        this.length++;
        return true;
    }

    remove(index){
        if(index < 0 || index > this.length) return false;
        if(index === 0) return !!this.shift();
        if(index === this.length - 1) return !!this.pop();
        var current = this.get(index);
        current.prev.next = current.next;
        current.next.prev = current.prev;
        current.next = null;
        current.prev = null;
        this.length--;
        return current;
    }

    reverse(){
        var node = this.head;
        this.head = this.tail;
        this.tail = node;
        while(node){
            var next = node.next;
            var prev = node.prev;
            node.next = prev;
            node.prev = next;
            node = next;
        }
        return this;
    }
}

var list = new DoublyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.push(6);
list.push(7);
list.reverse();
console.log(list);