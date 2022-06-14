function hasDuplicates(arr){
    let newArr = new Set(arr);
    console.log(`hasDuplicates => ${newArr.size === arr.length}`);
}
hasDuplicates([1,2,3,4,5,5]);