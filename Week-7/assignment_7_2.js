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
    rotateNTimes(n){
        for(let i = 0; i < n; i++){
          let temp = this.head
          this.tail.next = temp;
          this.head = temp.next
          this.tail = temp;
          this.tail.next = null;
        }
        return this;

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
console.log(linkedList);//1,2,3,4,5,6,7,8
console.log(linkedList.rotateNTimes(3));//5,6,7,8,1,2,3,4