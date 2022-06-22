class Node {
    constructor(value){
        this.head = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        const node = new Node(value);
        this.head = node;
        this.tail = node;
        this.length = 1;
    }
    push(value){
        const node = new Node(value);
        if(this.length === 0){
            this.head = node;
            this.tail = node;
        }else{
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
        return this
    }
    createLoop(){
        this.tail.next = this.head
        return this
    }
    detectLoop(){
        if(this.tail.next !== null){
            return 'Loop Detected'
        }else{
            return 'No loop'
        }
    }
    
}

const linkedList = new LinkedList(1);
linkedList.push(2);
linkedList.push(3);
linkedList.push(4);
linkedList.push(5);
linkedList.push(6);
linkedList.push(7);
linkedList.push(8);
//console.log(linkedList.createLoop());
console.log(linkedList.detectLoop());