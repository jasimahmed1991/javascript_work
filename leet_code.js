 //############## one start #################

 //  Question: Remove Duplicates from Sorted Array
 // Description: Given a sorted array nums, remove the duplicates in-place such that each element appears only once and returns the new length.

// let nums = [1,2,1,3,4,5,5];

// const nums_unique = new Set(nums);


// const new_array = [];
// for(num of nums_unique){
// 	new_array.push(num);
// }

// console.log(new_array);




//second method

function removeDuplicates(nums) {
    if (nums.length === 0) {
        return 0;
    }
    
    let i = 0;
    for (let j = 1; j < nums.length; j++) {
        if (nums[j] !== nums[i]) {
            i++;
            nums[i] = nums[j];
        }
    }
    
    return i + 1;
}

// Test the function
const nums = [1,1,2,1,1,3,4,5,5];
const length = removeDuplicates(nums);
console.log(`New length: ${length}`);
console.log(`Array after removing duplicates: ${nums.slice(0, length)}`);



//############## one end #################