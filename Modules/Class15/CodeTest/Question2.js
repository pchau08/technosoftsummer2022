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



  class Question2 {
    Question2(A) {
      for (i = 1; i < 1000000; i++) {
        if(!A.includes(i)) return i;
      }
    }
  }


  console.log(solution([2, 3, 1, 56, 23, 11]));

  module.exports = Question2;
