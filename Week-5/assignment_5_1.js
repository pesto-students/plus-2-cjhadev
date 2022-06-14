const doTask1 = () => {
    console.log("Task 1 completed")
}
const doTask2 = () => {
    console.log("Task 2 completed")
}
const doTask3 = () => {
    console.log("Task 3 completed")
}
//Generator function
function* genFunc(){
    yield doTask1()
    yield doTask2()
    yield doTask3()
}

const callGen = genFunc();
callGen.next();
callGen.next();
callGen.next();
callGen.next();

//Async/Await 
async function asyncFunction() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve(doTask1()), 1000)
    });
    const result = await promise.then(() => doTask2()).then(() => doTask3()); 
    // wait till the promise resolves (*)
    console.log(result); // "i am resolved!"
}
asyncFunction();