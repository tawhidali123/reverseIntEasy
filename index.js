
// Given a 32-bit signed integer, reverse digits of an integer.

// Example 1:

// Input: 123
// Output: 321
// Example 2:

// Input: -123
// Output: -321
// Example 3:

// Input: 120
// Output: 21

// gameplan:
// make integer to string
// loop through string reversed
// if 0 dont push nothing
// if negative pop the negative symbol to front


function reverseInt(int){
  let string = int.toString()
  let arr = []

  for(i = string.length - 1; i >= 0; i--){
    if(string[i] !== '0'){
      arr.push(string[i])
    } 
    if(string[i] === '-') {
      arr.unshift(string[i])
    }
  }
 
  let joined = arr.join("")
  return parseInt(joined)
}

// reverseInt(120)
reverseInt(-123)