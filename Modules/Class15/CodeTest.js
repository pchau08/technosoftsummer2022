
/**
 * Create a function to return an array 
 *  after removing given number from the given array
 * 
 * 
 * 
 * [1, 2, 3, 4, 5] , 2  -> [1, 3, 4, 5]
 * 
 * [21, 32, 12, 43, 45, 65, 12], 12 -> [21, 32, 43, 45, 65]
 * 
 * [-1, 2, 43, 65] , 11 -> [-1, 2, 43, 65]
 */


//  function removeItemOnce(arr, value) {
//     var index = arr.indexOf(value);
//     if (index > -1) {
//       arr.splice(index, 1);
//     }
//     return arr;
//   }

//   console.log(removeItemOnce([1, 2, 3, 4, 5], 2)) 


/**
 * Create a function to return the missing smallest positive number in given array
 * 
 * 
 * [1, 2, 3, 4, 5]   ->   6
 * 
 * [2, 3, 1, 56, 23, 11]  ->   4
 * 
 * [-1, 0, 2, 1]    ->  3
 * 
 * [1, 1, 2, 4, 3, 6, 4, 7, 9] ->   5
 * 
 * 
 */

//  function solution(A) {
//     for (i = 1; i < 1000000; i++) {
//       if(!A.includes(i)) return i;
//     }
//   }
  
//   console.log(solution([2, 3, 1, 56, 23, 11]));

/**
 * Create a function to return the points to be marked against for over speeding.
 * 
 * For every 5mph over the speed limit, 1 point should be marked
 * 
 * function will:
 *      take userSpeed and speedLimit as input
 *      return the number of points should be marked against the license.
 * 
 * 
 * 
 * sl= 60 , us = 70 -> points = 2
 * 
 * sl = 60 , us = 63 -> points = 0
 * 
 * sl = 75 , us = 70 -> points = 0
 * 
 * sl = 80 , us = 88 -> points = 1
 */

// function speeding(userSpeed, speedLimit) {
//     const userSpeed = 80;
//     const speedLimit = 60;
    
// }


class CodeTest {
  //Question1
  removeItemOnce(arr, value) {
    var index = arr.indexOf(value);
    if (index > -1) {
      arr.splice(index, 1);
    }
    return arr;
  }

  //Question 2
  solution(A) {
    for (i = 1; i < 1000000; i++) {
      if(!A.includes(i)) return i;
    }
  }
}

console.log(removeItemOnce([1, 2, 3, 4, 5], 2)) //removed #2 from the array
console.log(solution([2, 3, 1, 56, 23, 11]));

module.exports = CodeTest;

