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
console.log(sortArray(array));//[ '0', '0', '1', '2', '2' ]
console.log(sortArray(array2));// [ '0', '0', '1' ]

