const sortArray = (arr) => {
    let objHsh = {};
    let count = 1;
    let sorted_array = []
    arr.forEach(el => {
        console.log(`${el}`)
        if(objHsh.hasOwnProperty(el)){
            let value = objHsh[el]
            objHsh[el] = value + 1;
        }else{
            objHsh[el] = count
        }
    })
    for(const [k,v] of Object.entries(objHsh)){
        if(v > 0){
           repeatTimes(k, v, sorted_array)
        }else{
            sorted_array.push(k)
        }
    }
    return sorted_array;
}
const repeatTimes = (pushKey, repeatValue, arr) => {
    for(let i = 0; i < repeatValue; i++){
        arr.push(pushKey)
    }
}
const array = [0, 2, 1, 2, 0];
const array2 = [0, 1, 0]
//console.log(sortArray(array));//[ '0', '0', '1', '2', '2' ]
//console.log(sortArray(array2));// [ '0', '0', '1' ]

//Another method
//As we know it's an 0's, 1's & 2's array
//we can use that information directly
const anotherSortArrayfunc = (arra) => {
    let arr_0 = [];
    let arr_1 = [];
    let arr_2 = [];
    arra.forEach(el => {
        if(el == 0){
            arr_0.push(el);
        }else if(el == 1){
            arr_1.push(el);
        }else{
            arr_2.push(el);
        }
    })
    let new_arr = arr_0.concat(arr_1).concat(arr_2);
    return new_arr;
}
console.log(anotherSortArrayfunc(array2))

