//############## one start #################

//  Question: Remove Duplicates from Sorted Array
// Description: Given a sorted array nums, remove the duplicates in-place such that each element appears only once and returns the new length.

//@@@@@@@
// let nums = [1,2,1,3,4,5,5];

// const nums_unique = new Set(nums);

// const new_array = [];
// for(num of nums_unique){
// 	new_array.push(num);
// }

// console.log(new_array);
//@@@@@@@

//second method

//@@@@@@@
// function removeDuplicates(nums) {
//     if (nums.length === 0) {
//         return 0;
//     }

//     let i = 0;
//     for (let j = 1; j < nums.length; j++) {
//         if (nums[j] !== nums[i]) {
//             i++;
//             nums[i] = nums[j];
//         }
//     }

//     return i + 1;
// }

// // Test the function
// const nums = [1,1,2,1,1,3,4,5,5];
// const length = removeDuplicates(nums);
// console.log(`New length: ${length}`);
// console.log(`Array after removing duplicates: ${nums.slice(0, length)}`);
//@@@@@@@

//############## one end #################

// ########## second start ############

//*******Given an array with all distinct elements, find the largest three elements. Expected time complexity is O(n) and extra space is O(1).  **********

//@@@@@@@@@@@@@@@@@@@@@

// const numbers = [10,15,20,30,100,12,18];
// let first = 0;
// let second = 0;
// let third = 0;
// const slots_array = [];

// for(number of numbers){
//     if(number > first){
//         third = second;
//         second = first;
//         first = number;
//     }else if(number > second){
//         third = second;
//         second = number;
//     }else{
//         third = number;
//     }

// }

// console.log(first,second,third);

//@@@@@@@@@@@@@@@@@@@

//second approach: this is my approach
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// const  numbers = [10,12,8,5,13,20,20];
// const large_three = [];
// for(number of numbers){
//     if(large_three.length == 0){
//         large_three.push(number);
//     }else{
//         if(large_three[0] >= number ){
//             large_three.push(number);
//         }else{
//             large_three.unshift(number);
//         }
//     }
// }

// console.log(large_three);
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// ########## second start ############

// ############ third start #################

//Given an array of integers, our task is to write a program that efficiently finds the second-largest element present in the array.

//The idea is to sort the array in descending order and then return the second element which is not equal to the largest element from the sorted array.

// @@@@@@@@@@@@@@@@@@@@@@@@@@

// const numbers = [10,15,20,30,100,12,18];
// let first = 0;
// let second = 0;
// const slots_array = [];

// for(number of numbers){
//     if(number > first){
//         third = second;
//         second = first;
//         first = number;
//     }else if(number > second){
//         third = second;
//         second = number;
//     }else{
//         third = number;
//     }

// }

// console.log(first,second,third);

// @@@@@@@@@@@@@@@@@@@@@@@@@@

// ############ third start #################

// ################### FOURTH START ##################

//Rearrange array such that even positioned are greater than odd

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// Example usage

function rearrangeArray(arr) {
  //create a copy of original array
  // Create a copy of the original array
  const sortedArr = arr.slice();

  // Sort the copied array in ascending order
  sortedArr.sort((a, b) => a - b);

  let evenIndex = 0;
  let oddIndex = 1;
  const rearrangedArr = [];
  // Iterate over the sorted array
  for (let i = 0; i < sortedArr.length; i++) {
    if (i % 2 === 0) {
      rearrangedArr[evenIndex] = sortedArr[i];
      evenIndex += 2;
    } else {
      rearrangedArr[oddIndex] = sortedArr[i];
      oddIndex += 2;
    }
  }
  return rearrangedArr;
}

const originalArray = [1, 5, 2, 7, 4, 8];
const rearranged = rearrangeArray(originalArray);
console.log(rearranged);
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// ###################3 FOURTH END ##################
