// Given an one-dimensional unsorted array A containing N integers.
// You are also given aninteger B, 
// find if there exists a pair of elements in the array whose difference is B.
// Return1 if any such pair exists else return 0. 
// Problem Constraints 1 <= N <= 105 -103 <= A[i]<= 103 -105 <= B <= 105
// Input Format First argument is an integer array A of size N. 
// Second argument is aninteger B.
// Output Format Return 1 if any such pair exists else return 0.
// Example Input Input 1: A = [5, 10, 3, 2, 50, 80] B = 78 Input 2: A = [-10, 20] 
// B = 30Example Output Output 1: 1 Output 2: 1
// Example Explanation 
// Explanation 1: Pair (80, 2) gives a difference of 78. 
// Explanation 2:Pair (20, -10) gives a difference of 30 i.e 20 - (-10) => 20 + 10 => 30
let arr = [5, 10, 3, 2, 50, 80]
let B = 42
const matchDifferencePair = (array) => {
    let sortedArray = array.sort(function(a,b){return a - b});
    
    //Method -1
    //Time Complexity => O(n2)    
    // let isPairFound;
    // for(let i = sortedArray.length - 1; i < sortedArray.length && i > 0; i--){
    //     for(let j = i; j < sortedArray.length && j > 0; j--){
    //         //console.log(`${i} - ${j}`)
    //         if((sortedArray[i] - sortedArray[j-1]) == B){
    //             //console.log(sortedArray[i] - sortedArray[j-1])
    //             isPairFound = 1;
    //             return isPairFound
    //         }else{
    //             isPairFound = 0;
    //         }

    //     }
    // }

    //Method -2
    //Time Complexity => O(n)
    let left = 0;
    let right = 1;
    let pairFound;
    while(right < sortedArray.length){
        let pairdDiff = sortedArray[right] - sortedArray[left];
        console.log(`${right} - ${left} - ${pairdDiff}`)
        if(pairdDiff > 0 && pairdDiff == B){
            pairFound = 1;
            return pairFound
        }{
            right++;
        }
        if(right == sortedArray.length){
            console.log(sortedArray.length)
            left++;
            right = left + 1; 
        }
    }
    
    return 0;
}
console.log(matchDifferencePair(arr))
