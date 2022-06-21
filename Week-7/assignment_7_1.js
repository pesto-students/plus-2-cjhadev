// Given a linked list of N nodes. The task is to reverse this list
//Example 1:Input:LinkedList: 1->2->3->4->5->6Output: 6 5 4 3 2 1
//Explanation: After reversing the list,elements are 6->5->4->3->2->1
//Example 2:Input:LinkedList: 2->7->8->9->10Output: 10 9 8 7 2
//Explanation: After reversing the list,elements are 10->9->8->7->2

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

    reverse(){
        if(this.length === 0) return undefined;
        if(this.length === 0) return 'Only one element in linkedList';
        let temp = this.head;
        this.head = this.tail;
        this.tail = temp;
        let next = temp.next;
        let prev = null;
        for(let i = 0; i < this.length; i++){
            next = temp.next;
            temp.next = prev;
            prev = temp;
            temp = next;
        }
        return this
    }
}
const linkedList = new LinkedList(1);
linkedList.push(2);
linkedList.push(3);
linkedList.push(4);
linkedList.push(5);
linkedList.push(6);
console.log(linkedList);
//LinkedList {
//     head: Node { head: 1, next: Node { head: 2, next: [Node] } },
//     tail: Node { head: 6, next: null },
//     length: 6
//   }
console.log(linkedList.reverse());
// LinkedList {
//     head: Node { head: 6, next: Node { head: 5, next: [Node] } },
//     tail: Node { head: 1, next: null },
//     length: 6
//   }