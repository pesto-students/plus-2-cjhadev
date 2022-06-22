// Given an expression string x. 
// Examine whether the pairs and the orders of“{“,”}”,”(“,”)”,”[“,”]” are correct in exp.For example, 
// the function should return 'true' for exp= “[()]{}{()()}” and 
// 'false' for exp = “[(])”.
// Example 1:
// Input:{([])}
// Output:true
// Explanation:{ ( [ ] ) }. 
// Same colored brackets can form balaced pairs, 
// with 0 number of unbalanced bracket.
var strbrackets = "[()]{}{()()}"
const parenthesisChecker = (strbrackets) => {
    const stack = []
    const map = {')':'(','}':'{',']':'['}
    for (const c of strbrackets) {
        if (c in map) {
            if (stack[stack.length - 1] !== map[c]) return 'Unbalanced Brackets'
            stack.pop()
        } else {
            stack.push(c)
        }
    }
    
    if(stack.length === 0) {
        return 'Balanced Brackets';
    }
}

console.log(parenthesisChecker(strbrackets));