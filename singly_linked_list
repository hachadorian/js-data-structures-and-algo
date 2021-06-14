class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(){
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    push(val){
        var node = new Node(val);
        if(!this.head){
            this.head = node;
            this.tail = this.head;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
    }

    pop(){
        if(!this.head) return undefined;
        var current = this.head;
        while(current.next){
            var newTail = current;
            current = current.next;
        }
        newTail.next = null;
        this.tail = newTail;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    shift(){
        if(!this.head) return undefined;
        var current = this.head;
        this.head = current.next;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    unshift(val){
        var node = new Node(val);
        if(!this.head){
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.length++;
        return this;
    }

    get(index){
        if(index >= this.length || index < 0) return undefined;
        var counter = 0;
        var current = this.head;
        while(counter !== index){
            current = current.next;
            counter++;
        }
        return current;
    }

    set(index, val){
        var current  = this.get(index);
        if(!current) return false;
        current.val = val;
        return true;
    }

    insert(index, val){
        if(index >= this.length || index < 0) return undefined;
        if(index === this.length) return !!this.push(val)
        if(index === 0)return !!this.unshift(val)
        var prev = this.get(index - 1);
        var node = new Node(val);
        node.next = prev.next;
        prev.next = node;
        this.length++;
        return true; 
    }

    remove(index){
        if(index >= this.length || index < 0) return undefined;
        if(index === this.length - 1) return !!this.pop();
        if(index === 0) return !!this.shift();
        var prev = this.get(index - 1);
        prev.next = prev.next.next;
        this.length--;
    }

    reverse(){
        var node = this.head;
        this.head = this.tail;
        this.tail = node;
        var next;
        var prev = null;
        while(node){
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }
}

var list = new SinglyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.reverse();