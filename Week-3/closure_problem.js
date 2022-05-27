function createStack() {
    let items = [];
    return {
        push(item){
            return items.push(item);
        },
        pop(){
            return items.pop();
        }
    }
}
const stack = createStack();
stack.push(20);
stack.push(50);
stack.pop();//50
stack.items // undefined